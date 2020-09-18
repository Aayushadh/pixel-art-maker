

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

var table = document.querySelector('table');

table.addEventListener('click', function (event) {
    var color = document.querySelector('#colorPicker');
    event.target.style.backgroundColor = color.value;

});