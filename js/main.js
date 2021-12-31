// ==== Index Carousel ====
$(".slider").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 9000,
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
});


var epiv = $('.epiw .owl-carousel')
epiv.owlCarousel({
    loop:true,
    nav:false,
    autoplaySpeed: 500,
    autoplayTimeout: 1000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('.black-arr-left').click(function() {
    epiv.trigger('prev.owl.carousel', [300]);
})
$('.black-arr-right').click(function() {
    epiv.trigger('next.owl.carousel', [300]);
});


$('.fantastic-line .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:25,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 7000,
    responsive:{
        0:{
            items:1
        },
        577:{
            items:2
        },
    }
});




// ==== Global MENU ====

$(document).ready(function () {
    $(".menu-toogle").click(function () {
    $(".mobil-menu-wrapper").fadeToggle("300");
    $(".search-content").hide(100);
    $(".basket-content").hide(100);
    });

    $("ul li").on("click","i", function () {
    $(this).parent().parent().find("ul").fadeToggle("300");
    });

    // Search Bar
    $(".search img").click(function () {
        $(".search-content").slideToggle("300");
        $(".basket-content").hide(100);
        $(".mobil-menu-wrapper").hide(100);
    });

    // Basket
    $(".basket").click(function () {
        $(".basket-content").slideToggle("300");
        $(".search-content").hide(100);
        $(".mobil-menu-wrapper").hide(100);

    });

    // Menu - Slider

    let select1 = $(".select-gaming1");
    let select2 = $(".select-gaming2");
    let select3 = $(".select-gaming3");
    let selectProduct = $(".select-product");
    let menuSelect = $(".menu-select");
    let menuBg = $(".mega-menu-bgimg");
    let menuBg2 = $(".mega-menu-bgimg2");
    selectProduct.hide();
    menuBg2.hide();

    select1.click(function() {
        menuSelect.toggle("slide:right");
        selectProduct.toggle("slide:left");
        menuBg.toggle("slide:right");
    });
    select2.click(function() {
        menuSelect.toggle("slide:right");
        selectProduct.toggle("slide:left");
    });
    select3.click(function() {
        menuSelect.toggle("slide:right");
        selectProduct.toggle("slide:left");
    });

    $(".back-select").click(function() {
        selectProduct.toggle("slide:left");
        menuSelect.toggle("slide:right");
        menuBg.toggle("slide:left");
    });
        
    
    

    //Sticky Header
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".header").addClass("sticky-header");
    } else {
        $(".header").removeClass("sticky-header");
    }

    checkOffset();

    })
    

    if($(".form-btn2").hover(function() {
        $(".form-btn1").toggleClass("active");
        $(".form-btn2").toggleClass("active");
        }));


    });

    // ==== Shop Info ====


    if(document.querySelector(".o-c-property")){
        let span =  document.querySelectorAll(".o-c-property");

        for (let i = 0; i < span.length; i++) {

            span[i].addEventListener("click", function (e) {
                if (this.nextElementSibling.classList.contains("d-none")) {
                    this.nextElementSibling.classList.remove("d-none");
                }else{
                    this.nextElementSibling.classList.add("d-none");
                }
            })        
        }
    }

    // ==== Gift ====

    if(document.querySelector(".gift-genere-select-price")){
        let ggsPrice =  document.querySelector(".gift-genere-select-price");

        ggsPrice.addEventListener("change", function (e) {
            let vall = this.value;
            document.querySelector(".gift-code-price-span").innerHTML = vall + "$"
        }) 
    }

    if(document.querySelector(".gif-recipient")){
        let gRep  =  document.querySelector(".gif-recipient ");

        gRep.addEventListener("input", function (e) {
            let vall = this.value;
            document.querySelector(".gif-code-recipient").innerHTML = vall 
        }) 
    }

    if(document.querySelector(".gift-name-input")){
        let deg  =  document.querySelector(".gift-name-input");

        deg.addEventListener("input", function (e) {
            let vall = this.value;
            if (vall.length < 1) {
                vall = "YOUR NAME";
            }
            document.querySelector(".gift-code-name").innerHTML = vall 
        }) 
    }

    if(document.querySelector(".gift-message-input")){
        let deg  =  document.querySelector(".gift-message-input");

        deg.addEventListener("input", function (e) {
            let vall = this.value;
            if (vall.length < 1) {
                vall = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque omnis alias autem earum, placeat repellendus dolore?";
            }
            document.querySelector(".gift-code-message").innerHTML = vall;
        }) 
    }



        
    $(".newsbtn").click(function() {
        $(".page-wrap-cookie").fadeOut(300);
        return false;
    })

    var inputIn =  $(".send-paper");
    var ichCheck = $(".ich-check");

    inputIn.css("cursor","not-allowed");

    ichCheck.click(function() {
        inputIn.css("cursor","pointer");
    })

    $(".tooltips-close").click(function() {
        $(".tooltips").hide();
        return true;
    })

    // ==== Address Checked ====

    $(".checked-form").hide();

    $(".checked-form1 input[type='checkbox']").click(function() {
        
        if($(this).prop("checked") == true) {
            $(".checked-form").show(200);
        }

        else if($(this).prop("checked") == false)  {
            $(".checked-form").hide(200);
        }
    });

        

            // ==== Customize ====
        
    let nxt = document.querySelector(".fsh-next-btn");
    let prev = document.querySelector(".fsh-prev-btn");
    let el =  document.querySelectorAll(".customize-selector");
    let nxtCount = 0;
    nxt.addEventListener("click",function(e) {
    e.preventDefault();
    document.querySelector(".customize-selector.bg-dark").classList.remove("bg-dark");
    el[nxtCount+1].classList.add("bg-dark");
    nxtCount++
    if(nxtCount == 9) {
        nxtCount = -1;
    }
    })

    prev.addEventListener("click", function(c) {
    c.preventDefault();
    document.querySelector(".customize-selector.bg-dark").classList.remove("bg-dark");
    el[nxtCount-1].classList.add("bg-dark");
    nxtCount --
    if(nxtCount == 9) {
        nxtCount = -1;
    }


    });







        
        
    