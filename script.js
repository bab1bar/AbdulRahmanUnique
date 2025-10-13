
  function showAlert() {
    alert("Note: This website/page is in under development. Some features may not work properly.");
  }

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


orange.addEventListener("click", () => {
  document.body.style.backgroundColor = "orange";
  sound.currentTime = 0;
  sound.play();
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



  // get the button and audio elements
  const button = document.getElementById("heart");
  const hoverSound = document.getElementById("heartBeatSound");

  // play sound on hover
  button.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0; // restart sound if hovered quickly again
    hoverSound.play();
  });

