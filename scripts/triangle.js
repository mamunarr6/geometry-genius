/*
step1: get the button;
step2: make a function to action the button;
step3: get the value of triangle base
step4: get the value of triangle height 
*/
const triangleBtn = document.getElementById('triangle-btn');

triangleBtn.addEventListener('click', () => {
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