import json
from os import listdir

file_names = [f for f in listdir("./") if ".json" in f]
file_names.remove("recipe-template.json")
file_names.remove("index.json")

recipes = []

for file in file_names:
    with open("./" + file, "r") as f:
        recipe = json.load(f)

        recipe_index = {
            "slug": recipe["slug"],
            "title": recipe["title"],
            "thumbnail": "/recipes-data/" + recipe["slug"] + ".webp",
            "tags": recipe["tags"]
        }

        recipes.append(recipe_index)

index = {
    "recipes": recipes
}

with open("./index.json", "w") as f:
    json.dump(index, f, ensure_ascii=False, indent=4)
