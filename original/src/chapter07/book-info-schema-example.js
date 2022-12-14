var bookInfo = {
  "publishers": [
    "DC Comics"
  ],
  "number_of_pages": 334,
  "weight": "1.4 pounds",
  "physical_format": "Paperback",
  "subjects": [
    "Graphic Novels",
    "Comics & Graphic Novels",
    "Fiction",
    "Fantastic fiction"
  ],
  "isbn_13": [
    "9780930289232"
  ],
  "title": "Watchmen",
  "isbn_10": [
    "0930289234"
  ],
  "publish_date": "April 1, 1995",
  "physical_dimensions": "10.1 x 6.6 x 0.8 inches"
};

validate(bookInfoSchema, bookInfo);
// → true
