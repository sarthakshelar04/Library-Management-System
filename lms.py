import json

class Library:
    def __init__(self):

        try:
            file = open("storage.json" , "r")
            self.books = json.load(file)
            file.close()
        except:
            self.books = []

    def save(self):
        file = open("storage.json" , "w")
        json.dump(self.books , file , indent=4)
        file.close()

    def addBook(self):
        book = {}

        book["ID"] = (input("Enter Book ID:"))
        book["Name"] = input("Enter Book Name:")
        book["Author"] = input("Enter Book Author:")
        book["Quantity"] = int(input("Enter Book Quantity:"))

        self.books.append(book)
        print("Book Added Successfully.")
        self.save()

    def viewAllBooks(self):
        if len(self.books) == 0:
            print("No Books Available.")
            return

        else:
            print("-----------------------------------")
            for book in self.books:
                print("Book ID:" , book["ID"])
                print("Book Name:" , book["Name"])
                print("Book Author:" , book["Author"])
                print("Book Quantity:" , book["Quantity"])
                print("-----------------------------------")

        self.save()

    def searchBook(self):
        search = input("Enter Book ID or Book Name:")

        for book in self.books:
            if(book["ID"] == search) or ( book["Name"] == search ):
                print("Book Found")
                print("Book ID:" , book["ID"])
                print("Book Name:" , book["Name"])
                print("Book Author:" , book["Author"])
                print("Book Quantity:" , book["Quantity"])
                break

        else:
            print("Book not found")

        self.save()

    def issueBook(self):
        issue = input("Enter Book ID:")

        for book in self.books:
            if(book["ID"] == issue):
                if(book["Quantity"] > 0):
                    book["Quantity"] -= 1
                    print("Book Issued")
                    break
                else:
                    print("Book out of stock")
                    break
                    

        else:
            print("Enter valid Book ID")

        self.save()

    def returnBook(self):
        returnbook = input("Enter Book ID:")

        for book in self.books:
            if(book["ID"] == returnbook):
                book["Quantity"] += 1
                print("Book returned")
                break

        else:
            print("Enter valid Book ID")

        self.save()

    def deleteBook(self):
        deletebook = input("Enter Book ID:")

        for book in self.books:
            if(book["ID"] == deletebook):
                self.books.remove(book)
                print("Book Deleted Successfully")
                break
        else:
            print("Enter valid Book ID")

        self.save()

    def clearLibrary(self):
        self.books.clear()
        print("Library Cleared.")

        self.save()

lib = Library()

while True:

    print("------Library Management System------")
    print("1 . Add Book")
    print("2 . View all Books")
    print("3 . Search Book")
    print("4 . Issue Book")
    print("5 . Return Book")
    print("6 . Delete Book")
    print("7 . Clear Library")
    print("8 . Exit")

    try:
        choice = int(input("Enter Your Choice:"))
    except:
        print("Donot enter a alphabet")
        continue
        

    if(choice == 1):
        lib.addBook()
    elif(choice == 2):
        lib.viewAllBooks()
    elif(choice == 3):
        lib.searchBook()
    elif(choice == 4):
        lib.issueBook()
    elif(choice == 5):
        lib.returnBook()
    elif(choice == 6):
        lib.deleteBook()
    elif(choice == 7):
        lib.clearLibrary()
    elif(choice == 8):
        print("Exit")
        break
    else:
        print("Enter a number between 1 to 8 only")

    
    






