Use the x-ntx-dynamic-values Specification Extension to populate a drop-down field with a set of options from the API. The drop-down field data is retrieved in separate call to the API when the action is being configured.

ClosedLooking for an example?
Jump to:

Prerequisites
How to use x-ntx-dynamic-values
Where to use x-ntx-dynamic-values
Cascading dynamic values
x-ntx-dynamic-values properties
operationId
value-path
value-title
value-collection
parameters
Prerequisites
The API must provide an endpoint that returns the data in a valid JSON format.


{ 
  "categories": [
    {
      "name": "Finance",
      "id": "10005"
    },
    {
      "name": "Research"
      "id": "20054"
    }
  ]
}  
How to use x-ntx-dynamic-values
Create the 'helper' operation that retrieves the data.
Create the operation that uses the dynamic data.
Inside the dynamic parameter, add x-ntx-dynamic-values.
Inside the x-ntx-dynamic-values object, add:
The operationId of the helper operation that retrieves the data.
The value-path, with the property in the helper operation's response to the value you want to use for each option in the drop-down.
The value-title, with the property in the helper operation's response to the label you want to display for each option in the drop-down.
This field is optional. If you don't specify it, the value-path value is displayed as the drop-down option.
The value-collection, with the path in the helper operation's response to the value-title and value-path.
This field is optional, and can be omitted if the value-path and value-title are in the root level of the response.
If the helper operation requires parameters:

For static parameters:

Add a parameters object to the x-ntx-dynamic-values object.

Inside the parameters object, add each parameter as a key-value pair.

For parameters supplied by the user when configuring the action:
Add a  parameters object to the x-ntx-dynamic-values object.
Inside the parameters object, add each parameter required by the helper operation as an object with:
The name of the parameter as the object key.
A single property with the key of parameter and the name of the parameter as the value.
Note: The parameter names should match the parameters defined in the helper operation.

For parameters that depend on another dynamic-values operation, see Cascading dynamic values.
Where to use x-ntx-dynamic-values
Use x-ntx-dynamic-values inside parameters or other input properties you want to create a drop-down field for.

You can also use x-ntx-dynamic-values with references. See Streamline with references.

Copy

"/Create": {
  "post": {
    "summary": "Create a record",
    "description": "Create a record",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "category",
        "in": "query",
        "description": "Category",
        "required": true,
        "type": "string",
        "x-ntx-dynamic-values": {
          "operationId": "getCategories",
          "value-path": "id",
          "value-title": "name",
          "value-collection":"categories"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "OK"
      }
    }
  }
}
Cascading dynamic values
 

Sometimes one helper operation requires dynamic data from another helper operation. For example:

A ticketing platform has several departments, and each department has several teams. Tickets belong to teams within the departments.
A /getTickets operation retrieves all open tickets for a team. It needs a team ID as a parameter.
The /getTickets uses x-ntx-dynamic-values with the /getTeams operation to retrieve a list of teams.
The /getTeams operation needs a department ID as a parameter: it uses x-ntx-dynamic-values with the /getDepartments operation to retrieve a list of departments in the organization.
In the action configuration, the Get Open Tickets action will show the required parameters from /getDepartments and /getTeams.

Make sure you pass through any the parameters required by an operation further up the chain.


"paths": {
  "/getTickets" : {
    "get": {
	  "operationID" : "getTickets",
	  "parameters": [
          {
            "name": "teamID",
            "in": "query",
            "required": true,
            "x-ntx-summary": "Team",
            "type": "string",
            "x-ntx-dynamic-values": {
              "operationId": "getTeams",
              "parameters": {
                "departmentID": {
                  "parameter": "departmentID"
                }
              },
              "value-path": "teamID",
              "value-title": "teamName"
            }
          }
		],
        "responses": {
           "200": {
             "description": "OK"
            }
        }
	}
  }, 
  "/getTeams" : {
    "get": {
	  "operationID" : "getTeams",
	  "parameters": [
          {
            "name": "departmentID",
            "in": "query",
            "required": true,
            "x-ntx-summary": "Department",
            "type": "string",
            "x-ntx-dynamic-values": {
              "operationId": "getDepartments",
              "value-path": "departmentID",
              "value-title": "departmentName"
            }
          }
		],
        "responses": {
           "200": {
             "description": "OK"
            }
        }
	}
  }, 
  "/getDepartments" : {
    "get": {
	  "operationID" : "getDepartments",
	  "parameters": [],
        "responses": {
           "200": {
             "description": "OK"
            }
        }
	}
  }  
} 
x-ntx-dynamic-values properties
operationId
The operationId of the helper operation to retrieve the drop-down list options from.

Example: 
The /create endpoint needs a category id as a parameter. A list of categories is retrieved from the /getCategories operation.


"paths": {
  "/getCategories" : {
    "get" : {
      "summary" : "Get a list of categories",
      "operationId": "getCategories",
      "produces": [ "application/json" ],
      "parameters": [ ],
      "responses": {
        "200": {
          "description": "OK",
    	   "schema": {
            [...]
           }
         }
       }
     }
  }
}

"paths": {
  "/create" : {
    "post" : {
      "summary": "Create a record",
      "description": "Create a record",
      "parameters" : [
        {
          "name": "catid",
          "in": "query",
          "type": "string",
          "description" : "Category",
          "required" : true,
          "x-ntx-dynamic-values" : {
              "operationId" : "getCategories",
              "value-path" : "id"
            }
          }
        }
      ]
    }
  }
}
value-path
The field from the helper operation's response to use as the option value in the drop-down list.

Example: 
The /getCategories endpoint returns an array of objects that have a name and id. We want to use the id as the value in the drop-down list.

[
    {
      "name": "Finance",
      "id": "10005"
    },
    {
      "name": "Research"
      "id": "20054"
    }
]

"x-ntx-dynamic-values": {
  "operationId": "getStructure", 
  "value-path": "id"
}
value-title
The field from the helper operation's response to display as the option in the drop-down list.

This property is optional. If you don't specify it, the value-path value is displayed as the drop-down option.

Example: 
The /getCategories endpoint returns an array of objects that have a name and id. We want to display the name in the drop-down list.


[
    {
      "name": "Finance",
      "id": "10005"
    },
    {
      "name": "Research"
      "id": "20054"
    }
]

"x-ntx-dynamic-values" : {
  "operationId" : "getCategories",
  "value-path"  : "id",
  "value-title" : "name"
}
value-collection
The path to the value-path (and value-title, if you have defined it) in the helper operation's response.

This property is optional. Omit this property if the value-path and value-title properties are at the root level of the response payload.

Example: 
The /getCategories endpoint returns a JSON object with an array of categories that have a name and id. The path to the name and id fields to use as the value-title and value-path is categories.


{ 
  "categories": [
    {
      "name": "Finance",
      "id": "10005"
    },
    {
      "name": "Research"
      "id": "20054"
    }
  ]
}  

"x-ntx-dynamic-values": {
  "operationId": "getStructure", 
  "value-path" : "id",
  "value-collection": "categories"
}
parameters
Any parameters that need to be passed to the helper operation. These can be static values or dynamic values defined when the action is configured.

Note: These parameters are defined in a parameters object, not an array.

Inside the parameters object, define each parameter you need to pass, using the name of the parameter as it is defined in the helper operation.

Example: The /getRecord operation has two parameters with the names category and status.

To pass a dynamic value to a parameter, define that parameter as an object with the property of parameter and the value of the parameter name.

To pass a static value in a parameter, define the parameter with the value you want to pass.


"x-ntx-dynamic-values": {
  "operationId": "getRecord",
  "parameters": {
    "category": {
      "parameter": "category"
    },
    "status": "all"
  }
}