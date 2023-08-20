function main () {

    createRows();
    fillRows();
    detectMouse();
    buttonPrompt();
}

function createRows() {
    for (let i = 0; i < 16; i++) {
        const divWhole = document.querySelector('.divWhole'); //select hard-coded div
        const divCreate = document.createElement('div');
        divCreate.classList.add('row', `row${i}`);
        divWhole.appendChild(divCreate);
    }
}

function fillRows() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
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
            e.target.classList.add('hover');
        });
    })
}

function buttonPrompt() {
    const button = document.querySelector("button");
    button.addEventListener('click', () => prompt("Number of squares"));
}

main();


//Also works//

// function main () {

//     createRows();

//     const divRow = document.querySelectorAll('.row');
//     divRow.forEach( row => fillRows(row.classList[1])) //classList[1] == `row${i}` from createRows()
// }

// function createRows() {
//     for (let i = 0; i < 16; i++) {
//         const divWhole = document.querySelector('.divWhole');
//         const divCreate = document.createElement('div');
//         divCreate.classList.add('row', `row${i}`);
//         divWhole.appendChild(divCreate);
//     }
// }

// function fillRows(rowNum) {
//     for (let i = 0; i < 16; i++) {
//         const divRow = document.querySelector(`.${rowNum}`);
//         const divCreate = document.createElement('div');
//         divCreate.classList.add('single');
//         divRow.appendChild(divCreate);
//     }
// }

// main();
