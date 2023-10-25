// Initial size of grid
let sizeOfBoard = 16;

// Selected the div test now we want to create 
// const board = document.querySelector('#test');

// Event listener to check if the user pressed the change
// canvas size button. If pressed the canvas will 
// change to be the size of the user input 
// not exceeding 100.
var boardS = document.getElementById('boardSize');
boardS.addEventListener("click", () => {
    while(true) {
        sizeOfBoard = prompt("Change size of board. Max Size is 100:");
        if (sizeOfBoard > 100) {
            sizeOfBoard = prompt("Change size of board. Max Size is 100:");
        } else {
            break;
        }
    }
    // New canvas size 
    document.getElementById('test').innerHTML = "";
    for (let i = 0; i < sizeOfBoard; i++) {
        const content = document.createElement('div');
        content.classList.add('row');
        content.style.display = 'flex';
        // content.style.flex = '1';
        board.appendChild(content);
        for (let j = 0; j < sizeOfBoard; j++) {
            const blocks = document.createElement('div');
            blocks.classList.add('items');
            // blocks.style.flex = '1';
            blocks.style.border = '1px solid black';
            blocks.style.height = '25px';
            blocks.style.width = '25px';
            blocks.addEventListener("mouseover", () => {
                blocks.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
                // Darkens the block everytime you go over
                // the same block
                let cb = blocks.dataset.brightness || 100;
                cb = parseInt(cb) - 10;
                if (cb >= 0) {
                    blocks.style.filter = `brightness(${cb}%)`;
                    blocks.dataset.brightness = cb;
                }
            })
            board.appendChild(blocks);
        }
    }
    console.log(sizeOfBoard);
})

const board = document.querySelector("#test");
// rows of blocks with items to display a 16x16 grid
for (let i = 0; i < sizeOfBoard; i++) {
    const content = document.createElement('div');
    content.classList.add('row');
    content.style.display = 'flex';
    // content.style.flex = '1';
    board.appendChild(content);
    for (let j = 0; j < sizeOfBoard; j++) {
        const blocks = document.createElement('div');
        blocks.classList.add('items');
        // blocks.style.flex = '1';
        blocks.style.border = '1px solid black';
        blocks.style.height = '25px';
        blocks.style.width = '25px';
        blocks.addEventListener("mouseover", () => {
        blocks.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        
        // Darkens the block everytime you go over
        // the same block
        let cb = blocks.dataset.brightness || 100;
        cb = parseInt(cb) - 10;
        if (cb >= 0) {
            blocks.style.filter = `brightness(${cb}%)`;
            blocks.dataset.brightness = cb;
        }

        })
        board.appendChild(blocks);
    }
}

const colors = ["red", "green", "blue"];


// Creating a function that resets the board
// to previous clean state
function resetBoard() {
    const block = 0;
    // Select all elements by the class name to be checked for their color
    const clearBoard = document.getElementsByClassName("items");
    // Defined an intialzed the array to size of board
    clearBoard[block] = clearBoard.length;

    // Loop through each item and check if there are color blocks
    // If there is then change the color to default.
    for (let block = 0; block < clearBoard.length; block++) {
        if (clearBoard[block].style.backgroundColor == 'red'
        || clearBoard[block].style.backgroundColor == 'blue'
        || clearBoard[block].style.backgroundColor == 'green') {
            clearBoard[block].style.backgroundColor = 'white';
        }
    }
}