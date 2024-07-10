let checkbox = document.getElementById('checkbox');
let body = document.body;
let containers = document.getElementsByClassName('container');

checkbox.addEventListener('change', switchMode);

function switchMode() {
        body.classList.toggle('dark');

    for (let container of containers) {
        container.classList.toggle('dark');
    }
}