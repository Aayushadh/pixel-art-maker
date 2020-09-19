

// Grid generating part
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    event.preventDefault()

    var height, width;
    height = document.querySelector('#inputHeight');
    width = document.querySelector('#inputWidth');
    console.log(height.value);
    console.log(width.value);

    var table = document.querySelector('table');
    
    removeAllChildNodes(table);

    for (let i = 0; i < height.value; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < width.value; j++) {
            let col = document.createElement('td');
            col.className="TD";
            row.appendChild(col);
        }
        table.appendChild(row);

    }
});


// when the value is submitted again it is neccessary to remove old one grid
function removeAllChildNodes(parent) {
    // while (parent.firstChild) {
    //     parent.removeChild(parent.firstChild);
    // }
    parent.innerHTML=""
}



// color filler part using target or event delegation 

var table = document.querySelector('#pixelCanvas');
var mouseDwn=false


table.addEventListener("mousedown",(event)=>{
    mouseDwn=true
    console.log(mouseDwn)
})

table.addEventListener("mouseup",(event)=>{
    mouseDwn=false
    console.log(mouseDwn)
})

function fillMove(event){
    
    if(mouseDwn){
        console.log("ok")
        var color = document.querySelector('#colorPicker');
        event.target.style.backgroundColor = color.value;
    }
}

table.addEventListener("mousemove",fillMove)