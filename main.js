const buttonAdd = document.querySelector('.section-add__button');
const listContainer = document.querySelector('.section-list');
const input = document.querySelector('.section-add__input');

let counter = 0;

function addToDo() {
    if (input.value === '') return;   // если ничего не введено

    const title = input.value;
    const liItem = `<li class="section-list__item">
        <h2 class="section-list__text">${title}</h2>
        <button class="section-list__button-remove" id="btn-remove${counter}">Delete</button>
        <div class="line"></div>
    </li>`;

    listContainer.insertAdjacentHTML('afterbegin', liItem)
    input.value = '';    // сбрасываем input
    input.focus();

    const buttonDelete = document.querySelector(`#btn-remove${counter}`)
    buttonDelete.addEventListener('click', (e) => {
        const toDo = e.target.closest(".section-list__item");
        toDo.remove();
    })

    counter++;
}

buttonAdd.addEventListener('click', addToDo)