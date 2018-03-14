var s = document.getElementById("svg");
var elements = []
var stroke = "black"
var fill = "black"
var country = true
function createCircle(cx,cy,r){
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx",cx + "");
	circle.setAttribute("cy",cy + "");
	circle.setAttribute("r" ,r  + "");
	circle.setAttribute("fill", fill);
	circle.setAttribute("stroke",stroke);
	elements.push(circle);
	s.appendChild(circle);
};

function createLine(x1,y1,x2,y2){
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1",x1 + "");
	line.setAttribute("y1",y1 + "");
	line.setAttribute("x2",x2 + "");
	line.setAttribute("y2",y2 + "");
	line.setAttribute("fill", fill);
	line.setAttribute("stroke",stroke);
	elements.push(line);
	s.appendChild(line);
};

function createRect(x,y,width,height){
	var line = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	line.setAttribute("x",x + "");
	line.setAttribute("y",y + "");
	line.setAttribute("width",width + "");
	line.setAttribute("height",height + "");
	line.setAttribute("fill", fill);
	line.setAttribute("stroke",stroke);
	s.appendChild(line);
};

function clear(){
	for(var x = 0; x < elements.length; x++){
		s.removeChild(elements[x]);
	}
	elements=[]
};

s.addEventListener("click", function(e){
	if(e.pageX < 100 && e.pageY < 100){
		clear();
		fill = "red";
		createRect(0,0,100,100);
		if(country = true){
			country = false;
			//draw country 1 here
			//fill = color
			//createCircle(cx,cy,r)
		}
		else{
			country = true;
			//draw country 2 here
			//fill = color
            //createCircle(cx,cy,r)
		}
		return;
	}
});

function drawCircle(){
	clear();
	createCircle(500,500,circler);
}

fill = "red";
createRect(0,0,100,100);
