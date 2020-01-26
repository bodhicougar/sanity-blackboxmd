export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "description": "The bold first line of text in the page content area",
            "validation": Rule => Rule.required()
        },
        {
            "type": "boolean",
            "name": "display_header",
            "title": "Display Page Header",
            "description": "Displays the site title at the top of the page",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Page Subtitle",
            "description": "The text displayed below the page title",
            "validation": null
        },
        {
            "type": "image",
            "name": "content_img",
            "title": "Content Image",
            "description": "The image displayed below the page subtitle",
            "validation": null
        },
        {
            "type": "object",
            "name": "home",
            "title": "Home Sections",
            "description": "Configures the page sections for the home highlights and spotlights sections",
            "validation": null,
            "fields": [
                {
                    "type": "object",
                    "name": "highlights",
                    "title": "Highlights Section",
                    "validation": null,
                    "fields": [
                        {
                            "type": "boolean",
                            "name": "enabled",
                            "title": "Enabled",
                            "description": "displays the page highlight in the home highlights section",
                            "validation": null
                        },
                        {
                            "type": "number",
                            "name": "weight",
                            "title": "Weight",
                            "description": "The index of the page highlight in the home highlights section",
                            "initialValue": 1,
                            "validation": Rule => Rule.required().integer()
                        },
                        {
                            "type": "markdown",
                            "name": "excerpt",
                            "title": "Page Excerpt",
                            "description": "The excerpt displayed in the home highlights section",
                            "validation": null
                        },
                        {
                            "type": "object",
                            "name": "home_img",
                            "title": "Home Highlight Image",
                            "description": "The image displayed in the home highlights section",
                            "validation": null,
                            "fields": [
                                {
                                    "type": "image",
                                    "name": "path",
                                    "title": "Image",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "data_position",
                                    "title": "Data Position",
                                    "description": "The position of the image in its container (center, center left, right, etc.)",
                                    "initialValue": "center right",
                                    "validation": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "object",
                    "name": "spotlights",
                    "title": "Spotlights Section",
                    "validation": null,
                    "fields": [
                        {
                            "type": "boolean",
                            "name": "enabled",
                            "title": "Enabled",
                            "description": "displays the page highlight in the home spotlights section",
                            "validation": null
                        },
                        {
                            "type": "number",
                            "name": "weight",
                            "title": "Weight",
                            "description": "The index of the page highlight in the home spotlights section",
                            "initialValue": 1,
                            "validation": Rule => Rule.required().integer()
                        },
                        {
                            "type": "markdown",
                            "name": "excerpt",
                            "title": "Page Excerpt",
                            "description": "The excerpt displayed in the home spotlights section",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "home_img_path",
                            "title": "Home Spotlight Image",
                            "description": "The image displayed in the home spotlights section",
                            "validation": null
                        }
                    ]
                }
            ]
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Page URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
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