! function (t) {
    "use strict";
    t(window).on("load", function () {
        t("#loading").delay("500").fadeOut(2e3)
    }), t(document).on("ready", function () {
        t(document).on("click", ".side-menu-wrap .side-menu-ul .sidenav__item a.mobile-nav", function () {
            return t(this).closest(".sidenav__item").siblings().removeClass("active").find(".side-sub-menu").slideUp(200), t(this).closest(".sidenav__item").toggleClass("active").find(".side-sub-menu").slideToggle(200), !1
        }), t(document).on("click", "#scroll-top", function () {
            t("html, body").animate({
                scrollTop: 0
            }, 1e3)
        });
        var e = t("#scroll-top");
        t(window).on("scroll", function () {
            0 < t(window).scrollTop() ? t(".header-menu-area").addClass("header-fixed") : t(".header-menu-area").removeClass("header-fixed"), 300 <= t(this).scrollTop() ? e.show() : e.hide()
        }), t(document).on("click", ".logo-right-button .side-menu-open", function () {
            t(".side-nav-container").addClass("active")
        }), t(document).on("click", ".humburger-menu .side-menu-close", function () {
            t(".side-nav-container").removeClass("active")
        }), t(".counter").counterUp({
            delay: 50,
            time: 2e3
        }), t(".video-play-btn").magnificPopup({
            type: "video"
        }), t(".testimonial-carousel").owlCarousel({
            loop: !0,
            items: 1,
            nav: !0,
            dots: !0,
            smartSpeed: 500,
            autoplay: !1,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"]
        }), t(".testimonial-carousel-2").owlCarousel({
            loop: !0,
            items: 3,
            nav: !1,
            dots: !1,
            smartSpeed: 500,
            autoplay: !1,
            margin: 30,
            responsive: {
                320: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".testimonial-carousel-3").owlCarousel({
            loop: !0,
            items: 5,
            nav: !1,
            dots: !0,
            smartSpeed: 500,
            autoplay: !1,
            margin: 30,
            autoHeight: !0,
            responsive: {
                320: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1025: {
                    items: 4
                },
                1440: {
                    items: 5
                }
            }
        }), t(".testimonial-carousel-4").owlCarousel({
            loop: !0,
            items: 1,
            nav: !1,
            dots: !0,
            smartSpeed: 800,
            autoplay: !1,
            thumbs: !0,
            animateIn: "flipInX"
        }), t(".content-carousel").owlCarousel({
            loop: !0,
            items: 3,
            nav: !1,
            dots: !0,
            smartSpeed: 500,
            autoplay: !0,
            autoHeight: !0,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".content-carousel2").owlCarousel({
            loop: !0,
            items: 3,
            nav: !1,
            dots: !0,
            smartSpeed: 900,
            center: !0,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".content-carousel3").owlCarousel({
            loop: !0,
            items: 3,
            nav: !0,
            dots: !1,
            smartSpeed: 500,
            autoplay: !0,
            margin: 30,
            autoHeight: !0,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".content-carousel4").owlCarousel({
            loop: !0,
            items: 2,
            nav: !1,
            dots: !0,
            smartSpeed: 500,
            autoplay: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        }), t(".gallery-carousel").owlCarousel({
            loop: !0,
            items: 1,
            nav: !0,
            dots: !0,
            smartSpeed: 700,
            autoplay: !0,
            dotsData: !0,
            navText: ['<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>']
        }), t(".video-gallery-carousel").owlCarousel({
            loop: !0,
            items: 2,
            margin: 30,
            nav: !0,
            dots: !1,
            smartSpeed: 700,
            autoplay: !0,
            navText: ['<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        }), t(".video-gallery-carousel2").owlCarousel({
            loop: !0,
            items: 1,
            margin: 30,
            nav: !0,
            dots: !1,
            smartSpeed: 700,
            autoplay: !0,
            navText: ['<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>']
        }), t(".team-carousel").owlCarousel({
            loop: !0,
            items: 3,
            nav: !0,
            dots: !0,
            smartSpeed: 500,
            autoplay: !0,
            margin: 30,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".portfolio-slider").owlCarousel({
            loop: !0,
            items: 1,
            nav: !1,
            dots: !0,
            smartSpeed: 500,
            autoplay: !0
        }), t(".client-logo").owlCarousel({
            loop: !0,
            items: 5,
            nav: !1,
            dots: !1,
            smartSpeed: 700,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                425: {
                    items: 2
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        }), t(".homepage-slide1").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            loop: !0,
            smartSpeed: 1e3,
            autoplay: 5e3,
            animateOut: "zoomOutRight",
            animateIn: "fadeIn",
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"]
        }), t(".homepage-slide2").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            loop: !0,
            smartSpeed: 5e3,
            autoplay: 5e3,
            animateOut: "slideOutDown",
            animateIn: "fadeIn",
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"]
        }), t(".single-portfolio-carousel").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            loop: !0,
            smartSpeed: 900,
            autoplay: !0,
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"]
        }), t(".discount-carousel").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            loop: !0,
            smartSpeed: 900,
            autoplay: !0,
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"]
        }), t(document).on("click", ".accordion__title", function () {
            return t(this).closest(".accordion-panel").siblings().removeClass("active").find(".accordion__content").slideUp(200), t(this).closest(".accordion-panel").toggleClass("active").find(".accordion__content").slideToggle(200), !1
        }), t("[data-fancybox]").fancybox({
            buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs", "close"]
        }), t.fancybox.defaults.animationEffect = "zoom", t("#map").length && initMap("map", 40.717499, -74.044113), t('[data-toggle="tooltip"]').tooltip(), t('[data-toggle="popover"]').popover(), t(".circlechart").circlechart(), t(document).on("click", ".portfolio-filter li", function () {
            var e = t(this).attr("data-filter");
            t(".portfolio-list").isotope({
                filter: e
            }), t(".portfolio-filter li").removeClass("active"), t(this).addClass("active")
        }), t(".portfolio-list").isotope({
            itemSelector: ".single-portfolio-item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".single-portfolio-item",
                horizontalOrder: !0
            }
        }), t('input[name="daterange"]').daterangepicker({
            opens: "left",
            singleDatePicker: !0
        }), t(".contact-tilt").tilt({
            scale: 1.1
        }), t(".blog-masonry").masonry({}), t(document).on("click", ".input-number-increment", function () {
            var e = t(this).parents(".input-number-group").find(".input-number"),
                a = parseInt(e.val(), 10);
            e.val(a + 1)
        }), t(document).on("click", ".input-number-decrement", function () {
            var e = t(this).parents(".input-number-group").find(".input-number"),
                a = parseInt(e.val(), 10);
            e.val(a - 1)
        })
    })
}(jQuery);