const buttonAdd = document.querySelector('.section-add__button');
console.log(buttonAdd);
const itemElem = document.querySelector('.section-list__item');
const listContainer = document.querySelector('.section-list');


const input = document.querySelector('.section-add__input')

// console.log(itemElem);
const buttonDelete = document.querySelector('.section-list__button-remove')



function addList () {
    const title = input.value
    console.log(title);
    const liItem = `<li class="section-list__item">
    <h2 class="section-list__text">${title}</h2>
    <button class="section-list__button-remove">Delete</button>
    <div class="line"></div>
</li>`
listContainer.insertAdjacentHTML('afterbegin', liItem)
}
buttonAdd.addEventListener('click', addList)

function deleteList(e) {
    if(e.target.classlist.contains('.section-list__button-remove')) {
        liItem.remove()
    }
}
buttonDelete.addEventListener('click', deleteList)