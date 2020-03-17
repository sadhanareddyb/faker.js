/**
 *
 * @namespace faker.book
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
 /**
     * price
     *
     * @method faker.Book.price
     */
  
    self.price = function() {
        return faker.random.arrayElement(faker.definitions.book.price);
    };

    return self;
  };
  
  module['exports'] = Book;
  
