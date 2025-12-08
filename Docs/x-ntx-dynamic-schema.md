Use the x-ntx-dynamic-schema Specification Extension to indicate to Nintex Workflow that the data-structure of a parameter or response object is dynamic. The data structure will be defined using a separate call to the API when the action is being configured.

Example: 
If you're defining an operation that adds a row to a spreadsheet, you probably won't know in advance what the structure of the spreadsheet will be, so you can't code it into your OpenAPI Specification like you would a normal operation.

With x-ntx-dynamic-schema, the data structure of the operation is defined by querying the API when the action is configured in the workflow designer, the same way that x-ntx-dynamic-values queries the API for a list of values for the designer to choose from in a drop-down list.



ClosedLooking for an example?
Jump to:

Prerequisites
How to use x-ntx-dynamic-schema
Step 1: Define the helper operation
Step 2: Define the dependent operation
Step 3: Add the x-ntx-dynamic-schema property
Where to use x-ntx-dynamic-schema
x-ntx-dynamic-schema properties
operationId
value-path
parameters
Limitations
Prerequisites
The API must provide an endpoint that returns the data structure as valid JSON schema.

Example: The endpoint returns an array of fields, where each field is an object with two string properties for the display name and ID of the field.

For more information on the JSON schema, see json-schema.org.

Example schema:


"fields": {
  "type": "array",
  "items" :{
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
      },
      "id": {
        "type": "string"
      }
    }
  }
}  
How to use x-ntx-dynamic-schema
Step 1: Define the helper operation
The helper operation retrieves the dynamic data structure that the dependent operation will use.

Note: The helper operation must return the data structure in JSON schema.

In our spreadsheet example, the /columnDefinition endpoint takes a spreadsheet ID as a parameter and returns the names and column IDs of that spreadsheet's columns.

Any operations that need to read or update a spreadsheet will use this helper operation to first retrieve the data structure of that spreadsheet.

//...
"paths": {
  "/columnDefinition": {
    "get": {
      "x-ntx-visibility": "internal",
      "operationId": "columnDef",
      "parameters": [
        {
          "in": "query",
          "name": "id",
          "type": "string",
          "description": "Data to add",
          "required": true,
        }
      ],
      "responses": {
        "200": {
          "description": "successful operation",
          "schema": {
            "type": "object",
              "properties": {
                "fields": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string",
                      },
                      "id": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
Step 2: Define the dependent operation
The dependent operation is the operation that uses the dynamic data structure in its parameters or response definition.

When the workflow action for the dependent operation is configured, the helper operation is first called to retrieve the data structure. The data structure is then incorporated into the definition of the dependent operation and presented as fields to the workflow designer in the Action pane.

In our spreadsheet API example, the /sheetRow operation that updates the spreadsheet row is the dependent operation. It uses the spreadsheet data structure in its parameters so that it can display the columns as fields in the workflow designer.

//...
"paths": {
  //...
  "/sheetRow": {
    "post": {
      "operationId": "addSheetRow",
      "parameters": [
        {
          "in": "query",
          "name": "id",
          "type": "string",
          "description": "ID of the spreadsheet to add",
          "required": true,
        },
        {
          "in": "query",
          "name": "data",
          "description": "ID of the spreadsheet to add",
          "required": true,
          "type":"array",
          //This parameter will use dynamic-schema
      ],
      "responses": {
        "200": {
          "description": "OK"
        }
      }
    }
  }
},
Step 3: Add the x-ntx-dynamic-schema property
Add the x-ntx-dynamic-schema specification extension to the parameter or response that needs the dynamic data structure. The dynamic-schema properties define:

the helper operation to use
where the data structure can be found in the helper operation's response
any parameters that need to be passed to the helper operation.
To add x-ntx-dynamic-schema:

Inside the dynamic parameter or response object, add x-ntx-dynamic-schema.
In our spreadsheet example, we'll add it in the /sheetRow operation's data parameter.
Inside the x-ntx-dynamic-schema object, add:
The operationId of the helper operation.
This field is required.
The value-path: the property or JSON path to the schema object in the helper operation's response that you will use as the data structure.
This field is required.
See x-ntx-dynamic-schema properties below for more detail on these properties.

If the helper operation needs parameters:

Add a parameters object inside the x-ntx-dynamic-schema object.
Note: Inside the dynamic-schema object, parameters are defined as an object, not an array.

Inside the parameters object, add each parameter required by the helper operation:
For static parameters, add each parameter as a key-value pair.

For parameters supplied by the user configuring the action:

Add an object for each parameter inside the parameters object, with the name of the parameter as the object key.

Inside that object, add a single property with the key of parameter and the name of the parameter as the value.

Note: The parameter names should match the parameters defined in the helper operation.

If your helper operation is itself dependent on another operation using x-ntx-dynamic-values or x-ntx-dynamic-schema, make sure to include all parameters required further up the chain. See Cascading dynamic values.

Where to use x-ntx-dynamic-schema
Use x-ntx-dynamic-schema inside:

The parameter object of a field.
The property of an object within a parameter.
The property of a response object.
Note: x-ntx-dynamic-schema is currently not supported in body parameters.

You can also use x-ntx-dynamic-schema with references. See Streamline with references.

Copy
//...
 "/sheetRow": {
    "post": {
      "operationId": "addSheetRow",
      "parameters": [
        //...
        {
          "in": "query",
          "name": "data",
          "description": "ID of the spreadsheet to add",
          "required": true,
          "type":"array",
          "x-ntx-dynamic-schema": {
            "operationId": "columnDef",
            "value-path": "fields",
            "parameters": {
              "id": {
                "parameter": "id"
              }
            }
          },
        },
      ],
 //...
x-ntx-dynamic-schema properties
operationId
The operationId of the helper operation that retrieves the data structure. The operation must return the data structure as a JSON schema.

Example: 
A fictional support ticket API allows users to create and update tickets. The API provides an endpoint /ticketType that retrieves the schema of fields for a ticket type.

To tell dynamic-schema to use the /ticketType endpoint to get the ticket data structure, we add the /ticketType's operationId as a property of the dynamic-schema object.


"paths": {
  "/ticketType" : {
    "get" : {
    "summary" : "Get ticket field definitions",
    "operationId": "getTicketType",
    //...
    }
  }
}

"paths": {
  "/createTicket" : {
    "post" : {
      "summary" : "Create a new ticket",
      "operationId" : "addRow",
      "parameters" : [
        //...
        {
          "name": "content",
          "in": "body",
          "description" : "Add fields",
          "required" : true,
          "schema": {
            "type" : "object",
            "x-ntx-dynamic-values" : {
              "operationId" : "getStructure"
            }
          }
        }
      ]
    }
  }
}
value-path
The path to the data structure in the helper operation's response.

Example: 
The /ticketType endpoint returns a metadata object that includes a fields array describing the ticket's fields.


"x-ntx-dynamic-schema": {
  "operationId": getTicketType",
  "value-path": "metadata/fields"
}
parameters
Any parameters that need to be passed to the helper operation. These can be static values or a dynamic value defined when the action is configured.

Note: These parameters are defined in a parameters object, not an array.

Inside the parameters object, define each parameter you need to pass, using the name of the parameter as it is defined in the helper operation:

To pass a dynamic value to a parameter, define that parameter as an object with the property of parameter and the value of the parameter name.
To pass a static value in a parameter, define the parameter with the value you want to pass.
Example: The /ticketType operation has two parameters of department and queryType. The department parameter will be displayed as a field when configuring the action. For the queryType parameter , we want to always pass the same value of full, which will tell the API to return the full ticket description in the payload. This field will not be displayed in the action configuration.


"x-ntx-dynamic-schema": {
  "operationId": "getStructure",
  "value-path": "metadata/fields",
  "parameters": {
    "department": {
      "parameter": "department"
    },
    "queryType": "full"
  }
}
Limitations
x-ntx-dynamic-schema is currently not supported in body parameters.