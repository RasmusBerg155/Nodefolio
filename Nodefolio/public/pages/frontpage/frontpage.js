$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        };
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");    
        }else{
            $('.scroll-up-btn').removeClass("show");  
        };
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });

    // typing animation script
    let typed = new Typed(".typing", {
        strings: ["Developer", "Software engineer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed2 = new Typed(".typing-2", {
        strings: ["Developer", "Software engineer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
 
     // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                 items: 1,
                 nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }
    });
 });

 function sendMessage() {
    fetch("/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value
        })
    }).then(res => {
        if (res.status == 200) {
            // doesnt work at the moment, goes straight to frontpage without delay or message for some reason
            toastr.success("Thank you for you email!");
            setTimeout(() => location.href= "/", 3000);
        }
        else {
            console.log("Error:", res.status);
        }
    });
};

document.getElementById("contact-button").addEventListener("click", sendMessage);