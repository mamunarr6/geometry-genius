const rhombusBtn = document.getElementById('rhombus-btn');

rhombusBtn.addEventListener('click', () => {
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');

    const area = 0.5 * diagonal1 * diagonal2;

    setInnerText('display-rhombus-area', area)
})