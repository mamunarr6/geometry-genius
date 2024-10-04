const rectangleBtn = document.getElementById('rectangle-btn');

rectangleBtn.addEventListener('click', (e) => {
    const length = getInputValue('rectangle-length');
    const width = getInputValue('rectangle-width');

    const area = length * width;

    setInnerText('display-rectangle-area', area);
    setCalculation(e, area);
})
