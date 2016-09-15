## FooBarHQ FlowType style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

### Syntax

> ESlint: `flowtype/boolean-style: ['error', 'boolean']`  

- `boolean` is preferred over `bool`, as it matches the Wrapper object `Boolean` and the primitive name `boolean`.
- Primitives types should be all lowercase.
- Objects should be CamelCase.
- Array shorthands should be used over Array generics (`string[]` rather than `Array<string>`).

### Spacing

> ESlint:  
> `'flowtype/generic-spacing': ['error', 'never']`  
> `'flowtype/space-before-generic-bracket': [2, 'never']`  
> `'flowtype/space-after-type-colon': [2, 'always']`  
> `'flowtype/space-before-type-colon': [2, 'never']`  
> `'flowtype/union-intersection-spacing': [2, 'always']`

- Never inside generics (`Promise<string>` rather than `Promise< string >`).
- Never before a generic (`Promise<string>` rather than `Promise <string>`).
- Always after a colon, never before a colon. (`aVar: string`).
- Always around intersection operators. (`string | number`, `string & boolean`).

### Semicolons / comma

> `'flowtype/semi': [2, 'always']`  
> `'flowtype/delimiter-dangle': [2, 'always-multiline']`
> `'babel/flow-object-type': [2, 'comma']`

- Always add a colon after a type declaration.
- Use commas inside object type declarations.
- Always have a trailing comma for multiline object type declarations.

### `@flow` annotation

> ESlint: `flowtype/require-valid-file-annotation: ['error', 'never']`  

Never, use `flow check --all` instead.

