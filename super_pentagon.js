$('body').append('<canvas id="canvas" width="1000" height="1000" style="border:1px solid red;"></canvas>')

// Point class
function Point(x,y) {
  this.x = x
  this.y = y
}

// Triangle class
function Triangle (a, b, c) {
  ctx.beginPath()
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y)
  ctx.lineTo(c.x, c.y)
  ctx.closePath()

  ctx.strokeStyle = random_color()
  ctx.stroke()
  // ctx.fillStyle = random_color()
  // ctx.fill()
}

// Pentagon class
function Pentagon (a, b, c, d, e) {
  ctx.beginPath()
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y)
  ctx.lineTo(c.x, c.y)
  ctx.lineTo(d.x, d.y)
  ctx.lineTo(e.x, e.y)
  ctx.closePath()

  ctx.strokeStyle = random_color()
  ctx.stroke()
}

Pentagon.random = function() {
  var x = rand(1000)
    , y = rand(1000)
    , a = new Point(x + rand(50), y + rand(50))
    , b = new Point(x + rand(50), y + rand(50))
    , c = new Point(x + rand(50), y + rand(50))
    , d = new Point(x + rand(50), y + rand(50))
    , e = new Point(x + rand(50), y + rand(50))

  new Pentagon(a, b, c, d, e)
}

// helpers
function rand(n) {
 return Math.floor(Math.random()*n)
}

function random_color() {
  var r = rand(255)
    , g = rand(255)
    , b = rand(255)

  return "rgb(" + r + "," + g + "," + b + ")"
}

// main
var c      = document.getElementById("canvas")
  , ctx    = c.getContext("2d")
  , width  = c.width
  , height = c.height
  , core_x = width/2
  , core_y = height/2
  , image  = ctx.getImageData(0, 0, width, height)

setInterval(function() {
  Pentagon.random()
}, 1)
