Use the x-ntx-query-builder Specification Extension to display the condition builder, which constructs an OData filter string.

Example: You have an operation that retrieves a long list of records; it also provides an OData query filter to only retrieve a subset of the records that match certain fields.

x-ntx-query-builder supports OData 3 and OData 4.

ClosedLooking for an example?


Prerequisites
The API must provide an endpoint that accepts OData formatted strings.

For more information on OData protocols, see odata.org.

How to use x-ntx-query-builder
Create the operation that uses the filter.
Inside the filter parameter, add x-ntx-query-builder.
Inside the x-ntx-query-builder object, add a schema object describing the data to be filtered, defined as either:
A static schema.
A dynamic schema using x-ntx-dynamic-schema.
If you want to specify an OData format, add the key format to the x-ntx-query-builder object with a value of either:
odata3.
odata4.
OData 3 is used by default if no format is specified.

For more information on using x-ntx-dynamic-schema, see x-ntx-dynamic-schema.

Where to use x-ntx-query-builder
Use x-ntx-query-builder inside:

The parameter object of a field.
A property of an object within a parameter.
A property of a response object.
Copy
{
  "name": "$filter",
  "in": "query",
  "required": false,
  "type": "string",
  "x-ntx-query-builder": {
    "schema": {
      "x-ntx-dynamic-schema": {
        "operationId": "GetFieldsSchema",
        "parameters": {
          "siteUrl": {
            "parameter": "siteUrl"
          },
          "listName": {
            "parameter": "listName"
          }
        },
        "value-path": "Schema/Items"
      }
    },
    "format": "odata4",
    "exclusions": {
      "Text": ["ne", "eq null", "ne null", "contains", "endswith"],
      "Boolean": ["ne"]
    }
  }
}
x-ntx-query-builder properties
schema
The schema of the fields to use to populate the condition builder. This can be a static schema, or retrieved from a helper operation using x-ntx-dynamic-schema.

For more information on using x-ntx-dynamic-schema, see x-ntx-dynamic-schema.


"x-ntx-query-builder": {
  "schema": {
    "x-ntx-dynamic-schema": {
      "operationId": "GetFieldsSchema",
      "parameters": {
        "siteUrl": {
          "parameter": "siteUrl"
        },
        "listName": {
          "parameter": "listName"
        }
      },
      "value-path": "Schema/Items"
    }
  }
}
format
The OData format to send to the API. Nintex Workflow supports OData 3 and OData 4.

The available values are:

odata3
odata4.
This field is optional. Nintex Workflow defaults to using OData 3 if the field is not supplied.


"x-ntx-query-builder": {
  "schema": {
    [...]
  },
  "format": "odata4"
}
exclusions
A list of the filters you don't want to available in the action configuration. Exclusions are listed as an array of strings per data type.

This field is optional.


"x-ntx-query-builder": {
  "schema": {
    [...]
  },
  "exclusions": {
    "Text": ["ne", "eq null", "ne null", "contains", "endswith"],
    "Boolean": ["ne"]
  }
}