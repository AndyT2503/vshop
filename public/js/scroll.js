var prevPosition = window.pageYOffset;
window.onscroll = () => {
    var currentPosition = window.pageYOffset;
    if (currentPosition < prevPosition) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    prevPosition=currentPosition;
};
