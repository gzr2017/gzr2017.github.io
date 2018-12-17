// var roan = 0;
// var img = document.getElementById('container');
// if (window.DeviceOrientationEvent) {
//     window.addEventListener('deviceorientation', function (event) {//监听设备陀螺仪
//         if (-45 < event.gamma && event.gamma < 45)
//             roan = ((event.gamma) + 45) / 2;
//         $("#img").rotate({
//             angle: roan,
//             center: ["39.2%", "72%"],
//         })
//     });
// } else {
//     M.toast({ html: '你的浏览器不支持哦~用移动端试试吧！', classes: 'rounded' });
// }

const startPos = -$("#host_card").innerHeight * .8 * .95, endPos = $("#host_card").innerHeight * .8 * .06
var tempPos, start = startPos
var scale = $("#host_card").innerHeight * .8
console.log(scale)
$(".blueFlo")[0].style.top = startPos + "px"
$(".redFlo")[0].style.bottom = startPos + "px"

var hammertime = new Hammer($("#container")[0])
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on("pan", function (e) {
    if (start + e.deltaY * 1.25 <= endPos && start + e.deltaY * 1.25 >= startPos) {
        $(".blueFlo").css("top", start + e.deltaY * 1.25 + "px")
        $(".redFlo").css("bottom", start + e.deltaY * 1.25 + "px")
    }
})
hammertime.on("panend", function (e) {
    start += e.deltaY * 1.25
})
