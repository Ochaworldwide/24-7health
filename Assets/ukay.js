const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".slider news");
const imagery = document.querySelectorAll(".customers_slider customers");
let i = 0; // current slide
let j = 3; // total slides



function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor= "#076bb8";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}



function nexter(){
    document.getElementById("customers_content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("customers_content" + (i+1)).classList.add("active");
    
}

function prever(){
    document.getElementById("customers_content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("customers_content" + (i+1)).classList.add("active");
    
}


function i_clicker(){
    var icon=document.getElementById("icon");
    var nav=document.getElementById("navs");
    
   

    if (nav.style.display=="none"){
        icon.style.transform="rotate(180deg)";
        nav.style.display="flex";
        
    }
    else{
        icon.style.transform="rotate(0deg)";
        nav.style.display="none";
        
        
    }
    myFun();
}
    function myFun(){
        var icon=document.getElementById("icon");
        
        icon.style.transitionDuration="1s";
    }




