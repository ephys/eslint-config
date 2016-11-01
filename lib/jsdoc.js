module.exports = {
  rules: {
    'valid-jsdoc': [1, {
      prefer: {
        virtual: 'abstract',
        augments: 'extends',
        constructor: 'class',
        const: 'constant',
        default: 'defaultValue',
        desc: 'description',
        host: 'external',
        fileoverview: 'file',
        overview: 'file',
        fires: 'emits',
        func: 'function',
        var: 'member',
        arg: 'param',
        argument: 'param',
        prop: 'property',
        return: 'returns',
        exception: 'throws',
        linkcode: 'link',
        linkplain: 'link',
      },

      preferType: {
        String: 'string',
        Number: 'number',
        Boolean: 'boolean',
        Symbol: 'symbol',
        Undefined: 'undefined',
        Null: 'null',
        NULL: 'null',
        function: 'Function',
        object: 'Object',
        array: 'Array',
        regexp: 'RegExp',
      },

      requireReturnDescription: true,
      requireReturnType: false,
      requireReturn: false,
      requireParamDescription: true,
    }],

    'require-jsdoc': [0, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
  },
};
