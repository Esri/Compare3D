{
    "configurationSettings": [{
            "category": "General",
            "fields": [{
                    "type": "webscene",
                    "selection": "multiple",
                    "limit": 2
                },
                {
                    "type": "appproxies"
                }
            ]
        },
        {
            "category": "Theme",
            "fields": [{
            "type": "subcategory",
            "label": "Colors"
        },{
                    "type": "color",
                    "fieldName": "backgroundColor",
                    "tooltip": "Background color",
                    "label": "Background color:",
                    "sharedThemeProperty": "header.background"
                },
                {
                    "type": "color",
                    "fieldName": "textColor",
                    "tooltip": "Text color",
                    "label": "Text color:",
                    "sharedThemeProperty": "header.text"
                },
                {
                    "type": "color",
                    "fieldName": "slideColorTheme",
                    "tooltip": "Slide gallery color theme",
                    "label": "Slide gallery color theme",
                    "sharedThemeProperty": "button.background"
                }
            ]
        },
        {
            "category": "Options",
            "fields": [{
                    "type": "boolean",
                    "fieldName": "link",
                    "label": "Link Views",
                    "tooltip": "When true view extents linked at start"
                },
                {
                    "type": "boolean",
                    "fieldName": "panelsOpen",
                    "label": "Open info panels at start"
                }, {
                    "type": "boolean",
                    "fieldName": "legend",
                    "label": "Show legend"
                }
            ]
        }
    ],
    "values": {
        "link": true,
        "panelsOpen": true,
        "color": "#fff",
        "legend": false,
        "backgroundColor": "#333",
        "slideColorTheme": "#05668D"
    }
}