const navMove = () => {
    const burger = document.querySelector(".fas")
    const nav = document.querySelector(".nav-links")
    

    burger.addEventListener('click', () => {
       
        nav.classList.toggle('nav-active');
    });
};
navMove();

function changeSelected(page){
    console.log("Currently fectched page:"+ page);
    $(`.${page}Nav`).addClass("underline");
}
// function changeColor(page){
//     console.log("grabbing page id");
// if(page == "home"){
//     $("body").css("background", "rgb(163, 193, 194" );
//     $("body").css("background-size", "300% 300%");
// }else if( page=="about"){
//    $("body").css("background", "rgb(179, 179, 219)");
//     $("body").css("background-size", "300% 300%");
// }else if(page =="browse"){

// } else if (page =="contact"){
//     $("body").css("background", "linear-gradient(-45deg, #0074a1, #ecdd07, #ad1e9a)" );
//     $("body").css("background-size", "300% 300%");
// }
// }

// function that listens to page url change and grabs the url that is updated on the page
function route(){
    let hashTag = window.location.hash;
    // grabs change int he url and searchs for html page with that  same name
    let pageID = hashTag.replace("#/","");
    console.log(pageID);
    $(`.navA`).removeClass("underline");
    if(!pageID){
        MODEL.changePage("home");
        console.log("Grabbing:" + pageID);
    } else {
        MODEL.changePage(pageID);
        console.log("Grabbing:" + pageID);
    }
    // changeColor(pageID);
    changeSelected(pageID);
}

function checkHash() {
console.log("Checking Hash Of Web Application for Change");
    $(window).on("hashchange",route);
    route();
}





$(document).ready(function(){
    console.log("Web Application loaded");
    checkHash();
    
});