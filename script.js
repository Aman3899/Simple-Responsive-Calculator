let count = 0;
function addNumbers() {
    count++;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultTag = document.getElementById("res");

    let result = num1 + num2;
    resultTag.value = result;

    let history = document.getElementById("history");
    history.innerHTML += `<div>${count}) ${num1}+${num2}=${result}</div> <hr>`;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("res").value = "";
}


function subNumbers() {
    count++;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultTag = document.getElementById("res");

    let result = num1 - num2;
    resultTag.value = result;

    let history = document.getElementById("history");
    history.innerHTML += `<div>${count}) ${num1}-${num2}=${result}</div> <hr>`;
}


function mulNumbers() {
    count++;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultTag = document.getElementById("res");

    let result = num1 * num2;
    resultTag.value = result;

    let history = document.getElementById("history");
    history.innerHTML += `<div>${count}) ${num1}*${num2}=${result}</div> <hr>`;
}


function divNumbers() {
    count++;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultTag = document.getElementById("res");

    let result = num1 / num2;
    resultTag.value = result;

    let history = document.getElementById("history");
    history.innerHTML += `<div>${count}) ${num1}/${num2}=${result}</div> <hr>`;
}


function modNumbers() {
    count++;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultTag = document.getElementById("res");

    let result = num1 % num2;
    resultTag.value = result;

    let history = document.getElementById("history");
    history.innerHTML += `<div>${count}) ${num1}%${num2}=${result}</div> <hr>`;
}