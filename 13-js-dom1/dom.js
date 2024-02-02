// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hallo world</h1>';
const div1 = document.getElementById('div1');
div1.style.border = '1px solid black';
console.log(div1.title);
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);
console.log(paragraphs[0].innerText);
const a = document.querySelector('#div1');
console.log(a === div1);
const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1.length);
for(let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = '<span>new text &{i + 1}</span>';
}
const children = div1.children;
console.log(children.length);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}
const newPText = document.createTextNode('This text was creadet by special method');
const newP = document.createElement('p');
newP.appendChild(newPText);
// div1.appendChild(newP);
// div1.insertBefore(newP, p2);
// div1.insertBefore(newP, div1, lastElementChild);
// div1.insertBefore(newP, div1.firstElementChild);

