const sRed = document.querySelector('input[name=sRed');

const sGreen = document.querySelector('input[name=sGreen');

const sBlue = document.querySelector('input[name=sBlue');


// Mengubah warna background dengan slider
sRed.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sGreen.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sBlue.addEventListener('input', function () {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


const resetButton = document.getElementById('reset-button')

console.log(resetButton);

resetButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'rgb(255,255,255)';
})