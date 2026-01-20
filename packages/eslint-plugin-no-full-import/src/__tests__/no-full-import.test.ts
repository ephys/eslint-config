import parser from '@typescript-eslint/parser';
import { RuleTester } from '@typescript-eslint/rule-tester';
// eslint-disable-next-line no-restricted-imports
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { noFullImport } from '../no-full-import.js';

describe('no-full-import', () => {
  it('throws when no packages are configured', () => {
    const tester = new RuleTester({
      languageOptions: {
        parser,
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    });

    assert.throws(() => {
      tester.run('no-full-import', noFullImport, {
        valid: [],
        invalid: [],
      });
    });
  });

  it('autofixes named imports to per-member default imports', () => {
    const tester = new RuleTester({
      languageOptions: {
        parser,
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    });

    tester.run('no-full-import', noFullImport, {
      valid: [
        {
          code: "import map from 'lodash/map';",
          options: [{ packages: { lodash: '/' } }],
        },
      ],
      invalid: [
        {
          code: "import { map, filter } from 'lodash';",
          output:
            "import map from 'lodash/map';\nimport filter from 'lodash/filter';",
          options: [{ packages: { lodash: '/' } }],
          errors: [{ messageId: 'noFullImport' }],
        },
      ],
    });
  });
});
