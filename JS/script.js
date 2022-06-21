$(document).ready(function () {
  $(".eduyear-mobile>.ed-yearnum--mobile").click(function () {
    $(this).next("ul").toggleClass("hide");
    var submenu = $(this).next("ul");
    if (submenu.is(":visible")) {
      submenu.slideUp();
      $(this).removeClass("pinkborder");
      $(this).children("ion-icon").css("transform", "rotate(0deg)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    } else {
      submenu.slideDown();
      $(this).addClass("pinkborder");
      $(this).children("ion-icon").css("transform", "rotate(-180deg)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    }
  });
});
