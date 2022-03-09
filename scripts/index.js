$(document).ready(function () {
  $(".navbar-nav .nav-item").click(function () {
    $(".active-nav-item").removeClass("active-nav-item");
    $(this).addClass("active-nav-item");
  });

  $(window).scroll(function () {
    var distance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $(".navbar-nav .nav-item").removeClass("active-nav-item");
        $(".navbar-nav .nav-item").eq(i).addClass("active-nav-item");
      }
    });
    if (this.scrollY > 10) {
      $(".navbar").addClass("navbar-fixed");
    } else {
      $(".navbar").removeClass("navbar-fixed");
    }
  });
  $(".stars .iconify").click(function () {
    $(".stars .iconify").removeClass("fill-star");
    $(".stars .iconify").each((index, item) => {
      if (index <= $(this).index()) {
        $(item).addClass("fill-star");
      }
    });
  });
  $(".navbar-nav .nav-item").click(function () {
    if ($(".collapse").hasClass("show")) {
      $(".collapse").removeClass("show");
    }
  });
});
