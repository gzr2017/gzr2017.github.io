//监听帧事件，帧渲染和帧绘制的变量
var timer1 = null, timer2 = null
var path_angel = 0, angleTemp = 0
var angel_increase = 1.6
var ball = $(".moveFlower")[0]
var tag = 0
var hammertime = new Hammer($("body")[0])
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on("pan", function(e) {
  if(e.angle > angleTemp) {
    if (tag == 0) {
      tag = 1
      drawFrame1()
    }
  } else {
    if (tag == 0) {
      tag = 1
      drawFrame2()
    }
  }
  angleTemp = e.angle
})
hammertime.on("panend", function(e) {
  tag = 0
  window.cancelAnimationFrame(timer1)
  window.cancelAnimationFrame(timer2)
})
hammertime.on("tap", function(e) {
  if(tag == 0) {
    // tag = 1
    drawFrame1()
  } else {
    // tag = 0
    window.cancelAnimationFrame(timer1)
    window.cancelAnimationFrame(timer2)
  }
})
hammertime.on("press", function() {
  return false
})


var width = document.documentElement.clientWidth, height = document.documentElement.clientHeight
var scale = (width / height) / (750 / 1334)
var basicFont = width / (3.75 * scale)
var path_length, path_width

if (window.innerHeight > 1000) {
  path_length = 1.8 * basicFont
  path_width = 1 * basicFont
} else {
  path_length = 1.2 * basicFont
  path_width = .8 * basicFont
}
ball.style.left = path_length + window.innerWidth * .5 - 0.24 * basicFont + "px"
ball.style.top = window.innerHeight * .5 + 0.2 * basicFont + "px"

function drawFrame1(){
  var angel = (path_angel * Math.PI / 180) % 360
  ball.style.left = path_length * Math.cos(angel) + window.innerWidth * .5 - 0.24 * basicFont + "px"
  ball.style.top = path_width * Math.sin(angel) + window.innerHeight * .5 + 0.2 * basicFont + "px"
  path_angel = (path_angel + angel_increase) % 360
  timer1 = requestAnimationFrame(drawFrame1)
}

function drawFrame2(){
  var angel = (path_angel * Math.PI / 180) % 360
  ball.style.left = path_length * Math.cos(angel) + window.innerWidth * .5 - 0.24 * basicFont + "px"
  ball.style.top = path_width * Math.sin(angel) + window.innerHeight * .5 + 0.2 * basicFont + "px"
  path_angel = (path_angel - angel_increase) % 360
  timer2 = requestAnimationFrame(drawFrame2)
}
