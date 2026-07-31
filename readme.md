# 📚 Library Management System

A simple command-line Library Management System built using Python. This project allows a librarian to manage books through a menu-driven interface. Book records are stored permanently using a JSON file, so the data is available even after restarting the program.

## Features

* Add a new book
* View all books
* Search a book by ID or Name
* Issue a book
* Return a book
* Delete a book
* Store book records permanently using JSON
* Menu-driven command-line interface

## Technologies Used

* Python 3
* JSON Module
* Object-Oriented Programming (OOP)
* File Handling
* Exception Handling

## Project Structure

```text
Library_Management_System/
│
├── main.py (or your Python file)
├── storage.json
└── README.md
```

## How to Run

1. Make sure Python 3 is installed.
2. Open a terminal in the project folder.
3. Run the program:

```bash
python main.py
```

(Replace `main.py` with your actual file name if it is different.)

## Example Menu

```text
------ Library Management System ------

1. Add Book
2. View All Books
3. Search Book
4. Issue Book
5. Return Book
6. Delete Book
7. Exit
```

## Concepts Practiced

* Classes and Objects
* Lists and Dictionaries
* Functions
* Loops
* Conditional Statements
* JSON File Handling
* Exception Handling
* User Input Validation

## Future Improvements

* Prevent duplicate Book IDs
* Validate all user inputs
* Use a separate `Book` class
* Display books in a tabular format
* Add update/edit book details feature
* Split the project into multiple files
* Improve search with case-insensitive matching

## Author

Sarthak Shelar
