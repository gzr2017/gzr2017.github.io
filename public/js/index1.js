const startPos = -window.innerHeight * .8 * .95, endPos = window.innerHeight * .8 * .06
var tempPos, start = startPos
var scale = window.innerHeight * .8
console.log(scale)
$(".blueFlo")[0].style.top = startPos + "px"
$(".redFlo")[0].style.bottom = startPos + "px"

var hammertime = new Hammer($("#container")[0])
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on("pan", function(e) {
  if(start + e.deltaY * 1.25 <= endPos && start + e.deltaY * 1.25 >= startPos) {
    $(".blueFlo").css("top", start + e.deltaY * 1.25 + "px")
    $(".redFlo").css("bottom", start + e.deltaY * 1.25 + "px")
  }
})
hammertime.on("panend", function(e) {
  start += e.deltaY * 1.25
})
