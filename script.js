window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background="rgba(5,8,22,0.9)";

    }else{

        nav.style.background="transparent";

    }

});