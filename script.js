var _background = 'white';
var _size = 256;
var _pad = 0;

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const img = output.querySelector('img');

const canvas1 = document.querySelector('#canvas1');
const canvas2 = document.querySelector('#canvas2');

const bColor = document.querySelector('#bcolor');
const color = document.querySelector('#color');
const padding = document.querySelector('#padding');
const size = document.querySelector('#size');

const qr = new QRious({
    element: canvas1,
    size: _size,
    value: ''
});

input.addEventListener('input', () => {
    changeQR();
    if (input.value !== '') output.style.visibility = 'visible';
    else output.style.visibility = 'hidden';
});

function changeQR() {
    createQRCode('');
    img.src = createQRCode(input.value);
}
function createQRCode(text) {
    canvas1.width = `${_size}`;
    canvas1.height = `${_size}`;
    qr.value = text;

    canvas2.width = `${_size + (_pad * 2)}`;
    canvas2.height = `${_size + (_pad * 2)}`;

    let ctx = canvas2.getContext('2d');
    ctx.fillStyle = _background;
    ctx.fillRect(0, 0, _size + (_pad * 2), _size + (_pad * 2));
    ctx.drawImage(canvas1, _pad, _pad);

    return canvas2.toDataURL();
}

bColor.addEventListener('input', () => {
    output.style.backgroundColor = bColor.value;
    qr.background = _background = bColor.value;
    changeQR();
});
color.addEventListener('input', () => {
    qr.foreground = color.value;
    changeQR();
});
padding.addEventListener('input', () => {
    _pad = parseInt(padding.value);
    changeQR();
});
size.addEventListener('input', () => {
    qr.size = _size = parseInt(size.value);
    changeQR();
});
