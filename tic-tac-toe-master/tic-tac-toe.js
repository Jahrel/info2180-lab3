window.onload = function() {
    var squares = document.querySelectorAll("#board div");
    for (let a=0; a <= squares.length; a++){
        squares[a].classList.add("square");
    }
}