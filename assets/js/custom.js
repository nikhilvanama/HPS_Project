$(function () {
  $("#header").load("../Admin/header.html");
});

$(function () {
  $("#sidebar").load("../Admin/sidebar.html");
});

jQuery(document).ready(function () {
  // Absolute Label-Input Focus 
  $('form.need-focus .form-control, form.need-focus .form-select').focusin(function () {
    $(this).siblings('label').addClass('label-transform');
  }).focusout(
    function () {
      if ($(this).val().length == 0) {
        $(this).siblings('label').removeClass('label-transform');
      }
    });
  
})

// Confittie JS

// start
const start = () => {
  setTimeout(function () {
    confetti.start()
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};
//  Stop
const stop = () => {
  setTimeout(function () {
    confetti.stop()
  }, 2000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
function addedsuccess() {
  start();
  stop();
}
// Add Employee Success Confittie
document.getElementById("submit-shipment").addEventListener("click", addedsuccess);