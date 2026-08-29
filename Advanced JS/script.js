window.addEventListener("load", function(){
    var div = document.getElementsByClassName("test")[0]
    div.addEventListener("mousemove",function(e){
        div.innerText = "x: " + e.clientX + "y: " + e.clientY;
        div.style.backgroundColor = `rgb(${e.clientX} , ${e.clientY} , 100 )`
    })

})
// Task2

var div = document.getElementsByTagName('div')[1]
    div.onclick = function funD(){
        console.log("This is div" )
    }
var span = document.getElementsByTagName('span')[0]
    span.onclick= function funs(){
        console.log("This is span" )
    }
    var p = document.getElementsByTagName('p')[0]
    p.onclick=function funP(){
        console.log("This is p" )
    }
var art = document.getElementsByTagName('article')[0]
    art.onclick=function funa(){
        console.log("This is article" )
    }
var sec = document.getElementsByTagName('section')[0]
    sec.onclick=function funs(){
        console.log("This is section" )
    }
