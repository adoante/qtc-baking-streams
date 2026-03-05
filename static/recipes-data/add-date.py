import json
import yt_dlp
from os import listdir
import time

file_names = [f for f in listdir("./") if ".json" in f]
file_names.remove("recipe-template.json")
file_names.remove("index.json")
recipe = {}

for file in file_names:
    with open("./" + file, "r") as f:
        recipe = json.load(f)
        video_url = recipe["video"]["url"]

    if video_url:
        print(video_url)

        ydl_opts = {
            "verbose": False
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=False)
            create_at = time.strftime(
                "%a, %d %b %Y %H:%M:%S", time.localtime(info["timestamp"]))

        recipe["date"] = {
            "epoch": info["timestamp"],
            "human-readable": create_at
        }

    else:
        recipe["date"] = {
            "epoch": 0,
            "human-readable": ""
        }

    f.close()

    with open("./" + file, "w") as f:
        json.dump(recipe, f, ensure_ascii=False, indent=4)
