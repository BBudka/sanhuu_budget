/* ** */
// Дэлгэцийн модуль
var UIController = (function () {
  var x = 1234;

  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBTN: ".add__btn",
  };
  return {
    x: "boldooooooooooooo",
    // getinput is public service
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDomstrings: function () {
      return DOMstrings;
    },
  };
})();

/* ** */
// BUDGET CONTROLLER MODULE
var budgetController = (function () {
  var Income = function (id, description, value) {
    // хэрэглэгчийн оруулсан id  нь энэ функруу орж байна
    this.id = id;
    this.description = description;
    this.value = value;
  
  }
  var Expense = function (id, description, value) {
    // хэрэглэгчийн оруулсан id  нь энэ функруу орж байна
    this.id = id;
    this.description = description;
    this.value = value;
  }
  
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    }
  }
})();

/* ** */
// suppoert module
var appController = (function (UIController, budgetController) {
  var ctrlADDItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
    console.log(UIController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  var setupEventListeners = function () {
    var DOM = UIController.getDomstrings();

    document
      .querySelector(DOM.addBTN)
      .addEventListener("click", function () {
        ctrlADDItem();
      });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode == 13 || event.which == 13) ctrlADDItem();
      // else console.log("та өөр товч дарлаа " + event.keyCode)
      // console.log(event);
    });
  };

  return {
    init: function(){
      console.log('Application started... ')
      setupEventListeners();
      
    }
  }
})(UIController, budgetController);
appController.init();