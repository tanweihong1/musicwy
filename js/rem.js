function remSize() {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    //iPhone6设计稿 1rem =50px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) +'px'
    document.querySelector('body').style.fontSize = 0.16 +'rem'
}
remSize()
window.onresize = function() {
    remSize()
}