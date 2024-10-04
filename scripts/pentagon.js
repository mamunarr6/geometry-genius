const pentagonBtn = document.getElementById('pentagon-btn');
pentagonBtn.addEventListener('click', () => {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerText('display-pentagon-area', area);
})