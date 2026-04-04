import parser from '@typescript-eslint/parser';
import { RuleTester } from '@typescript-eslint/rule-tester';
import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { noFullImport } from '../no-full-import.js';

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;

describe('no-full-import', () => {
  it('throws when no packages are configured', () => {
    assert.throws(() => noFullImport.create({ options: [] } as any), {
      message:
        'no-full-import rule requires at least one package to be specified',
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
