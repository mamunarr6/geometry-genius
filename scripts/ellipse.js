const ellipseBtn = document.getElementById('ellipse-btn');
ellipseBtn.addEventListener('click', (e) => {
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    const area = 3.14 * a * b;
    setInnerText('display-ellipse-area', area);
    setCalculation(e, area);
})