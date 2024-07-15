 export default data = {
    subjectName: "Demo Questopns",
    mcq: [
      {
        question:
          "Which command is used to install Python on a Windows system?",
        options: [
          "pip install Python",
          "apt-get install python",
          "brew install python",
          "python setup.py install",
        ],
        answer: "python setup.py install",
      },
      {
        question:
          "What is the correct syntax for creating a single-line comment in Python?",
        options: [
          "// This is a comment",
          "# This is a comment",
          "/* This is a comment */",
          "<!-- This is a comment -->",
        ],
        answer: "# This is a comment",
      },
      {
        question: "Which of the following is a valid Python variable name?",
        options: [
          "123variable",
          "variable-123",
          "variable_123",
          "variable 123",
        ],
        answer: "variable_123",
      },
      {
        question:
          "What is the output of the following Python code: `print(5 > 3)`?",
        options: ["True", "False", "5", "3"],
        answer: "True",
      },
      {
        question:
          "Which loop in Python allows you to iterate over a sequence of items?",
        options: ["for loop", "while loop", "do-while loop", "switch loop"],
        answer: "for loop",
      },
      {
        question: "What is the purpose of the `break` statement in a loop?",
        options: [
          "To skip to the next iteration",
          "To exit the loop completely",
          "To continue to the next iteration",
          "To define a loop",
        ],
        answer: "To exit the loop completely",
      },
      {
        question: "What is the data type of the value `3.14` in Python?",
        options: ["Integer", "Float", "String", "Boolean"],
        answer: "Float",
      },
      {
        question:
          "Which method can be used to add an element at the end of a list?",
        options: ["append()", "insert()", "extend()", "remove()"],
        answer: "append()",
      },
      {
        question:
          "Which of the following is a valid way to access the second character in a string?",
        options: [
          "string[1]",
          "string[2]",
          "string.charAt(1)",
          "string.substring(1, 2)",
        ],
        answer: "string[1]",
      },
      {
        question:
          "What is the key difference between a list and a tuple in Python?",
        options: [
          "Lists are mutable, tuples are immutable",
          "Tuples are mutable, lists are immutable",
          "Lists are ordered, tuples are unordered",
          "Tuples are ordered, lists are unordered",
        ],
        answer: "Lists are mutable, tuples are immutable",
      },
    ],
    fill_in_the_blank: [
      {
        question: "The command  `______`  is used to run a Python script.",
        answer: "python",
      },
      {
        question:
          "The symbol  `______`  is used to assign a value to a variable in Python.",
        answer: "=",
      },
      {
        question:
          "A `______`  statement allows you to execute a block of code only if a certain condition is true.",
        answer: "if",
      },
      {
        question:
          "The  `______`  loop in Python repeats a block of code as long as a given condition is true.",
        answer: "while",
      },
      {
        question:
          "The  `______`  statement is used to stop the current iteration of a loop and move to the next one.",
        answer: "continue",
      },
      {
        question:
          "The data type  `______`  represents whole numbers in Python.",
        answer: "int",
      },
      {
        question: "You can access elements in a list using  `______`  indices.",
        answer: "numerical",
      },
      {
        question:
          "The  `______`  method can be used to convert a string to lowercase.",
        answer: "lower()",
      },
      {
        question:
          "A `______`  is a collection of elements that are ordered and immutable.",
        answer: "tuple",
      },
      {
        question:
          "A  `______`  is a block of code that performs a specific task.",
        answer: "function",
      },
    ],
    saq: [
      {
        question:
          "Explain the difference between `==` and `is` operators in Python.",
        answer:
          "The `==` operator compares the values of two objects, while the `is` operator checks if two objects refer to the same memory location. For example, `1 == 1` is True, but `1 is 1` is True, while `a = [1, 2, 3]; b = [1, 2, 3]; a == b` is True, but `a is b` is False.",
      },
      {
        question:
          "Describe the purpose of the `else` and `elif` blocks in an `if` statement.",
        answer:
          "The `else` block is executed if none of the conditions in the preceding `if` or `elif` blocks are true. The `elif` block is used to check additional conditions after the initial `if` block. If the initial condition is false, the interpreter checks the `elif` conditions in the order they are written.",
      },
      {
        question:
          "Write a Python code snippet to iterate over a list of numbers and print only the even numbers.",
        answer:
          "```python\nfor number in [2, 5, 8, 1, 9, 4]:\n  if number % 2 == 0:\n    print(number)\n```",
      },
      {
        question: "Explain the purpose of the `pass` statement in Python.",
        answer:
          "The `pass` statement is a null operation. It does nothing and is used as a placeholder when you need a syntactically valid statement but don't want to execute any code. For example, you can use it in a function definition if you haven't implemented the function's logic yet.",
      },
      {
        question:
          "What is the difference between `append()` and `extend()` methods for lists in Python?",
        answer:
          "The `append()` method adds a single element to the end of a list. The `extend()` method adds multiple elements from an iterable (like another list) to the end of the list. For example, `list.append(1)` will add 1 to the list, while `list.extend([1, 2])` will add both 1 and 2 to the list.",
      },
      {
        question: "How can you concatenate two strings in Python?",
        answer:
          "You can concatenate two strings in Python using the `+` operator. For example, `string1 = 'Hello'; string2 = 'World'; concatenated_string = string1 + ' ' + string2` will result in `concatenated_string` having the value 'Hello World'.",
      },
      {
        question: "Describe the purpose of the `len()` function in Python.",
        answer:
          "The `len()` function returns the length (number of elements) of a sequence, such as a string, list, or tuple. For example, `len('hello')` will return 5, and `len([1, 2, 3])` will return 3.",
      },
      {
        question:
          "What are default arguments in a function, and how do you define them?",
        answer:
          "Default arguments are values that are assigned to function parameters if no argument is explicitly provided when calling the function. You define them by assigning a value to the parameter in the function definition. For example, `def greet(name='World'): print('Hello, ' + name)` defines a function `greet` with a default argument `name='World'`. If you call the function as `greet()`, it will print 'Hello, World', but if you call it as `greet('Python')`, it will print 'Hello, Python'.",
      },
      {
        question:
          "Explain the difference between a function that returns a value and a function that does not return a value.",
        answer:
          "A function that returns a value uses the `return` keyword to send a value back to the caller. The caller can then use the returned value. A function that does not return a value implicitly returns `None`. For example, `def add(x, y): return x + y` will return the sum of `x` and `y`, while `def print_greeting(name): print('Hello, ' + name)` will print the greeting but not return any value.",
      },
      {
        question:
          "What is the purpose of the `docstring` in a function definition?",
        answer:
          'A `docstring` is a multiline string literal that is used to document the purpose, parameters, and return value of a function. It is written within triple quotes (`"""Docstring goes here"""`) and is accessed using the `__doc__` attribute. Docstrings are used by tools like help() and documentation generators to provide information about the function.',
      },
    ],
  };