<?php
if (isset($_POST["submit"])) {
    $user = $_POST["username"];
    $psw = $_POST["password"];
    $psw_confirm = $_POST["confirm"];
    if ($user == "" || $psw == "" || $psw_confirm == "") {
        echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";
    } else {
        if ($psw == $psw_confirm) {
            $con = mysqli_connect("localhost", "root", "") or die('Cloud not connect:' . mysqli_error());
            mysqli_select_db($con, "db_hotel");
            $sql = "select username from user where username = '$_POST[username]'"; //SQL语句
            $result = mysqli_query($con, $sql);    //执行SQL语句
            $num = mysqli_num_rows($result); //统计执行结果影响的行数
            if ($num)    //如果已经存在该用户
            {
                echo "<script>alert('用户名已存在'); history.go(-1);</script>";
            } else    //不存在当前注册用户名称
            {
                $sql_insert = "insert into user (username,password) values('$_POST[username]','$_POST[password]')";
                $res_insert = mysqli_query($con, $sql_insert);
                if ($res_insert) {
                    echo "<script>alert('注册成功！去登陆');window.location.href='../html/login.html'</script>";
                } else {
                    echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";
                }
            }
        } else {
            echo "<script>alert('密码不一致！'); history.go(-1);</script>";
        }
    }
} else {
    echo "<script>alert('提交未成功！'); history.go(-1);</script>";
}