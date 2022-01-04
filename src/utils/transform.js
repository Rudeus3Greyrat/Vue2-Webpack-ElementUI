// *秒转分
export const SecToMin = (sec) => {
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec / 60 % 60));
    var s = Math.floor((sec % 60));

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    return h + ":" + m + ":" + s
}

// * 标准时间 时间转 YYYY-MM-dd hh:mm:ss (将 Thu Sep 20 2018 16:23:03 GMT+0800 (中国标准时间)转换为"2018-09-20 16:23:03")
export const formatYMDHMSTime = (inputTime) => {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};