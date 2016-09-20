## FooBarHQ Vanilla EcmaScript style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

### Spacing

Use 2 spaces for indentation.

Never use more than one empty line for line spacing.

### Trailing commas

> AirBnB: https://github.com/airbnb/javascript#commas--dangling  
> Babel: `babel-preset-syntax-trailing-function-commas`  
> ESlint: `babel/func-params-comma-dangle: ['error', 'always-multiline']`

Multiline function parameters and calls must have a trailing comma.  
Multiline Flow type declarations should also have a trailing comma or semicolon.

### Generator Stars

> AirBnB: https://github.com/airbnb/javascript#generators--spacing  
> ESLint: `'babel/generator-star-spacing': [2, 'before']`

We're going against airBnB here and are going for adding a space before the star.

The reason is that it really doesn't look good in object shorthands for functions.

```javascript
// Good:
function *generate() {
  // ...
}

class A {
  *[Symbol.iterator]() {
    // ...
  }
}
```

```javascript
// Less good:
function* generate() {
  // ...
}

class A {
  * [Symbol.iterator]() {
    // ...
  }
}
```

### Max line length

> AirBnB: https://github.com/airbnb/javascript#strings--line-length  
> ESLint: `'max-len': ['error', {
    code: 120,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true
}]`

120 characters. Because we, at pictawall, have enormous screens.

However, strings and URLs that cause the line to go over the limit are allowed to overflow the screen.

### Console calls

> ESLint: `'no-console': [2, { allow: ['warn', 'error', 'info'] }]`

Only `console.error`, `console.warn` and `console.info` are tolerated and won't cause an error.

You are, however, invited to use the other methods when developing. You are just not allowed to use them in production.

Note, on a server environment, you are encouraged to use a proper logging library and add these methods to the list of forbidden ones.

## Block padding

> AirBnB: https://github.com/airbnb/javascript#whitespace--padded-blocks

If it makes reading the code easier, classes and methods may have **one** optional blank line at the beginning of their block.

## void 0 vs undefined

> ESLint:  
> `'no-void': 0`  
> `'no-undefined': 2,`

Use `void 0` rather than `undefined`. You should also use the babel plugin that converts `undefined` to `void 0`.

## Unary increment and decrement operators

> AirBnB: https://github.com/airbnb/javascript#variables--unary-increment-decrement  
> ESLint: `'no-plusplus': 'off'`

Use is allowed.

## Type conversion

> ESLint: `'no-implicit-coercion': 'error'``

What's clever isn't, use explicit conversion.  
Let minifiers take care of shortening it to the less human-readable coercion mechanisms.

Note: Type coercion is still allowed, just not when doing type conversion. (ie: still allowed when concatenating strings).

```javascript
// Good:
const enabled = Boolean(config.enabled);
const helloStr = String(hello);
const hugeNumber = Number('9007199254740991');
const pxCount = Number('45px'); // NaN

// Bad:
const enabled = !!config.enabled;
const helloStr = '' + hello;
const hugeNumber = +'9007199254740991';
const pxCount = +'45px'; // NaN

// Super bad:
const hugeNumber = '9007199254740991' >> 0; // returns -1
const pxCount = '45px' >> 0; // 0

// Still good:
const result = 10;
const calculus = `5 + 5 = ${result}`;
const pxCount = Number.parseInt('45px', 10); // 45
```

## Function.bind, Function.call

> ESLint:
> `'no-extra-bind': ['error']`  
> `'no-invalid-this': ['error']`

Don't bind or use Function.prototype.call, either use arrow functions or pass `this` as an argument.

Don't use `this` outside of classes, class-like objects, and mixins.

Static analysis does not work well with dynamic execution contexts, they are also
often confusing which is why tc39 is making moves to make them more intuitive.

## Mixins

Declare them as objects to differentiate them from classes.

```javascript
// Bad:
class SomeMixin {
  // methods.
}

// Badder, don't leave them as standalones.
function someMixableMethod() {

}

// Good:
const SomeMixin = {
  // methods.
};
```

## Switch-cases

> ESLint: `'no-fallthrough': [2, { commentPattern: 'fallthrough' }]`

You shouldn't let a case fall-through another one unless explicitly declaring that you are doing so
by preceding the next `case` statement with `// fallthrough`

```javascript
// Invalid
switch (GetType(aVar)) {
  case TYPE_NULL:
    type = 'null'

  case TYPE_OBJ:
    type = 'object';
    break;

  case TYPE_STRING:
    type = 'string';
    break;
}
```

```javascript
// Valid
switch (GetType(aVar)) {
  case TYPE_NULL:
    type = 'null'

  // fallthrough
  case TYPE_OBJ:
    type = 'object';
    break;

  case TYPE_STRING:
    type = 'string';
    break;
}
```

## Curly brackets

> ESLint: `'curly': 'error'`

Always surround blocks with curly brackets.
