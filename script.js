document.getElementById("green").onclick = function() {
    document.body.style.backgroundColor = "green";
}

document.getElementById("red").onclick = function() {
    document.body.style.backgroundColor = "red";
}

document.getElementById("blue").onclick = function() {
    document.body.style.backgroundColor = "blue";
}

document.getElementById("yellow").onclick = function() {
    document.body.style.backgroundColor = "yellow";
}

document.getElementById("cyan").onclick = function() {
    document.body.style.backgroundColor = "cyan";
}       

document.getElementById("purple").onclick = function() {
    document.body.style.backgroundColor = "purple";
}

document.getElementById("orange").onclick = function() {
    document.body.style.backgroundColor = "orange";
}   


 orange.addEventListener("mouseenter", () => {
      document.body.style.backgroundColor = "lightblue";
    });

 orange.addEventListener("mouseleave", () => {
      document.body.style.backgroundColor = "white";
 });

    const yellow = document.getElementById("yellow");
    const colors = ["blue", "yellow", "green", "purple", "orange", "red", "cyan", "pink", "lightgreen", 
         "lightblue", "lightyellow", "lavender", "magenta", "lime", "teal", "teal", "gold", "silver"];
    let index = 0;

    yellow.addEventListener("mouseenter", () => {
      document.body.style.backgroundColor = colors[index];
     index = (index + 1) % colors.length; // loop back after last color
    });

