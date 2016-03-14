$('body').append('<canvas id="canvas" width="1000" height="1000" style="border:1px solid red;"></canvas>')

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
