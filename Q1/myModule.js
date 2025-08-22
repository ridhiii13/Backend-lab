// Nested object and function
const myModule = {
    user: {
      name: "Ridhima",
      age: 16
    },
    greet: function () {
      return `Hello, ${this.user.name}!`;
    }
  };
  
  module.exports = myModule;
  