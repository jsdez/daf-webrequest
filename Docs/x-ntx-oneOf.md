Use the x-ntx-oneOf Specification Extension to create a drop-down field of options that are defined in your OpenAPI Specification, similar to enum values. This Specification Extension is useful for labeling enum values, when the enum values required by the API are not user-friendly.

Note: x-ntx-oneOf creates a drop-down field that is single-select with hardcoded options. If you want to create a drop-down field with dynamically-defined options, see x-ntx-dynamic-values.

How to use x-ntx-oneOf
Add the key x-ntx-oneOf with the value of an empty array.
Inside the array, define each option as an object with two properties:
"const", which defines the value that will be sent for that option.
"title", which defines the label for that option in the drop-field.
Tip: You can also use x-ntx-anyOf to achieve the same effect.

Where to use x-ntx-oneOf
You can use x-ntx-oneOf:

In the parameter object of a field.
In the property of an object within a parameter.
Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "produces": [ "application/json" ],
    "parameters": [{
      "in": "query",
      "name": "test",
      "type": "string",
      "x-ntx-oneOf": [{
          "const": "1",
          "title": "One"
        }, {
          "const": "2",
          "title": "Two"
        }, {
          "const": "3",
          "title": "Three"
        }
      ]
    }],
  }
}