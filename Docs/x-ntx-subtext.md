Use the x-ntx-subtext Specification Extension to add a short instruction or description below a field in your Xtension in Nintex Workflow.



How to use x-ntx-subtext
Add the key x-ntx-subtext to the parameter or property you want to add additional text to, with the value of the text to display.

Where to use x-ntx-subtext
You can use x-ntx-subtext in the parameter object of a field.

Copy
 

"/example": {
  "post": {
    "summary": "Post request",
    "x-ntx-summary": "New operation name",
    "produces": [ "application/json" ],
    "parameters": [
      {
        "name": "Summary",
        "type": "string",
        "in": "query",
        "x-ntx-subtext": "Sub-text additional text"
      }
	],
    "responses": {
      "200": {
         "description": "OK",
      }
    }
  }
}
Recommendations
Only use additional text when necessary to clarify how the workflow designer should interact with the field, such as required formats, limitations, or the number of items permitted. Where possible, use x-ntx-summary to provide field names that don't need additional explanation.

Additional text should be a single line if possible, and a maximum of two lines.

Limitations
x-ntx-subtext is only available for parameters and cannot be used to add additional text to response properties.