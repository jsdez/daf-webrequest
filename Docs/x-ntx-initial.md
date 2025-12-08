x-ntx-initial
Use the x-ntx-initial Specification Extension to define an initial value for a field in your Xtension. The value is displayed in the field in the action configuration panel.

If you want to define a value that can't be seen or changed by the workflow designer when they're configuring the action, you can use x-ntx-visibility to hide the field from the workflow designer.

Note: The OpenAPI Specification must support complex objects to use x-ntx-initial. See Send arrays or complex objects.

How to use x-ntx-initial
Make sure your OpenAPI Specification supports complex objects. See Send arrays or complex objects.

In the parameter you want to initialize a value for, add the key x-ntx-initial with the value you want to use.

If the parameter is an object, see Defining values in objects

Where to use x-ntx-initial
You can use x-ntx-initial in the parameter object of the field you want to create an initial value for.

Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "Type",
        "type": "string",
        "in": "query",
        "x-ntx-initial": "My initial value"
      }
	],
    "responses": {
      "200": {
         "description": "OK",
      }
    }
  }
}

Defining values in objects
You can use x-ntx-initial to define values within an object schema by defining it at the top level of the object, the same way you define required fields:

In the parameter object, add the property x-ntx-initial.
Inside the x-ntx-initial property, add a property for each field you want to define a value for, with the value to use.
 
"start": {
  "type": "object",
  "additionalProperties": false,
  "x-ntx-initial": {
   "timeZone": "UTC",
  },
"properties": {
  "dateTime": {
    "x-ntx-summary": "Start time",
    "type": "string",
    "format": "date-time"
  },
  "timeZone": {
    "x-ntx-visibility": "internal",
    "type": "string"
  }
 }
},
Limitations
x-ntx-initial must be used in the top-level of an object only. See Defining values in objects

The x-ntx-initial specification extension requires complex object support via x-ntx-render-version: 2. If you are not using complex object support, use the default property to define a value. For more information, see Send arrays or complex objects.

Values defined by x-ntx-initial are only stored in a workflow's definition once the action has been configured. To ensure workflow actions that use x-ntx-initial operate as expected, include at least one required field that will be configured by the workflow designer, such as a connection or other required parameter. If this is not practical, use the default property to define the initial value of non-object parameters. The default property cannot be used to define initial values in object parameters.