$(function () {
    myFocus.set({
        id: 'header-banner'
    });

    // 登录名-session
    $.post("../php/session.php",
        {},
        function (data, status) {
            if (data != "") {
                $("#text-login").html(data);
                $("#text-register").html("注销");
                $("#text-register").attr("href", "../php/logout.php");
            }
        });


    // sub-title鼠标悬停事件
    $(".sub-title li a").hover(
        function () {
            $(".sub-title li .city-active").removeClass("city-active");
            $(this).addClass("city-active");
            $("#img01").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
            $("#img02").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
            $("#img03").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
            $("#img04").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
            $("#img05").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
            $("#img06").attr("src", "../images/gz0" + (Math.floor(Math.random() * 6) + 1) + ".jpg");
        },
        function () {
            // 鼠标离开
        }
    );



    imagePreview();
});


this.imagePreview = function () {
    this.xOffset = 10;
    this.yOffset = -10;

    // 鼠标划过的时间，让图片显示
    $(".hotel-display img").mouseenter(
        function (e) {
            var large_image = '<img src= ' + $(this).attr("src") + '>';
            $('#dialog_large_image').html($(large_image)
                .animate({
                    height: '480px',
                    width: '640px'
                }, 500))
                .css("position", "absolute")
                .css("z-index", "999")
                .css("top", (e.pageY + yOffset) + "px")
                .css("left", (e.pageX + xOffset) + "px");
        }
    );

    // 鼠标离开的事件，让图片消失
    $(".hotel-display img").mouseleave(
        function () {
            $('#dialog_large_image').hide();
        }
    );

    // 鼠标移动的事件，让图片随着移动
    $(".hotel-display img").mousemove(
        function (e) {
            $('#dialog_large_image').show();
            $("#dialog_large_image")
                .css("top", (e.pageY - yOffset) + "px")
                .css("left", (e.pageX + xOffset) + "px");
        });
};




