Use the x-ntx-summary Specification Extension to override the label for a field or operation in your Xtension in Nintex Workflow .

ClosedLooking for an example?
How to use x-ntx-summary
Add the key x-ntx-summary to the parameter, property or operation you want to re-label, with the value of the new label to use.

Where to use x-ntx-summary
You can use x-ntx-summary:

In the parameter object of a field.
In a property of an object within a parameter.

In the property of a response object.

In the HTTP method object of an operation.
Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "x-ntx-summary": "New operation name",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "exampleField",
        "type": "string",
        "in": "query",
        "x-ntx-summary": "New Field Name"
      }
	],
    "responses": {
      "200": {
         "description": "OK",
      }
    }
  }
}