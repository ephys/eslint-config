## FooBarHQ React style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

### Component declaration

> ESLint:  
> `'react/prefer-stateless-function': ['error']`  
> `'react/prefer-es6-class': ['error']`  
> `'react/jsx-pascal-case': ['error', 'always']`

Component names should be written in PascalCase.

Components that do no have a `state` should be written as pure functions, those
that do should be written as native es6 classes.

`propTypes` and other static properties should be written as follows:

```javascript
// es6 classes - stateful components
class Header extends React.Component {
  // declare propTypes as static fields:
  static propTypes = ...;

  render() {
    // render logic
  }
}

// pure functions - stateless components
function Body(props) {
  // render logic
}

Body.propTypes = ...;
```

React Event handlers should always be named `handle<NAME>`.

### Component usage

> ESLint:  
> `'react/jsx-space-before-closing': ['error', 'always']`  
> `'react/jsx-wrap-multilines': ['error']`

Multiline components must be wrapper in parentheses.

```javascript
(
  <div>
    <p>Hello {this.props.name}</p>
  </div>
);
```

### Spacing

> ESLint: `'react/jsx-curly-spacing': ['error', 'never']`

Similarly to template strings, do not add spacing inside JSX curly brackets. This helps distinguish them from
object literals.

