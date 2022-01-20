const dot = document.querySelector('.dot')
const html = document.querySelector('html')
 
function toggle(value) {
    if (value === 1) {
        dot.style.transform = "translateX(0)";
        html.dataset.colorMode = 'theme1'
    } else if (value === 2) {
        dot.style.transform = "translateX(20px)";
        html.dataset.colorMode = 'theme2'
    } else {
        dot.style.transform = "translateX(40px)";
        html.dataset.colorMode = 'theme3'
    }
}


    const number = document.querySelectorAll('button');
    const display = document.querySelector('#displayNumber');
    let displayNumber = '0';
   
    function inputNumber(input) {
        if (displayNumber === '0') {
            displayNumber = input;
        }  else {
            displayNumber += input;
            console.info(displayNumber);
        }
    }

    function updateDisplay() {
        display.innerText = displayNumber;
    }

    function hapus() {
        displayNumber = displayNumber.slice(0,displayNumber.length - 1)
    }

    function reset() {
        displayNumber = '0'
    }

    function equals() {
        displayNumber = eval(displayNumber);
    }

    for(let button of number) {
        button.addEventListener('click', function(event) {
            const target = event.target;
            
            if(target.classList.contains('reset')) {
                reset()
                updateDisplay()
                return
            }

            if(target.classList.contains('delete')) {
                hapus()
                updateDisplay()
                return
            }

            if(target.classList.contains('equals')) {
                equals()
                updateDisplay()
                return
            }

            inputNumber(target.innerText);
            updateDisplay();
        })
    }