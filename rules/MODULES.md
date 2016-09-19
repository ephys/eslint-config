## FooBarHQ JavaScript Modules style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

### Module style

> ESlint: `import/no-commonjs: ['error']`  
> ESlint: `import/no-amd: ['error']`

*EcmaScript Module Syntax*, as it makes tree-shaking possible, enables better static analysis,
and will be natively supported.

There might be cases where you need to use `require`. If that is the case, disable the linting on that line.  
You should, however, aim to use `System.import(x): Promise` or `import(x): Promise`
(but both are not stable yet so this is not enforced).

### Import declaration order

> ESlint: `import/imports-first: ['error']`  
> ESlint: `import/newline-after-import: ['error']`

Import statements must be placed at the top level, before any other statement.
A new line should be inserted after the last import statement.

The order of the statements themselves is as follows:

1. Native modules (Node API or browser modules)
2. External modules (node_modules)
3. Parent modules (Modules that are in a parent or cousin directory).
4. Sibling modules (Modules that are in the same directory).
5. Index (The index of the current directory).

### Absolute imports

> ESlint: `import/no-absolute-path: ['error']`

Never, as they collide with `node_modules` and make importing the package from another project impossible.

### Lodash

Import each lodash function separately to make bundlers only bundle the necessary source code.

This rule can be removed once lodash supports tree-shaking.

```javascript
// terrible - bundles all of lodash.
import _ from 'lodash';

// bad - pollutes package.json
import map from 'lodash.map';

// good:
import map from 'lodash/map';
```
