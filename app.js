/* ** */
// Дэлгэцийн модуль
var UIController = (function () {})();

/* ** */
// BUDGET CONTROLLER MODULE
var budgetController = (function () {
  console.log("");
})();

/* ** */
// suppoert module
var appController = (function (UIController, budgetController) {
  var ctrlADDItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlADDItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13 || event.which == 13) ctrlADDItem();
    // else console.log("та өөр товч дарлаа " + event.keyCode)
    // console.log(event);
  });
})(UIController, budgetController);
