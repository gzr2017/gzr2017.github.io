var roan = 0;
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) { //监听设备陀螺仪
        if (-45 < event.gamma && event.gamma < 45)
            roan = ((event.gamma) + 45) / 2;
        var div = document.getElementById('fan');
        div.style.webkitTransform = 'rotate(' + roan + 'deg)';
        div.style.webkitTransform = 'translateX(39.2%)';
        div.style.webkitTransform = 'translateY(72%)';
        div.style.mozTransform = 'rotate(' + roan + 'deg)';
        div.style.mozTransform = 'translateX(39.2%)';
        div.style.mozTransform = 'translateY(72%)';
        div.style.msTransform = 'rotate(' + roan + 'deg)';
        div.style.msTransform = 'translateX(39.2%)';
        div.style.msTransform = 'translateY(72%)';
        div.style.oTransform = 'rotate(' + roan + 'deg)';
        div.style.oTransform = 'translateX(39.2%)';
        div.style.oTransform = 'translateY(72%)';
        div.style.transform = 'rotate(' + roan + 'deg)';
        div.style.transform = 'translateX(39.2%)';
        div.style.transform = 'translateY(72%)';
        // $("#fan").rotate({
        //     angle: roan,
        //     center: ["39.2%", "72%"],
        // });

    });

} else {
    M.toast({
        html: '你的浏览器不支持哦~用移动端试试吧！',
        classes: 'rounded'
    });
}