Use the x-ntx-control Specification Extension to change how a field is represented in the Nintex Workflow action panel.

 

Tree component
The tree component indents object parameters to show a hierarchy of nested properties in the Nintex Workflow action panel. The parameter must be of "type": "object", as fields are indented according to the object's schema in the OpenAPI Specification.

Note: The object does not have to be at the root level. All fields within the designated object are displayed in the tree component; any properties or objects outside the designated object, including parent properties or objects, are displayed in a flat structure.



How to use x-ntx-control
Add the key x-ntx-control to the field that you want to change the display of, with the value of the control type to use.

Currently, the display options are: tree.

Where to use x-ntx-control
You can use x-ntx-control in the parameter object of a field you want to change the display of.

Note: The tree component can only be used with "type": "object" fields.

Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "Person",
        "type": "object",
        "x-ntx-control": "tree"
        "properties": {
          "firstName": {
            "type": "string",
          },
          "lastName": {
            "type": "string",
          },
          "age": {
            "type": "integer",
          }
        }
      }
	],
    "responses": {
      "200": {
         "description": "OK",
      }
    }
  }
}
Limitations
This Specification Extension requires x-ntx-render-version: 2. See Send arrays or complex objects.