// const container = document.querySelector('#container');

// // Create the 16x16 grid on each line
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container.appendChild(content);
// }
// const container2 = document.querySelector('#container2');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container2.appendChild(content);
// }
// const container3 = document.querySelector('#container3');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container3.appendChild(content);
// }

// const container4 = document.querySelector('#container4');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container4.appendChild(content);
// }

// const container5 = document.querySelector('#container5');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container5.appendChild(content);
// }

// const container6 = document.querySelector('#container6');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container6.appendChild(content);
// }

// const container7 = document.querySelector('#container7');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container7.appendChild(content);
// }

// const container8 = document.querySelector('#container8');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container8.appendChild(content);
// }

// const container9 = document.querySelector('#container9');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container9.appendChild(content);
// }

// const container10 = document.querySelector('#container10');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container10.appendChild(content);
// }

// const container11 = document.querySelector('#container11');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container11.appendChild(content);
// }

// const container12 = document.querySelector('#container12');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container12.appendChild(content);
// }

// const container13 = document.querySelector('#container13');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container13.appendChild(content);
// }

// const container14 = document.querySelector('#container14');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container14.appendChild(content);
// }

// const container15 = document.querySelector('#container15');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container15.appendChild(content);
// }
// const container16 = document.querySelector('#container16');
// for (let i = 0; i < 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add('content');
//     content.style.border = '1px solid black';
//     content.style.height = '25px';
//     content.style.width = '25px';
//     container16.appendChild(content);
//     content.addEventListener("mouseover", () => {
//         content.style.backgroundColor = "pink";
//         console.log("yippe");
//     }) 
// }

// const pen = document.getElementsByClassName('content');
// if (pen) {
//     pen.addEventListener('mouseover', (event) => {
//         event.target.style.color = "pink";
//     })
// }


const board = document.querySelector('#test');
// Selected the div test now we want to create 
// rows of blocks with items to display a 16x16 grid
for (let i = 0; i < 16; i++) {
    const content = document.createElement('div');
    content.classList.add('row');
    content.style.display = 'flex';
    // content.style.flex = '1';
    board.appendChild(content);
    for (let j = 0; j < 16; j++) {
        const blocks = document.createElement('div');
        blocks.classList.add('items');
        // blocks.style.flex = '1';
        blocks.style.border = '1px solid black';
        blocks.style.height = '25px';
        blocks.style.width = '25px';
        blocks.addEventListener("mouseover", () => {
        blocks.style.backgroundColor = "pink";
        console.log("yippe");
        })
        board.appendChild(blocks);
    }
}

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
        if (clearBoard[block].style.backgroundColor == 'pink') {
            clearBoard[block].style.backgroundColor = 'white';
            console.log("if statement works");
        }
    }
}