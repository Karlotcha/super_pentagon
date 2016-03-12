$('body').append('<canvas id="canvas" width="1000" height="1000" style="border:1px solid red;"></canvas>')

// ************************************************************************************
// TRIANGLE CLASS
// ************************************************************************************
function Triangle () {
  ctx.beginPath()
  var x = rand(1000)
    , y = rand(1000)
    , r = rand(255)
    , g = rand(255)
    , b = rand(255)
    , color = "rgb(" + r + "," + g + "," + b + ")"

  ctx.moveTo(x,y)
  ctx.lineTo(x + rand(50), y + rand(50))
  ctx.lineTo(x + rand(50), y + rand(50))

  ctx.closePath()

  // ctx.strokeStyle = 'blue'
  // ctx.stroke()
  ctx.fillStyle = color
  ctx.fill()
}

// ************************************************************************************
// FUNCTIONS HELPERS
// ************************************************************************************
function rand(n) {
 return Math.floor(Math.random()*n)
}

// ************************************************************************************
// MAIN SCRIPT
// ************************************************************************************
var c      = document.getElementById("canvas")
  , ctx    = c.getContext("2d")
  , width  = c.width
  , height = c.height
  , core_x = width/2
  , core_y = height/2
  , image  = ctx.getImageData(0, 0, width, height)

setInterval(function() {
    new Triangle
}, 1)
