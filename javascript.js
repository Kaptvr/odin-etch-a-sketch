function main () {

    let squares = 16; //default size == 16

    createRows(squares);
    fillRows(squares);
    detectMouse();
    buttonPrompt(squares); //set different number of squares per side
}

function createRows(squares) {
    for (let i = 0; i < squares; i++) {
        const divWhole = document.querySelector('.divWhole'); //select hard-coded div
        const divCreate = document.createElement('div');
        divCreate.classList.add('row', `row${i}`);
        divWhole.appendChild(divCreate);
    }
}

function fillRows(squares) {
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            const divRow = document.querySelector(`.row${i}`);
            const divCreate = document.createElement('div');
            divCreate.classList.add('single');
            divRow.appendChild(divCreate);
        }
    }
}

function detectMouse() {
    const divSingle = document.querySelectorAll('.single');
    divSingle.forEach(div => {
        div.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = randomColor();
        });
    })
}

function buttonPrompt(squares) {
    const button = document.querySelector("button");
    button.addEventListener('click', (squares) => {
        squares = prompt("Number of squares (1-100)");
        if (squares >= 1 && squares <= 100) { //check if not too many or too few squares
            const divRow = document.querySelectorAll('.row');
            divRow.forEach( (row) => { //remove existing grid
                row.remove();
            })
            createRows(squares); //then create a new one with size of 'squares'
            fillRows(squares);
            detectMouse(); //switch mouse detection on
        } else{
            alert("Invalid size");
        }
    });
    
}

function randomColor() {
    let colorCode = '#';
    let hexLetters ="0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        colorCode += hexLetters[Math.floor(Math.random() * 16)]
    }
    return colorCode;
}

main();