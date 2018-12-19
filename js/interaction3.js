var roan = 0;
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) { //监听设备陀螺仪
        if (-45 < event.gamma && event.gamma < 45)
            roan = ((event.gamma) + 45) / 2;
        $("#fan").rotate({
            angle: roan,
            center: ["39.2%", "72%"],
        });

    });

} else {
    M.toast({
        html: '你的浏览器不支持哦~用移动端试试吧！',
        classes: 'rounded'
    });
}