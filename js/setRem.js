function setRem() {
    // var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var clientWidth = document.clientWidht || document.body.clientWidth;
    clientWidth = clientWidth > 1920 ? 1920 : clientWidth;
    clientWidth = clientWidth < 1209 ? 1209 : clientWidth;
    var rem_ = clientWidth / 24;
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = rem_ + 'px';
}
window.onload = setRem;
window.onresize = setRem;
