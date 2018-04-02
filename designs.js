// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()



const pixelCanvas = $("#pixelCanvas");
const sizePicker  = $("#sizePicker");
const height = $("#inputHeight");
const width  = $("#inputWeight");
const resetButton = $("#resetButton");
const firstH2 = $("#firstH2");
const secondH2 = $("#secondH2");
const thirdH2 = $("#thirdH2");
const fourthH2 = $("#fourthH2");
const colorPicker = $("#colorPicker");


$(function(){

	sizePicker.hide();
	colorPicker.hide();
	resetButton.hide();


	function makeGrid(heightValue, widthValue) {
	//uses value of height to define number of tr
	//uses value of width to define number of td
		pixelCanvas.empty();
		for(let x = 0; x < heightValue; x++) {
				let newRow = $("<tr> </tr>").appendTo(pixelCanvas);
			for(let y = 0; y < widthValue; y++) {
				let newCol = $("<td> </td>").appendTo(newRow);
			}
		}

	};

	sizePicker.submit(function(event){
	//determines value of height and width and runs makeGrid function when sizePicker is submitted
		const heightValue = height.val();
		const widthValue =  width.val();
		event.preventDefault();
		makeGrid(heightValue, widthValue);
	})

	pixelCanvas.on("click", "td", function(){
	//on clicking the table pixelCanvas, either adds new background color from color picker, or defaults to white
			let background = $(this).css("background-color");
			if (background === "rgba(0, 0, 0, 0)") {
				$(this).css("background-color", colorPicker.val());
			} else {
				$(this).css("background-color", "rgba(0, 0, 0, 0)");
			}
	});

	pixelCanvas.on("mousemove", "td", function(event){
	//when clicking and dragging on the table pixelCanvas, either adds new background color from color picker, or defaults to white
			let background = $(this).css("background-color");
			if(event.which === 1) {
				$(this).css("background-color", $("#colorPicker").val());
			}
	});

	firstH2.click(function() {
		sizePicker.toggle();
	});

	secondH2.click(function() {
		colorPicker.toggle();
	});

	thirdH2.click(function() {
		pixelCanvas.toggle();
	});

	fourthH2.click(function() {
		resetButton.toggle();
	});

	resetButton.click(function(event){
	//resets canvas when botton clicked
		pixelCanvas.empty();
	});


});
