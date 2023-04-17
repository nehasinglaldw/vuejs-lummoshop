(function ($) {
  "use strict";
  var LUMMO = {
    init: function () {
      this.windowLoad();
      this.scrollTo();
      this.tab();
      this.youtubeEmbedd();
      this.zoomLink();
      this.countDown();
      this.registerModal();
      this.shopScripts();
      this.ebook();
      this.themeClick();
    },
    settings: {
      scrollClassTrigger: 200,
      scrollBarWidth: 0,
    },

    windowLoad: function () {
      $(window).on("load", function () {
        LUMMO.testimony();
        LUMMO.slider();
        $(".easy-notification-bar-button, .easy-notification-bar-message").append($(".easy-notification-bar__close"));
        if ($(".easy-notification-bar").length != 0) {
          if ($(".easy-notification-bar--hidden").length != 0) {
            $("html").addClass("has-announcement-bar--hidden");
          } else {
            $("html").addClass("has-announcement-bar");
          }
        }
      });
    },

    scrollTo: function () {
      $(window).on("load scroll", function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
          $("#scrollUp").addClass("scrolled");
        } else {
          $("#scrollUp").removeClass("scrolled");
        }
      });
    },

    tab: function () {
      $(".tabs-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $(".category-prev"),
        nextArrow: $(".category-next"),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
      $(".pricing-table-tabs .tabs-nav").slick("unslick");
      $(".tabs-main-nav .tabs-nav li:first-child").addClass("active");
      // $(".pricing-table-tabs .tabs-nav li:last-child").addClass("active");

      $(".blog-listing .tab-content").hide();
      $(".blog-listing .tab-content:first").show();
      // $(".price-table-container .tab-content:last-child").show();

      $("body").on("click", ".tabs-nav li", function () {
        $(".tabs-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
      });
    },

    slider: function () {
      $(".feature-carousel .custom-carousel").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      if ($(".events-carousel .event-item").length != 0) {
        $(".featured-events").addClass("has-events");
        $(".events-carousel").slick({
          autoplay: true,
          fade: true,
          dots: true,
          arrows: false,
          infinite: true,
          autoplaySpeed: 5000,
          adaptiveHeight: true,
        });
      } else {
        $(".featured-events").addClass("no-events");
      }

      if ($(".tips-slider").length != 0) {
        $(".tips-slider").slick({
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          autoplaySpeed: 5000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    },

    testimony: function () {
      var testimonySlider = $(".testimonial-slider .custom-carousel");

      testimonySlider
        .on("init", function (event, slick) {
          $(".review-counter").text(parseInt(slick.currentSlide + 1) + " / " + slick.slideCount);
        })
        .on("afterChange", function (event, slick, currentSlide) {
          $(".review-counter").text(parseInt(slick.currentSlide + 1) + " / " + slick.slideCount);
        });

      testimonySlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: $(".review-nav-prev"),
        nextArrow: $(".review-nav-next"),
        responsive: [
          {
            breakpoint: 640,
            settings: {
              centerMode: "center",
            },
          },
        ],
      });
    },

    youtubeEmbedd: function () {
      $('.lightbox-content [src*="you"]').each(function () {
        var url = $(this).attr("src") ? $(this).attr("src") : $(this).attr("href");
        var matchId = url.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);
        if (matchId) {
          $("#youtube").attr("src", "https://www.youtube.com/embed/" + matchId[1]);
        }
      });
    },

    zoomLink: function (event) {
      $(".btn-zoom-link").click(function () {
        var url = $(this).attr("data-url");
        window.open(url, "_blank").focus();
      });
    },

    countDown: function () {
      // Set the date we're counting down to
      if ($("#count_timer").length > 0) {
        var count_timer = document.getElementById("count_timer");
        var count_timer_text = count_timer.textContent || count_timer.innerText;
        var countDownDate = new Date(count_timer_text).getTime();
        setTimeout(() => {
          document.getElementById("counter").classList.add("initialized");
        }, 1000);
        // Update the count down every 1 second
        var x = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo"
          document.getElementById("days").innerHTML = days;
          document.getElementById("hours").innerHTML = hours;
          document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;
          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(x);
            // document.getElementById("counter").innerHTML =
            //   "The event has ended";
            document.getElementById("counter").innerHTML = "";
          }
        }, 1000);
      }
    },

    registerModal: function () {
      $("[data-toggle=popover]").popover();
      $(".register-modal-toggle").on("click", function (e) {
        e.preventDefault();
        $(".user-register-modal").toggleClass("is-visible");
        $("body").toggleClass("modal-open");
      });
    },

    shopScripts: function () {
      $(".link-expand").click(function (e) {
        e.preventDefault();
        $(".detailed-tracking").toggle("fast", function () {
          $(this).toggleClass("expanded");
        });
      });
    },

    ebook: function () {
      $(".single-post-txt .wpcf7").on("wpcf7mailsent", function (event) {
        var file = $("#ebook_file").val();
        var base_url = window.location.origin;
        window.open(base_url + "/wp-content/themes/nextapp-child/ebook/" + file, "_blank");
      });
    },

    themeClick: function () {
      $(".themes-collection-section .btn-white").on("click", function (e) {
        e.preventDefault();
        var iframelink = $(this).attr("href");
        $("body").toggleClass("iframe-opened");
        $(".iframe-wrapper").toggleClass("opened");
        $("#themePreview").attr("src", iframelink);
      });

      $(".iframe-wrapper button").on("click", function (e) {
        $("body").removeClass("iframe-opened");
        $(".iframe-wrapper").removeClass("opened");
        $("#themePreview").attr("src", "");
      });
    },
  };
  LUMMO.init();
})(jQuery);

function revealVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + "?&autoplay=1"; // adding autoplay to the URL
  document.getElementById(div).style.display = "block";
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = "none";
}

jQuery.fn.equalize = function () {
  var max_height = 0;
  jQuery(this).each(function () {
    max_height = Math.max(jQuery(this).height(), max_height);
  });
  jQuery(this).each(function () {
    jQuery(this).height(max_height);
  });
};

if (jQuery(".pricing-list").length) {
  const mainNode = document.querySelector("html");
  function callback(mutationsList, observer) {
    console.log("Mutations:", mutationsList);
    console.log("Observer:", observer);
    mutationsList.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        setTimeout(function () {
          var list_length = jQuery(".feature-list .pricing-list li").length;
          for (var i = 0; i <= list_length; i++) {
            jQuery(".list-row-" + i).equalize();
          }
        }, 1500);
      }
    });
  }
  const mutationObserver = new MutationObserver(callback);
  mutationObserver.observe(mainNode, { attributes: true });
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
