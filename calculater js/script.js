var h1 = document.getElementById("main");

function handleclick(value) {
    if (h1.innerHTML == 0) h1.innerHTML = value;
    else h1.innerHTML += value;
}

function cal() {
    h1.innerHTML = eval(h1.innerHTML);
}

function clearbtn() {
    h1.innerHTML = 0;
}
