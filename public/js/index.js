$(document).ready(() => {
  let projects = document.getElementById("projects");
  let projectLocation = projects.getBoundingClientRect();

  $(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll > projectLocation.y / 2) {
      $(".nav").css("background", "black");
    } else {
      $(".nav").css("background", "transparent");
    }
  });
});
