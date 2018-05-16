const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function newElement() {
    if(myInput.value) {
        let li = document.createElement('li');
        li.textContent = myInput.value;
        let span = document.createElement('span');
        span.classList.add('close');
        span.textContent = 'X';
        li.appendChild(span);
        myUL.appendChild(li);
    } else {
        alert('Must enter a value');
    }
    myInput.value = '';
    checkedEventListener();
    deleteEventListener();
}

function deleteItem(e) {
    const mySelection = e.target.parentNode;
    myUL.removeChild(mySelection);
}

function deleteEventListener() {
    const close = document.getElementsByClassName('close');
    for(let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', deleteItem)
    }
}

function checked(e) {
    const mySelection = e.target;
    mySelection.classList.toggle('checked');
}

function checkedEventListener() {
    const list = document.getElementsByTagName('li');
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', checked)
    }
}

function addCloseTag() {
    const lis = document.getElementsByTagName('li');
    for(var i = 0; i < lis.length; i++) {
        const span = document.createElement('span');
        span.textContent = 'X';
        span.classList.add('close');
        lis[i].appendChild(span);
    }
}

addCloseTag();
checkedEventListener();
deleteEventListener();
