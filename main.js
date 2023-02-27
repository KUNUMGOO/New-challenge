const API = "http://localhost:8000/todo";
console.log("Hello, Kanikei!");
console.log("Hello, Saltanat!");
// GET - ПОЛУЧЕНИЕ ДАННЫХ
fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data));

//   POST - отпрвка данных
// первым аргументом указываем куда отправляем запрос, вторым аргументом,
// задаем описание запроса(указываем метод, заголовки(описание содержимого, и само содержимое(body)))
// let obj = {
//   task: "SALAMAT",
// };
// fetch(API, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify(obj),
// });

let obj = {
  name: "SALAMAT",
};

// ! ===============PATCH - изменение данных=======================================
// let editEditedobj = { task: "edited" };
// fetch(`${API}/${3}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify(editEditedobj),
// });
// !======================DELETE===================================================
// fetch(`${API}/${4}`, {
//   method: "DELETE",
// });
// fetch(`${API}/${6}`, {
//   method: "DELETE",
// });
// !==================================PUT===================================
// ? - МЕТОД ЗАМЕНЯЕТ ПОЛНОСТЬЮ СТАРЫЙ ОБЬЕКТ НА НОВЫЙ
let editEditedobj = { task: "SALAMATBAIKE" };
fetch(`${API}/${3}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(editEditedobj),
});

// ? - PATCH МЕТОД РЕДАКТИРУЕТ ДАННЫЕ ТОЧЕЧНО(ПО ПЕРЕДАВАЕМЫМ )
// let editEditedobj = { task: "SALAMATbaike" };
// fetch(`${API}/${3}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify(editEditedobj),
// });
