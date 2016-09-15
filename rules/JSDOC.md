## FooBarHQ JSDoc style guide.

This style guide extends the [AirBnB style guide](https://github.com/airbnb/javascript).

### Descriptions

Write your JSDocs comments talking about the descriptee at the third person.
e.g. "Deletes the user" rather than "Delete the user".

 Separate the description and the tags with a new line.

### Parameters

Put a dash between the name and the description in `@param` entries. 
e.g. `@param {!String} email - The email of the user.`

### Preferred tags

- `@abstract` rather than `@virtual`.
- `@extends` rather than `@augments`.
- `@class` rather than `@constructor`.
- `@constant` rather than `@const`.
- `@defaultvalue` rather than `@default`.
- `@description` rather than `@desc`.
- `@external` rather than `@host`.
- `@file` rather than `@fileoverview` or `@overview`.
- `@emits` rather than `@fires`.
- `@function` or `@method` (if part of a class) rather than `@func`.
- `@member` rather than `@var`.
- `@param` rather than `@arg` or `@argument`.
- `@property` rather than `@prop`.
- `@returns` rather than `@return`.
- `@throws` rather than `@exception`.
- `@link` rather than `@linkcode` or `@linkplain`

### Types

As much as possible, and if enabled in your project, use flowtype to define types rather than JSDoc. 

### Case

- Primitive types should be lowercase. i.e. `"string"`, `"symbol"`, `"boolean"`, `"null"`, `"undefined"`
  and `"number"`. Other native types should be UpperCamelCased as they are not primitives. 
  This includes `"Object"`, `"Function"`, `"Array"`, `"RegExp"`, etc...
