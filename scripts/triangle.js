/*
step1: get the button;
step2: make a function to action the button;
step3: get the value of triangle base
step4: get the value of triangle height 
*/
const triangleBtn = document.getElementById('triangle-btn');

triangleBtn.addEventListener('click', (e) => {

    // get triangle base value
    const base = getInputValue('triangle-base');
    // const triangleBase = document.getElementById('triangle-base');
    // const base = parseFloat(triangleBase.value);

    // get triangle height value
    const height = getInputValue('triangle-height');
    // const triangleHeight = document.getElementById('triangle-height');
    // const height = parseFloat(triangleHeight.value);

    // calculate triangle area
    const area = 0.5 * base * height;

    // display the area
    setInnerText('display-area', area)
    // const displayArea = document.getElementById('display-area');
    // displayArea.innerText = area;
    setCalculation(e, area);
})

function getInputValue(id) {
    const input = document.getElementById(id);
    const inputValue = parseFloat(input.value);
    return inputValue;
}

function setInnerText(id, area) {
    const displayArea = document.getElementById(id);
    displayArea.innerText = area;
}

function setCalculation(e, area) {
    const areaCalculation = document.getElementById('area-calculation');

    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const btn = document.createElement('button');

    areaCalculation.appendChild(li);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn);

    p1.innerText = `${areaCalculation.childNodes.length - 1}. ${e.target.parentNode.parentNode.childNodes[1].innerText}`;
    p2.innerHTML = area + `cm<sup>2</sup>`;
    btn.innerHTML = `convert to m<sup>2</sup>`;

    li.classList.add('flex');
    li.classList.add('justify-center');
    li.classList.add('items-center');
    li.classList.add('gap-3');
    li.classList.add('font-semibold')
    li.classList.add('mt-2')
    btn.classList.add('bg-blue-400');
    btn.classList.add('px-2');
    btn.classList.add('py-1');
    btn.classList.add('rounded');
    btn.classList.add('text-white');
}