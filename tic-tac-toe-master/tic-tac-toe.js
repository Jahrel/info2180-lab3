window.onload = function() {
    var squares = document.querySelectorAll("#board div");
    for (let a=0; a <= squares.length; a++){
        squares[a].classList.add("square");
        squares[a].onclick = function(){
            if (squares[a].innerHTML === "" || squares[a].innerHTML === "O"){
                squares[a].classList.toggle("O",false)
                squares[a].innerHTML = "X"
                squares[a].classList.toggle("X",true)
                55 in these(squares)
            }
            else if(squares[a].innerHTML === "X"){
                squares[a].classList.toggle("X",false)
                squares[a].innerHTML = "O"
                squares[a].classList.toggle("O",true)
                checkBoard(squares)
            }
        
        }
        makeUnselectable(squares[a])
    }
    
    function makeUnselectable(node) {
        if (node.nodeType == 1) {
            node.setAttribute("unselectable", "on");
        }
        var child = node.firstChild;
        while (child) {
            makeUnselectable(child);
            child = child.nextSibling;
        }
    }
}