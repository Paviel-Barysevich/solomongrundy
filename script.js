let checkbox = document.getElementById('checkbox');
let wrappers = document.getElementsByClassName('wrapper');
let containers = document.getElementsByClassName('container');

checkbox.addEventListener('change', switchMode);

function switchMode() {
    for (let wrapper of wrappers) {
        wrapper.classList.toggle('dark');
    }

    for (let container of containers) {
        container.classList.toggle('dark');
    }
}