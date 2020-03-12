/**
 *
 * @namespace faker.commerce
 */
var Book= function (faker) {
    var self = this;
  
    /**
     * title
     *
     * @method faker.Book.name
     */
    self.name = function() {
        return faker.random.arrayElement(faker.definitions.book.name);
    };
  
    /**
     * author
     *
     * @method faker.Book.author
     */
    self.author = function() {
        return faker.random.arrayElement(faker.definitions.book.author);
    };
  
    self.price = function() {
        return faker.random.arrayElement(faker.definitions.book.price);
    };

    return self;
  };
  
  module['exports'] = Book;
  