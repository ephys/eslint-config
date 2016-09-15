## FooBarHQ Vanilla EcmaScript style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

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

> ESLint: `'no-void': 0, 'no-undefined': 2,`

Use `void 0` rather than `undefined`. You should also use the babel plugin that converts `undefined` to `void 0`.

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
    
  case TYPE_STRING':
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
    
  case TYPE_STRING':
    type = 'string';
    break;
}
```
