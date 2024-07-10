let lightmode = document.getElementById('light');
let darkmode = document.getElementById('dark');
let wrappers = document.getElementsByClassName('wrapper');
let containers = document.getElementsByClassName('container');
let labels = document.getElementsByTagName('label');
let inputs = document.getElementsByTagName('input');

lightmode.addEventListener('click', turnOnLightMode);
darkmode.addEventListener('click', turnOnDarkMode);

function turnOnLightMode() {
    for (let wrapper of wrappers) {
        wrapper.classList.remove('dark');
    }

    for (let container of containers) {
        container.classList.remove('dark');
    }

    for (let label of labels) {
        label.classList.remove('dark');
    }

    for (let input of inputs) {
        input.classList.remove('dark');
    }
}

function turnOnDarkMode() {
    for (let wrapper of wrappers) {
        wrapper.classList.add('dark');
    }

    for (let container of containers) {
        container.classList.add('dark');
    }

    for (let label of labels) {
        label.classList.add('dark');
    }

    for (let input of inputs) {
        input.classList.add('dark');
    }
}