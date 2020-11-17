var colors=generateRandomColors(6)
//var colors=["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"]
var squares=document.querySelectorAll(".square")
var pickedColor=pickColor()
var displayColor=document.getElementById("displayColor")
var message=document.querySelector("#message")
var btn=document.querySelector(".btn")
var h1=document.querySelector("h1")
var easy=document.querySelector("#b1")

var hard=document.querySelector("#b2")
displayColor.textContent=pickedColor

//easy button
easy.addEventListener("click",function(){
	h1.style.background="steelblue"
	//adding selected class to the btns
	easy.classList.add("selected")
	hard.classList.remove("selected")
	//take a array of three new colrs
	btn.textContent="New game"
	message.textContent=""
	colors=generateRandomColors(3)
	console.log(colors)
	//pick a color from the array
	pickedColor=pickColor()
	displayColor.textContent=pickedColor
	//set those colures in divs
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i]
		}
		else{
			squares[i].style.display="none";
		}
	}
	/*
	for(var i=0;i<3;i++){
		squares[i].style.background=colors[i]
	}
	for(var i=3;i<squares.length;i++){
		squares[i].style.display="none"
	}*/
	
})
//hard button
hard.addEventListener("click",function(){
	h1.style.background="steelblue"
	btn.textContent="New game"
	hard.classList.add("selected");
	easy.classList.remove("selected");
	message.textContent=""
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	for(var i=0;i < squares.length;i++){

		squares[i].style.background=colors[i];

		squares[i].style.display="block"
	}
		
	
})

btn.addEventListener("click",function(){
	//generate new colors
	colors=generateRandomColors(6)
	//pick new random color from the array
	pickedColor=pickColor()
	displayColor.textContent=pickedColor
	//change colors os squares
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i]
	}
	btn.textContent="New game"
	message.textContent="";
	h1.style.background="steelblue"

})
for(var i=0;i<squares.length;i++){
	//intializing colors to the squares
	squares[i].style.background=colors[i]

	//add event listener
	squares[i].addEventListener("click",function(){
		//grab color of cliked one
		//console.log("this.style.background")
		var clickedColor=this.style.background
		//compare it with picked color
		if(pickedColor===clickedColor){
			//alert("correct")
			message.textContent="correct"
			changeColors(clickedColor);
			btn.textContent="Play again!"
		}
		else{
			this.style.background="#232323"
			message.textContent="Try again!"

		}
	
	})


}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color

		console.log(squares[i].style.background)
	}
	h1.style.background=color
}
//Math functions usage
function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random]
}


function generateRandomColors(num){
	//create an array
	arr=[]
	//push the geanerated colors in to the array
	for(var i=0;i<num;i++){
		arr.push(generateColors())
	}
	//return yhe array
	return arr

}

function generateColors(){
	//0 to 255 for r
	r=Math.floor(Math.random()*256)
	//0 to 255 for g
	g=Math.floor(Math.random()*256)
	//0 to 255 for b
	b=Math.floor(Math.random()*256)

	str="rgb("+r+", "+g+", "+b+")"
	return str
}