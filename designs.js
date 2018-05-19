// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	// Your code goes here!
	var parent = document.getElementById('pixelCanvas');
	var height = document.getElementById('inputHeight');
	var width = document.getElementById('inputWeight');

	parent.innerHTML = "";

	for (var i = 0; i < height.value; i++) {
		var row = document.createElement("tr");
		parent.appendChild(row);
		for (var j = 0; j < width.value; j++) {
			var col = document.createElement("td");
			row.appendChild(col);
		}
	}
}

document.getElementById('pixelCanvas').addEventListener("click", function(e){
	var color = document.getElementById('colorPicker');
	if (e.target.nodeName == "TD") {
		e.target.style = "background:" + color.value;
	};
});