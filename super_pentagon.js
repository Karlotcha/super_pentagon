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
