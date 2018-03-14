var s = document.getElementById("swap");
var slate = document.getElementById("slate");
var countryname = document.getElementById("country");
var elements = [];
var country = true;

var createCircle = function(cx, cy, r, fill){
  var circle = slate.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "circle"));
  circle.setAttribute("cx", cx + "");
  circle.setAttribute("cy", cy + "");
  circle.setAttribute("r" , r  + "");
  circle.setAttribute("fill", fill);
  circle.setAttribute("stroke", "black");
  elements.push(circle);
  console.log(circle);
};

var clear = function(){
  for(var x = 0; x < elements.length; x++){
    slate.removeChild(elements[x]);
  }
  elements = [];
};

var plotData = function(e){
  clear();
  if (country){
    country = false;
    //draw country 1 here
    countryname.innerHTML = "Finland";
    createCircle(50, 100, 10, "Gold");
    createCircle(150, 100, 10, "Silver");
    createCircle(250, 100, 40, "#D98719");
  }
  else{
    country = true;
    //draw country 2 here
    countryname.innerHTML = "Japan";
    createCircle(50, 100, 40, "Gold");
    createCircle(150, 100, 50, "Silver");
    createCircle(250, 100, 40, "#D98719");
  }
};

s.addEventListener("click", plotData);
plotData();
