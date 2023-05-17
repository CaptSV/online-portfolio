// used to fix offcanvass menu when selecting links to scroll to proper section and stay on section
// jQuery .ready() waits for your document to fully load before executed JS file
$(document).ready(function () {
  let myOffcanvas = $("#offcanvasExit");
  let bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

  // adds the click listener to the offcanvas navbar toggler button
  $("#offcanvasMenu").on("click", function (e) {
    e.preventDefault();
    // prevents bubbling up to the parent element and triggering additional event handlers on parent elements
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

// Back to Top Arrow add fa-beat-fade class
$(".arrowup").hover(function () {
  $(this).toggleClass("fa-beat-fade");
});

// Back to top icon reveal when scroll from top
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    $(".arrowup").addClass("showbutton");
  } else {
    $(".arrowup").removeClass("showbutton");
  }
});

// ScrollReveal JSs

ScrollReveal().reveal(".reveal", { delay: 200 });

// reveal socials on load
$(function () {
  $(".socials").addClass("socialsshow");
});

$(function () {
  $(".navbar").addClass("navbarshow");
});
