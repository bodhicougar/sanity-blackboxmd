export default {
    "type": "object",
    "name": "features",
    "title": "Features Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The text displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Features Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Section Subtitle",
            "description": "the text displayed below the page title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "three",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "features",
            "title": "Features",
            "description": "A list of features to be displayed in the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Feature Title",
                            "description": "The first line of text displayed in the feature",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "markdown",
                            "name": "text",
                            "title": "Feature Text",
                            "description": "The text displayed below the feature title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Feature Icon",
                            "description": "(Font Awesome icon) The icon displayed above the feature title",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Section Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Features"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "features"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}