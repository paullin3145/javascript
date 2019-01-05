var numsquares =6;

var colors=generateRandomColor(numsquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButtom= document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn");
var hardbtn= document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numsquares=3;
colors=generateRandomColor(numsquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
	}
	else{ 
        squares[i].style.display="none";
	}
}
});

hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
numsquares=6;
colors=generateRandomColor(numsquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	
		squares[i].style.backgroundColor=colors[i];
	
        squares[i].style.display="block";
	}

});

resetButtom.addEventListener("click",function(){
	//generate random color
	colors=generateRandomColor(numsquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match pickedcolor
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	this.textContent="new colors";
    messageDisplay.textContent="";

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=pickedColor;

 for(var i=0;i<squares.length;i++){
 	//add initial color to square
 	squares[i].style.backgroundColor=colors[i];
 	//add click listener to square
 	squares[i].addEventListener("click", function(){
               //grab color of clicked square
               var clickedColor=this.style.backgroundColor;
               //compare color to picked color
               if(clickedColor===pickedColor){
               	messageDisplay.textContent="correct";
               	changeColor(clickedColor);
               	h1.style.backgroundColor=clickedColor;
               	resetButtom.textContent="play again?";

               	}
               	else{
               		this.style.backgroundColor="#232323";
               		messageDisplay.textContent="try again";
               	}


 	})
 }

 function changeColor(color){
     //loop through all squares 
     for(var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=color;
     }

     }

 function pickColor(){
 	var random= Math.floor(Math.random()*colors.length);
 	return colors[random];
 }

 function generateRandomColor(num){
 	var arr=[];
    for(var i=0;i<num;i++){
     arr.push(randomColor());
    }
 	return arr;

 }

 function randomColor(){
 	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
 }