// const buttun = document.getElementById('button');
// const name1 = document.getElementById('name1');
// const name2 = document.getElementById('name2');
buttun.onclick = show;
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = function () {
//     name2.value = name2.value.toUpperCase();
const nameBox = document.getElementById('nameBox');
const names = nameBox.children;
nameBox.onkeyup = valueToUpperCase;
// for(let i = 0; i<nameBox.children.length; i++) {
//     nameBox.children[i].onkeyup = valueToUpperCase;
// }

function show(e) {
    // console.log(e.target);
    // alert(`Hello ${name1.value}`);
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i].firstElementChild.value);
        if (names[i].firstElementChild.value.trim()) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(names[i].firstElementChild.value));
            document.body.appendChild(p);
            names[i].firstElementChild.value = '';
        }
    }
}

function valueToUpperCase(event) {
    // console.log(event);
    event.target.value = event.target.value.toUpperCase();

}
