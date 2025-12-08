Use the x-ntx-visibility Specification Extension to hide a field or operation from your Xtension in Nintex Workflow . This is useful for concealing actions, such as helper operations used to populate drop-down and dynamic fields, and input fields, such as those with pre-defined values that the workflow designer should not change when configuring the action.

OpenLooking for an example?
The following examples use x-ntx-visibility:

Rename fields (x-ntx-summary).
Create dynamic fields (x-ntx-dynamic-schema).
Accept an XML response
Upload files by streaming
Upload files by URL.
Download files by URL.
Download base64 files.
Upload base64 files.
How to use x-ntx-visibility
Add the key x-ntx-visibility with the value of internal to the field or operation you want to hide.

Where to use x-ntx-visibility
You can use x-ntx-visibility:

In the parameter object of a field.
In the property of an object within a parameter.
In the property of a response object.
In the HTTP method object of an operation.
Creating set values
You can use x-ntx-visibility to hide a field that has an initial value set, so this value is always sent as the value for this parameter.

To set an initial value:

If you are using the x-ntx-render-version specification extension to render complex objects, add the property x-ntx-initial with your initial value.
For example: "x-ntx-initial" : "My initial value".
If you are not using the x-ntx-render-version specification extension, use the default property to set your initial value.
For example: "default" : "My initial value".
Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "x-ntx-visibility": "internal",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "Title",
        "type": "string",
        "in": "query",
        "x-ntx-visibility": "internal"
      }
	],
    "responses": {
      "200": {
         "description": "OK",
      }
    }
  }
}