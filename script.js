$(document).ready(function () {
    $(".p1").hover(function () {
        arriba = Math.random() * (250 - 1) + 1;
        abajo = Math.random() * (500 - 1) + 1;

        $(this).css("top", arriba);
        $(this).css("left", abajo);

    });
});

function dijoSi() {
    document.getElementById("si").style.display = "block";
    document.getElementById("btnNo").style.display = "none";
    document.getElementById("btnSi").style.display = "none";
    document.getElementById("txtTitulo").style.display = "none";
}


function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}


