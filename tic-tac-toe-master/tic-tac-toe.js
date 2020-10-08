window.onload = function() {
    var squares = document.querySelectorAll("#board div");
    for (let a=0; a <= squares.length; a++){
        squares[a].classList.add("square");
        squares[a].onmouseover = function(){squares[a].classList.toggle("hover",true)}
        squares[a].onmouseout = function(){squares[a].classList.toggle("hover",false)}
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
    function checkBoard(arr){
        if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[1].innerHTML && arr[0].innerHTML === arr[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =   "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[3].innerHTML !== "" && arr[3].innerHTML === arr[4].innerHTML && arr[3].innerHTML === arr[5].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[3].innerHTML + " is the Winner!"
         }
         else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[7].innerHTML && arr[6].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
         }
         else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[3].innerHTML && arr[0].innerHTML === arr[6].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[1].innerHTML !== "" && arr[1].innerHTML === arr[4].innerHTML && arr[1].innerHTML === arr[7].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[1].innerHTML + " is the Winner!"
         }
         else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
         }
         else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[4].innerHTML && arr[6].innerHTML === arr[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =  "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
         }
         else if (arr[2].innerHTML !== "" && arr[2].innerHTML === arr[5].innerHTML && arr[2].innerHTML === arr[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ arr[2].innerHTML + " is the Winner!"
         }
    
    }

}