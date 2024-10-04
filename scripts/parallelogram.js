const parallelogramBtn = document.getElementById('parallelogram-btn');

parallelogramBtn.addEventListener('click', (e) => {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;

    setInnerText('display-parallelogram-area', area);
    setCalculation(e, area);
})