var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext("2d")
  context.fillStyle = "tomato";
  

// math*pi * 2 means you are drawing the whole circumference. If you just did math*pi then it only draws a semi-circle
  // context.beginPath();
  // context.arc(200, 300, 100, 0, Math.PI * 2, true)
  // context.fill();

  // context.beginPath();
  // context.arc(100, 100, 50, 0, Math.PI, true)
  // context.stroke();

  // context.beginPath();
  // context.arc(400, 100, 50, 0, Math.PI, false)
  // context.stroke();


  var drawCircle = function(x, y) {
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2);
    context.stroke();
  }
    canvas.addEventListener("mousemove", function(event) {
      drawCircle(event.x, event.y);
    })

  var img = document.createElement('img');
    img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";

  var drawDoge = function(){
    context.drawImage(img, 200, 100, 80, 80)
  }
  img.addEventListener("load", drawDoge);


  var changeColour = function() {
    context.strokeStyle = this.value;
  }

  var colourPicker = document.getElementById("input-colour");
  colourPicker.addEventListener("change", changeColour);

}

window.addEventListener("load", app)