export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "object",
            "name": "banner",
            "title": "Page Banner",
            "description": "The banner displayed at the top of the landing page",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Banner Title",
                    "description": "The first line of text displayed in the page banner",
                    "validation": Rule => Rule.required()
                },
                {
                    "type": "markdown",
                    "name": "subtitle",
                    "title": "Banner Subtitle",
                    "description": "The text displayed below the banner title",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "show_scroll_button",
                    "title": "Show Scroll Button",
                    "description": "Displays a button at the bottom of the page banner that scrolls down to the page content when clicked",
                    "validation": null
                }
            ]
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Home sections",
            "validation": null,
            "of": [
                {
                    "type": "icons"
                },
                {
                    "type": "highlights"
                },
                {
                    "type": "features"
                },
                {
                    "type": "spotlights"
                }
            ]
        },
        {
            "type": "object",
            "name": "cta",
            "title": "CTA",
            "description": "The CTA displayed at the bottom of the landing page",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Enabled",
                    "description": "displays the CTA at the bottom of the landing page",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "title",
                    "title": "CTA Title",
                    "description": "the first line of text displayed in the CTA",
                    "validation": null
                },
                {
                    "type": "markdown",
                    "name": "text",
                    "title": "CTA Text",
                    "description": "The text displayed below the CTA title",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "background_style",
                    "title": "Background Style",
                    "description": "Controls the CTA background color",
                    "initialValue": "style1",
                    "validation": null,
                    "options": {
                        "list": [
                            "style1",
                            "style2",
                            "style3"
                        ]
                    }
                },
                {
                    "type": "array",
                    "name": "actions",
                    "title": "CTA Action Buttons",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
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
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Home URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
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
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}