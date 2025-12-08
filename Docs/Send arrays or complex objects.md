Some APIs require parameters to be structured as arrays or complex objects, which are not currently supported by Nintex Workflow. You can send arrays or complex objects by configuring your OpenAPI Specification to use the complex object renderer.

Note: It is not possible to enable complex object support on a per-action basis. Complex objects are enabled for the whole Xtension. Currently, Nintex Workflow does not offer file support with complex objects.

Working with objects
When an OpenAPI Specification uses the complex object renderer, Nintex Workflow displays the action configurations as a flattened structure, allowing the designers access to all the object properties. Property names incorporate the names of their parent objects, ensuring complex structures can be navigated easily.

Note: We recommend you rename object properties using x-ntx-summary to ensure designers correctly configure the actions. You can also rename parent objects with an empty string to avoid their name appearing in child properties. See Rename fields (x-ntx-summary).

You can also control whether workflow designers can add properties not defined in the OpenAPI Specification to an object at design-time using additionalProperties.

Copy
{
  "exampleObject": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "ID": {
        "type": "string"
      },
      "Name": {
        "type": "string"
      }
    }
  }
}
Note: If additionalProperties is not defined for an object, it defaults to true, allowing workflow designers to add arbitrary properties to that object.

Objects returned in the operation's response are represented as objects in the designer.

Example: 
In the example opposite, the object Post Contents contains the properties of:

Your Content Text.
Media Category.
Media Object (a collection).
Network Visibility.
The Output is the object returned by the operation.



 

Working with arrays
If the parameter is an array, the array is represented as a card, and the designer can add, remove and reorder sets of values as required.



How to use x-ntx-render-version
Add a key of x-ntx-render-version with the value of 2 to your OpenAPI Specification, and define your parameter objects or arrays as you normally do.

Where to use x-ntx-render-version
Add the x-ntx-render-version property at the root level of your OpenAPI Specification.

Copy
{
  "swagger": "2.0",
  "info": {
    "version": "1",
    "title": "Example API"
  },
  "host": "www.exampleAPIs.com",
  "basePath": "/API",
  "schemes": [ "https" ],
  "x-ntx-render-version" : 2,
  "produces": [ "application/json" ],
  "paths": {...}
}
Example
ClosedSee an example OpenAPI Specification
Limitations and points to note
Complex object support is still in Advanced Preview. Read the following limitations and points to note:

The x-ntx-render-version property affects the whole OpenAPI Specification. You can't select complex object support per action.
Actions configured prior to an Xtensionusing "x-ntx-render-version": 2 will continue to render as they did previously. New actions configured with this feature enabled will be automatically updated if there are updates to the Xtension, including breaking changes if present in the OpenAPI Specification.
Array parameters are set item-by-item; you can't assign a collection variable to an array parameter.
The default property cannot be used to define initial values in object parameters. To define initial values in object parameters, use the x-ntx-initial specification extension. See x-ntx-initial.
The x-ntx-summary, title, or name property defines the text for the label.

The x-ntx-subtext property will set the text for the subtext..

The x-ntx-sublabel property sets the text for the sublabel.
If x-ntx-sublabel is not provided, the description property will set the sublabel.
The x-ntx-placeholder property sets the text for the placeholder

    "x-ntx-summary": "Summary",
    "x-ntx-sublabel": "Sublabel",
    "x-ntx-placeholder": "Placeholder",
    "x-ntx-subtext": "Subtext"


Fields are no longer ordered alphabetically. Instead, the order of fields correspond to the order that is defined in the OpenAPI Specification.
Some inputs do not yet support the [[ type ahead feature.
 