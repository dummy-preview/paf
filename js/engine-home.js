$(document).ready(function() {
    // s preload
    if ($(window).load(function() {
            $("#preloader").delay(3500).fadeOut("slow", function() {
                $(this).remove()
            })
        }))

    // click target nav
        $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
    // back to top
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // 
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close5").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close6").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close7").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close8").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }
});

// e scroll anchor
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('.nav-menu a.active1').removeClass('active1');
            $('.nav-menu a').eq(i).addClass('active1');
        }
    });
}).scroll();

// play youtube iframe
tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var player, firstScriptTag = document.getElementsByTagName("script")[0];

function onYouTubeIframeAPIReady() { player = new YT.Player("player", { width: "100%", videoId: "CHYRPWjVQ4I", playerVars: { autoplay: 1, playsinline: 1, playlist: "CHYRPWjVQ4I", loop: 1 }, events: { onReady: onPlayerReady } }) }

function onPlayerReady(e) { e.target.mute(), e.target.playVideo() }
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});
// e parallax


// modal post video
$(document).ready(function() {
    autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
    var triggerOpen = $("body").find('[data-tagVideo]');
    triggerOpen.click(function() {
        var theModal = $(this).data("bs-target"),
            videoSRC = $(this).attr("data-tagVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.modal-close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $(theModal + ' .modal-overlay').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });

}

$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

// paralax
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, {
        y: movement,
        ease: "none"
    }, 0);
});

var b = document.getElementsByTagName("BODY")[0];
b.addEventListener("mousemove", function(event) {
    parallaxed(event);
});

function parallaxed(e) {
    var amountMovedX = (e.clientX * -0.3 / 8);
    var amountMovedY = (e.clientY * -0.3 / 8);
    var x = document.getElementsByClassName("parallaxed");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
}

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    on: {
        init: function() {},
        orientationchange: function() {},
        beforeResize: function() {
            let vw = window.innerWidth;
            if (vw > 500) {
                mySwiper.params.slidesPerView = 2;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 2;
            } else {
                mySwiper.params.slidesPerView = 3;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 3;
            }
            mySwiper.init();
        }
    }
});
const mySwiper1 = new Swiper('.try', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    on: {
        init: function() {},
        orientationchange: function() {},
        beforeResize: function() {
            let vw = window.innerWidth;
            if (vw > 500) {
                mySwiper.params.slidesPerView = 2;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 2;
            } else {
                mySwiper.params.slidesPerView = 2;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 2;
            }
            mySwiper.init();
        }
    }
});