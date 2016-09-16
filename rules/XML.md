## FooBarHQ XML style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

It is also valid for XML-like syntaxes such as HTML and JSX.

### Attributes

- Multiline attributes should always start on a new line.
- Do not surround the equal (`=`) sign with any space.
- Surround all attribute values with double quotes symbols (`"`).
  - Except if the language requires otherwise (such as in dynamic JSX props).
- Boolean attributes should not have a value defined.

```html
<input
  class="dew"
  name="username" />

<textarea className="dex"></textarea>
```

### Brackets

- The closing bracket should be placed right after the last prop of the component.
- It should also always be separated from the last prop with a space if and only if it is self-closing.
- The opening bracket should never be followed by a space.
