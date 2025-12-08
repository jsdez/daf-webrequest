Customize actions with specification extensions
You can control how your Xtension behaves within Nintex Workflow using Specification Extensions and other OpenAPI keys.

Specification Extensions provide vendor-specific capabilities within the OpenAPI Specification. They can be single key-value pairs or complex objects, and can be added almost anywhere in the OpenAPI Specification. They are prefixed by a special code so that they don't disrupt the rest of the OpenAPI Specification.

In Nintex Workflow you can use Specification Extensions to hide or rename a custom action from view in the Workflow designer, create a drop-down field populated with values from the API, and much more.

 

Create dynamic or predefined fields
Define values for parameters: x-ntx-initial.
Create dynamic drop-down lists populated by the API: x-ntx-dynamic-values.
Create a static drop-down field to re-label enum options: x-ntx-oneOf.
Create parameters whose data structure may change at runtime: x-ntx-dynamic-schema.
Filter your operation using an OData query string: x-ntx-query-builder.
Send arrays or complex objects as a parameter: Send arrays or complex objects.
Customize appearance
Hide fields and actions in Nintex Workflow: x-ntx-visibility.
Rename fields and actions in Nintex Workflow: x-ntx-summary.
Add additional field information below the field name: x-ntx-sublabel.
Add additional field information below the field: x-ntx-subtext.
Display nested properties in a tree control: x-ntx-control.
Example Xtensions
Below are some example Xtensions that showcase specification extensions:

Rename fields (x-ntx-summary) with Airport Data.
Hide operations (x-ntx-visibility) with Google Tasks.
Create drop-downs (x-ntx-dynamic-values) with Google Tasks.
Create dynamic fields (x-ntx-dynamic-schema) with SharePoint.
Create OData queries (x-ntx-query-builder) with SharePoint.
Validate with regex with Airport Data.