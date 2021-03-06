var ele = document.querySelector('#animation')
var ctx = ele.getContext('2d')

var width = 50
var startX = 10
var startY = 10

var endX
var endY

var x = startX
var y = startY
var duration = 0

function logic (evt) {
  var max = ele.width - width
  duration += 0.02
  var l = lerp(startX, endX, duration)
  if (l < max && l > 0 && endX !== x) {
    x = l
    window.requestAnimationFrame(draw)
  } else {
    duration = 0
  }
}

function draw () {
  ctx.clearRect(0, 0, ele.width, ele.height)
  ctx.fillStyle = '#ededed'
  ctx.fillRect(x, y, 50, 50)
}

function lerp (start, end, speed) {
  return start + (end - start) * speed
}

ele.addEventListener('mousemove', function (evt) {
  startX = x
  startY = y
  endX = evt.clientX
  endY = evt.clientY
})

window.requestAnimationFrame(draw)
window.setInterval(logic, 1000 / 60)
