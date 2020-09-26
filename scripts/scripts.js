let columnNum;
let cellCount;

const container = document.querySelector('.container');
const btn = document.querySelector('button');

function setup (){
    clearBoard();
    columnNum = Math.floor(+prompt('How many cells per side would you like? (1 to 64)\n (decimals will not be considered)', 16));
    if (columnNum < 1 || columnNum > 64) {
        alert('Try again! Must be between 1 and 64');
        } else {
            createBoard(columnNum);
            btn.textContent = "Reset Board"
        }
};


function createBoard(columnNum) {
    for (cellCount = 0; cellCount < (columnNum*columnNum) ; cellCount++) {
        let square = document.createElement('div');
        square.style.width = (640/columnNum)+"px";
        square.style.height = (640/columnNum)+"px";
        square.classList.add('empty');
        container.appendChild(square);
    }
    const cells = document.querySelectorAll('.empty');

    cells.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.classList.add('filled');
        });
    });

}

function clearBoard() {
    var cell = document.getElementsByClassName('empty');
    while(cell.length > 0) {
        cell[0].parentNode.removeChild(cell[0]);
    }
}