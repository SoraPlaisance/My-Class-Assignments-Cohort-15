var display = document.getElementById('display'); //grabs the <div id="display"> element so we can update its content in JS

function press(key) {
    if (key==='=') {
        try {
            display.textContent= eval(display.textContent);
        } catch(e) {
            display.textContent='Error';
        }
    } else {
        if(display.textContent ==='0' && key !=='.') {
            display.textContent= key;
        } else {
            display.textContent += key;
        }
    }
}
//console.log(press(key));

function clearDisplay() {
    display.textContent = '0';
}
