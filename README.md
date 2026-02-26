# Contributing Recipes

Thank you for helping grow the recipe collection 🍳

This project uses a structured JSON format for all recipes.  
To keep everything searchable, consistent, and clean, please follow the format and guidelines below exactly.  
Avoid duplicate recipes!

---

## 📁 Where Recipes Go

- Add new recipes inside the `/recipes-data` directory.
- Each recipe should be a single JSON file named:

```

[slug].json

```

Example:
```

chocolate-chip-cookies.json

````

---

## 🔤 Slug Rules

The `slug` field:

- Must be lowercase
- Use hyphens instead of spaces
- No special characters
- Should match the filename exactly

Example:
```json
"slug": "chocolate-chip-cookies"
````

---

## 🧱 Required Recipe Structure

Every recipe **must** follow this structure:

```json
{
    "slug": "",
    "title": "",
    "thumbnail": "/recipes/[SLUG].webp",
    "thumbnail_credit": "",
    "video": {
        "platform": "",
        "url": ""
    },
    "servings": 0,
    "prep_time_minutes": 0,
    "cook_time_minutes": 0,
    "temperature": {
        "fahrenheit": 0,
        "celsius": 0
    },
    "components": [
        {
            "id": "",
            "name": "",
            "ingredients": [
                {
                    "name": "",
                    "quantity": 0,
                    "unit": "",
                    "metric": {
                        "quantity": 0,
                        "unit": ""
                    },
                    "optional": false,
                    "notes": ""
                }
            ],
            "instructions": [
                {
                    "step": 1,
                    "title": "",
                    "actions": [
                        ""
                    ],
                    "timer_minutes": 0
                }
            ]
        }
    ],
    "tools": [
        {
            "name": "",
            "optional": false
        }
    ],
    "notes": [
        ""
    ],
    "tags": [
        ""
    ]
}
```

---

# 🖼 Thumbnail Guidelines

* Must be `.webp`
* File name must match the slug
* Stored in `/static/recipes-data/`
* Keep image focused on the food
* Avoid visible faces or personal identifiers
* Add credit in `"thumbnail_credit"`

Example:

```json
"thumbnail": "/recipes/chocolate-chip-cookies.webp",
"thumbnail_credit": "username"
```

---

# 🎥 Video Field

If a recipe has an associated video:

```json
"video": {
    "platform": "YouTube",
    "url": "https://youtube.com/embed/..."
}
```

If no video exists:

```json
"video": {
    "platform": "",
    "url": ""
}
```

---

# 🍽 Servings & Time

All time values must be in **minutes**.

```json
"servings": 4,
"prep_time_minutes": 15,
"cook_time_minutes": 25
```

If not applicable, use `0`.

---

# 🌡 Temperature

Always include both Fahrenheit and Celsius.

```json
"temperature": {
    "fahrenheit": 350,
    "celsius": 175
}
```

If no baking temperature is required:

```json
"temperature": {
    "fahrenheit": 0,
    "celsius": 0
}
```

---

# 🧩 Components

Recipes can have multiple components (e.g., Cake + Frosting).

Each component requires:

* `id` → lowercase, hyphenated
* `name` → display name
* `ingredients`
* `instructions`

Example:

```json
{
    "id": "cake",
    "name": "Chocolate Cake",
    "ingredients": [],
    "instructions": []
}
```

---

# 🧂 Ingredients Format

Each ingredient must include:

```json
{
    "name": "Flour",
    "quantity": 2,
    "unit": "cups",
    "metric": {
        "quantity": 240,
        "unit": "grams"
    },
    "optional": false,
    "notes": ""
}
```

### Rules

* Always include metric values when possible
* Use numeric quantities only
* Do not write fractions (use decimals instead)

  * ✅ 1.5
  * ❌ 1 1/2
* Set `"optional": true` if ingredient is optional
* Use `"notes"` for clarifications like "room temperature"

---

# 📝 Instructions Format

Each step must include:

```json
{
    "step": 1,
    "title": "Mix Dry Ingredients",
    "actions": [
        "Whisk flour and baking powder together in a bowl."
    ],
    "timer_minutes": 0
}
```

### Rules

* Steps must be numbered sequentially starting at 1
* Use clear, concise action sentences
* `"timer_minutes"` should be included if relevant
* Multiple actions can exist in one step

---

# 🔧 Tools

List tools used:

```json
"tools": [
    {
        "name": "Mixing Bowl",
        "optional": false
    }
]
```

Set `"optional": true` if it can be substituted.

---

# 📌 Notes

Add helpful tips or variations:

```json
"notes": [
    "Store in an airtight container for up to 3 days.",
    "Can substitute almond milk."
]
```

---

# 🏷 Tags

Tags help with filtering and search.

Examples:

```json
"tags": [
    "dessert",
    "baking",
    "vegetarian"
]
```

Guidelines:

* Lowercase
* No spaces (use hyphens if needed)
* Keep relevant and specific

---

# ✅ Before Submitting

Please verify:

* JSON is valid
* Slug matches filename
* Image exists and matches slug
* All required fields are included
* No trailing commas
* Units are consistent
* Metric conversions are accurate

---

# 🚀 How to Submit

1. Fork the repository
2. Create a new branch
3. Add your recipe JSON and thumbnail
4. Open a pull request
5. Clearly describe what you added

---

Thank you for contributing and helping keep the collection organized and high quality ❤️
