import { EMPTY_ARRAY, EMPTY_OBJECT } from '@sequelize/utils';
import type { TSESLint, TSESTree } from '@typescript-eslint/utils';

export interface NoFullImportOptions {
  packages?: { [key: string]: string };
}

/**
 * From https://github.com/JonnyBurger/eslint-plugin-small-import
 * updated to use the latest ESLint API.
 */
export const noFullImport: TSESLint.RuleModule<
  'noFullImport',
  NoFullImportOptions[]
> = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    messages: {
      noFullImport: `Import only this function instead of the whole package`,
    },
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          packages: {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    },
  },
  defaultOptions: [],

  create(context) {
    const packages = context.options[0]?.packages ?? EMPTY_OBJECT;

    const keys = Object.keys(packages);
    if (keys.length === 0) {
      throw new Error(
        'no-full-import rule requires at least one package to be specified',
      );
    }

    return {
      ImportDeclaration: function handleImports(
        node: TSESTree.ImportDeclaration,
      ): void {
        const quoteType = node.source.raw.startsWith("'") ? "'" : '"';

        const parent = node.parent as TSESTree.Program;
        const parentNode: TSESTree.ImportDeclaration | undefined =
          parent.body.find(
            (b: TSESTree.ProgramStatement) =>
              b.type === 'ImportDeclaration' && keys.includes(b.source.value),
          ) as TSESTree.ImportDeclaration | undefined;

        reportIfMatching(
          packages,
          context,
          node,
          node.source.value,
          (parentNode ? parentNode.specifiers : parent.tokens) ?? EMPTY_ARRAY,
          quoteType,
        );
      },
    };
  },
};

function reportIfMatching(
  packages: Record<string, string>,
  context: Readonly<
    TSESLint.RuleContext<'noFullImport', NoFullImportOptions[]>
  >,
  node: TSESTree.ImportDeclaration,
  name: string,
  tokens: ReadonlyArray<TSESTree.Token | TSESTree.ImportClause>,
  quoteType: '"' | "'",
): void {
  if (!Object.keys(packages).includes(name)) {
    return;
  }

  const filtered = tokens
    .filter((t: any) => {
      return [
        'key' in t && t.key.type === 'Identifier',
        t.type === 'ImportSpecifier' &&
          Object.keys(packages).includes(t.parent.source.value),
      ].some(Boolean);
    })
    .map((t: any) => {
      if (t.imported) {
        return t.imported.name;
      }

      if (t.key) {
        return t.key.name;
      }

      return t.value;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  if (filtered.length > 0) {
    context.report({
      node,
      messageId: 'noFullImport',
      fix: (fixer) => {
        const replacement = filtered
          .map((f) => {
            return `import ${f} from ${quoteType}${name}/${f}${quoteType};`;
          })
          .join('\n');

        return fixer.replaceText(node, replacement);
      },
    });
  }
}
