export default {
    "type": "object",
    "name": "icons",
    "title": "Icons Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The text displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Icons Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Section Subtitle",
            "description": "The text displayed below the section title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "one",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "icons",
            "title": "Icons",
            "description": "The icons displayed along the bottom of the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome icon",
                            "validation": Rule => Rule.required()
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "icon"
                        }
                    }
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
                    "Icons"
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
                    "icons"
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