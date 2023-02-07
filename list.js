// ДЗ

// 1. При изменении значения в input с id="from", 
// значение содержащееся в нем должно моментально 
// отображаться в span. То есть при печати в 
// input'е тег span также должен меняться.

// const spanEl = document.querySelector(`span`);
// const inputText = document.querySelector(`#from`);
// inputText.addEventListener(`input`, function (e) {
//   spanEl.textContent = e.target.value;
// });

// 2. При клике на кнопку с классом messageBtn необходимо 
// элементу с классом message:
// - добавить два класса: animate_animated 
// и animate_fadeInLeftBig
// - поставить данному элементу стиль 
// visibility в значение 'visible'.

// const buttonEl = document.querySelector(`.messageBtn`);
// const messageEl = document.querySelector(`.message`);
// buttonEl.addEventListener("click", function (e) {
//     messageEl.classList.add("animate_animated");
//     messageEl.classList.add("animate_fadeInLeftBig");
//     messageEl.style.visibility = "visible";
//     messageEl.classList.toggle("visible");
//   });

// 3. Необходимо при отправке формы проверить, заполнены 
// ли все поля в этой форме. Если какое-либо поле не 
// заполнено, форма не должна отправляться, также должны 
// быть подсвечены незаполненные поля (необходимо поставить 
//     класс error незаполненным полям). Как только 
//     пользователь начинает заполнять какое-либо поле, 
//     необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить 
// (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку 
// (класс error) необходимо убрать.

const form = document.querySelector(`form`);

const labelEl = form.querySelectorAll(`.form-control`);
const buttonEl = document.querySelector(`button`);
buttonEl.onclick = function (e) {
    labelEl.forEach((element) => {
        if (!element.value) {
            console.log(`Заполните поле`, element);
            element.style.border = `2px solid red`;
            element.classList.add(`error`);
            e.preventDefault();
        } else {
            element.style.border = `1px solid`;
            element.classList.remove(`error`);
        }
    });
}; 