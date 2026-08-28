window.addEventListener("load", function(){
    var div = document.getElementsByClassName("test")[0]
    div.addEventListener("mousemove",function(e){
        div.innerText = "x: " + e.clientX + "y: " + e.clientY;
        div.style.backgroundColor = `rgb(${e.clientX}) , ${e.clientY} , 100 `
    })

})
