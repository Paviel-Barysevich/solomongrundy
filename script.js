let checkbox = document.getElementById('checkbox');
let body = document.body;
let containers = document.getElementsByClassName('container');

if (localStorage.getItem('checkboxChecked') === 'true') {
    checkbox.checked = true;
    body.classList.add('dark');

    for (let container of containers) {
        container.classList.add('dark');
    }
} else if (localStorage.getItem('checkboxChecked') === 'false') {
    checkbox.checked = false;
    body.classList.remove('dark');

    for (let container of containers) {
        container.classList.remove('dark');
    }
}

checkbox.addEventListener('change', switchMode);

function switchMode() {
    body.classList.toggle('dark');

    for (let container of containers) {
        container.classList.toggle('dark');
    }

    if (checkbox.checked) {
        localStorage.setItem('checkboxChecked', 'true');
    } else {
        localStorage.setItem('checkboxChecked', 'false');
    }
}