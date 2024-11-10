from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from groq import Groq
import json
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from datetime import datetime
import os
import re

page_size = (2000.0, 1414.0)
client = Groq(
    api_key="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",
)


REQ_URL = "http://localhost:3000"

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": REQ_URL}})  # Adjust CORS as needed


@app.route("/", methods=["GET"])
def home():
    return "API is running", 200


@app.route("/api/get_questions/get_mcq", methods=["POST"])
def get_mcq():
    try:
        topic = request.json["topic"]
        # print(topic)
    except:
        return jsonify([]), 500
    # request.
    # print()

    prompt = f"""
Generate 10 mcq question on the topic of {topic} in this given format:

```json[
    {{"question": "question", "options": ["option1", "option2", "option3", "option4"], "answer": "answer"}},
    {{"question": "question", "options": ["option1", "option2", "option3", "option4"], "answer": "answer"}},
    {{"question": "question", "options": ["option1", "option2", "option3", "option4"], "answer": "answer"}},
]```
"""

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gemma2-9b-it",  # "llama3-8b-8192",
    )

    try:
        content = chat_completion.choices[0].message.content
        json_str = content.replace("```json", "").replace("```", "")
        questions = json.loads(json_str)
    except Exception as e:
        print(e)
        return jsonify([]), 200
    if topic and questions:
        return jsonify(questions), 200
    return jsonify([]), 200


@app.route("/api/get_topic/get_topic_array", methods=["POST"])
def get_topic_array():
    try:
        topic_name = request.json["topic"]
        # print(topic_name)
    except:
        return jsonify([]), 500

    prompt = f"""
Give the all basic sub topics of this topic {topic_name} in this format:

```json
["Introduction to {topic_name}", "Importance of {topic_name}", "topic1", "topic2", "topic3", "topicN"]
```
"""

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        #     model='llama3-8b-8192', #"llama3-8b-8192",
        model="gemma2-9b-it",
    )

    try:
        content = chat_completion.choices[0].message.content
        json_str = re.search(r"\[([^]]+)\]", content)[0]
        topic_arr = json.loads(json_str)
    except Exception as e:
        print(e)
        return jsonify([]), 200
    if topic_name and topic_arr:
        return jsonify(topic_arr), 200
    return jsonify([]), 200


@app.route("/api/get_subtopic/get_topic_markdown", methods=["POST"])
def get_topic_markdown():
    try:
        topic_name = request.json["topic"]
        # print(topic_name)
    except:
        return jsonify([]), 500

    markdown_string = """##  Data Structures and Algorithms: A Beginner\'s Guide to Advanced Concepts\n\n**What are Data Structures?**\n\nData structures are specialized ways of organizing and storing data in a computer so that it can be accessed and used efficiently.  \n\nThink of them like containers for your information. Just as you\'d organize your physical belongings into boxes, drawers, and shelves to find things easily, data structures help organize data in a computer\'s memory for quick retrieval and manipulation.\n\n**Examples of Common Data Structures:**\n\n* **Arrays:**  Ordered collections of elements of the same type, accessed by their index (position). \n    * Think of a numbered list.\n* **Linked Lists:**  Collection of nodes, where each node contains data and a reference to the next node.\n    * Like a chain, each link points to the next one.\n* **Stacks:**  Follow the "Last-In, First-Out (LIFO)" principle. Think of a stack of plates; you can only add or remove from the top.\n* **Queues:**  Follow the "First-In, First-Out (FIFO)" principle. Like a line at a store, the first person in line is served first.\n* **Trees:**  Hierarchical structures with a root node and branches connecting child nodes.\n    * Imagine a family tree.\n* **Graphs:**  Collection of nodes (vertices) connected by edges. \n    * Think of a map with cities as nodes and roads as edges.\n\n**What are Algorithms?**\n\nAlgorithms are sets of well-defined instructions for solving a specific problem or completing a task. They are essentially recipes that tell a computer how to process data.\n\n**Example of an Algorithm:**\n\n**Problem:**  Find the largest number in a list of numbers.\n\n**Algorithm:**\n\n1. **Initialize:** Set a variable `largest` to the first number in the list.\n2. **Iterate:** Go through each number in the list.\n3. **Compare:** If the current number is larger than `largest`, update `largest`.\n4. **Return:** After checking all numbers, return the value of `largest`.\n\n**Why are Data Structures and Algorithms Important?**\n\nUnderstanding data structures and algorithms is crucial for:\n\n* **Efficient Programming:**  Choosing the right data structure can drastically improve the speed and efficiency of your code.\n\n* **Problem Solving:** Algorithms provide a systematic approach to solving problems.\n\n* **Software Development:** Data structures and algorithms are the building blocks of all software systems.\n\n* **Technical Interviews:**  Many technical interviews involve questions about algorithms and data structures.\n\n**Learning Resources:**\n\n* **Books:** "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein; "Grokking Algorithms" by Aditya Bhargava\n\n* **Online Courses:** Coursera, edX, Udemy\n\n* **Websites:** GeeksforGeeks, HackerRank\n\n\n\n**Python Example (Sorting)**\n\nLet\'s see a simple example in Python, where we sort a list of numbers using the `sort()` method, which relies on an efficient algorithm:\n\n```python\nnumbers = [5, 2, 9, 1, 7]\nnumbers.sort()\nprint(numbers)  # Output: [1, 2, 5, 7, 9]\n```\n\n\nThis example demonstrates the practical application of algorithms (the `sort()` method) within a Python program.  As you delve deeper, you\'ll explore various sorting algorithms (like bubble sort, insertion sort, merge sort, quick sort) and understand their complexities and trade-offs.\n\n\n"""

    return jsonify({"markdown": markdown_string})


@app.route("/api/get_certificate/certificate", methods=["POST"])
def generate_certificate():
    try:
        name = request.json["name"]
        subject = request.json["subject"]
        score = request.json["score"]
        date = str(datetime.now()).split()[0]
    except:
        return jsonify([]), 500

    c = canvas.Canvas(f"certificate/{name}_certificate.pdf", pagesize=page_size)
    width, height = page_size

    c.drawImage("certificate/background.png", x=0, y=0, width=width, height=height)

    pdfmetrics.registerFont(TTFont("AlexBrush", "certificate/AlexBrush-Regular.ttf"))
    pdfmetrics.registerFont(
        TTFont("LoversQuarrel", "certificate/LoversQuarrel-Regular.ttf")
    )
    pdfmetrics.registerFont(
        TTFont("MonsieurLaDoulaise", "certificate/MonsieurLaDoulaise-Regular.ttf")
    )
    pdfmetrics.registerFont(TTFont("Tangerine", "certificate/Tangerine-Regular.ttf"))
    pdfmetrics.registerFont(
        TTFont("PinyonScript", "certificate/PinyonScript-Regular.ttf")
    )

    c.setFont("AlexBrush", 100)
    c.drawCentredString(width / 2.0 - 390, height - 650, f"{name}".title().center(50))

    c.setFont("Tangerine", 40)
    c.drawCentredString(
        width / 2.0 - 400,
        height - 750,
        f"This certificate is proudly presented to {name} for successfully",
    )
    c.drawCentredString(
        width / 2.0 - 400,
        height - 790,
        f"complelting the online MCQ test on {subject}. Your dedication and",
    )
    c.drawCentredString(
        width / 2.0 - 400,
        height - 830,
        f"hard work have been recognized, and your performance reflects",
    )
    c.drawCentredString(
        width / 2.0 - 400,
        height - 870,
        f"your understanding and knowledge in this area.",
    )

    c.setFont("Tangerine", 40)
    c.drawCentredString(
        width / 2.0 - 400,
        height - 930,
        f"Congratulations on your acomplishment, and we encourage you to",
    )
    c.drawCentredString(
        width / 2.0 - 400,
        height - 960,
        f"continue your journey of learning and self-improvement.",
    )
    c.drawCentredString(
        width / 2.0 - 400, height - 1000, f"Keep aiming and achieving more!"
    )

    c.setFont("Times-Italic", 25)
    c.drawCentredString(width / 2.0 - 715, height - 1160, f"Score: {score}%")
    c.drawCentredString(width / 2.0 - 720, height - 1200, f"Date: {date}")

    c.setFont("MonsieurLaDoulaise", 100)
    c.drawCentredString(width / 2.0 - 50, height - 1150, f"A")
    c.setFont("LoversQuarrel", 40)
    c.drawCentredString(width / 2.0 - 50, height - 1200, f"Product Manager")

    c.showPage()
    c.save()

    path_of_pdf = f"certificate/{name}_certificate.pdf"

    return send_file(
        path_of_pdf,
        as_attachment=True,
        download_name=path_of_pdf,
        mimetype="application/pdf",
    )


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)
