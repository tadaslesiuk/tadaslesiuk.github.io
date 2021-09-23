/*
    DISCLAIMER: For the record, I understand that the following code 
    could be shorter, however, it would not look as clean, therefore 
    I decided to follow clean code practices
*/
const form = document.getElementById('form');
const rgbInput = document.getElementById('rgb-input');
const hexLabel = document.getElementById('hex-label');
const hexValue = document.getElementById('hex-value');
const hiddenElement = document.querySelector('.hidden');

const errorHandler = () => {
    hexLabel.innerText =
        'Invalid RGB value, please use the following format: 255,255,255';
    hexLabel.style.color = 'red';
    hexValue.innerText = '';
    hiddenElement.classList.remove('hidden');
};

const successHandler = (rgbValue) => {
    const [r, g, b] = rgbValue.split(',');

    hexValue.innerText = convertRgbToHex(r, g, b);
    hexLabel.innerText = 'HEX value: ';
    hexLabel.style.color = 'initial';
    hiddenElement.classList.remove('hidden');
};

const conversionHandler = () => {
    const rgbValue = rgbInput.value.trim();
    const rgbPattern = /(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
    const match = rgbPattern.exec(rgbValue);

    if (match !== null) successHandler(rgbValue);
    else errorHandler();
};

const convertNumToHex = (val) => {
    const hex = val.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};

const convertRgbToHex = (r, g, b) => {
    return `#${convertNumToHex(+r)}${convertNumToHex(+g)}${convertNumToHex(
        +b
    )}`;
};

const submitHandler = (e) => {
    e.preventDefault();
    conversionHandler();
};

form.addEventListener('submit', submitHandler);
