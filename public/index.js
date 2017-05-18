var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext("2d")
  // context.fillStyle = "tomato";
  
  var draw = function(x, y, width, height) {
    // then go to new canvas/addEventListener()
    context.beginPath();
    context.fillRect(x, y, width, height);
    context.stroke();
  }

  var brushSize = document.querySelector("select");


  brushSize.addEventListener("change", function(event){
    canvas.addEventListener("mousemove", function(event){
     draw(event.x, event.y, this.value, this.value)
    }.bind(brushSize));
  });
   


  var changeColour = function() {
    context.fillStyle = this.value;
  }
  

  var colourPicker = document.getElementById("input-colour");
  colourPicker.addEventListener("change", changeColour);

  

}

window.addEventListener("load", app)