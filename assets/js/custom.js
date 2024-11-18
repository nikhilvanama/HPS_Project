jQuery(document).ready(function(){

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
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };
  function addedsuccess() {
    start();
    stop();
  }
  // Add Employee Success Confittie
  document.getElementById("submit-shipment").addEventListener("click", addedsuccess);