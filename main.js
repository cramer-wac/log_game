console.log('hi');

// global variable to keep track of things
let selected = false;
let diskToMove = '';
let columnFrom = '';

let columnOne = document.querySelector("#first");
let columnTwo = document.querySelector("#second");
let columnThree = document.querySelector("#third");

function selectDrop(column) {
    console.log(column);
    if (selected === false){

        // see if disk to select
        diskToMove = column.lastElementChild


        // if disk exists update things
        // else reset diskToMove
        if(diskToMove) {
            columnFrom = column
            columnFrom.style.backgroundColor = "lightyellow";
            selected = true;
        } else {
            diskToMove = '';
        }
        

    } else if (selected === true) {
        // if the destination has disks
        // check if dick can move there
        // else move disk
        if (column.lastElementChild){

            // gather information on how long each disk is
            let lowerDiskLength = column.lastElementChild.clientWidth
            let upperDiskLength = diskToMove.clientWidth;
            
            // console.log(diskToMove.clientWidth);

            if(lowerDiskLength > upperDiskLength) {
                column.appendChild(diskToMove);
                
            }

            // checkWin
            if(column.querySelectorAll(".disk").length === 3 && column !== columnOne) {
                console.log('win')  
                column.style.backgroundColor = 'green'
            }
            
        } else {
            column.appendChild(diskToMove);
        }
        
        // reset things so another disk can be selected
        columnFrom.style.backgroundColor = "white";
        diskToMove = '';
        columnFrom = '';
        selected = false;
    }

}

columnOne.addEventListener("click", function() {
    selectDrop(columnOne);
})

columnTwo.addEventListener("click", function() {
    selectDrop(columnTwo);
})

columnThree.addEventListener("click", function() {
    selectDrop(columnThree);
})