function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');



    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 10);

$(function(){


  const userEmail = document.getElementsByName('from')[0];
  const subject = document.getElementsByName('subject')[0];
  const message = document.getElementsByName('message')[0];
  const recaptcha = document.querySelector(".g-recaptcha");
  const formAlert = document.querySelector(".emailFormAlert");
  const contactForm = $('#contact');

  function toggleContactForm(state) {
    if (typeof state !== 'boolean') return TypeError('State must be a boolean');

    if (state === true) {
      contactForm.fadeIn();
    }
    else {
      contactForm.fadeOut();
      userEmail.value='';
      subject.value='';
      message.value='';
      formAlert.innerHTML='';
      grecaptcha.reset();
    }
  }

  const closeContactBtn = $('#close-contact-btn');
  const openContactBtn = $('#open-contact-btn');

  openContactBtn.click(function () {
    toggleContactForm(true);
  });

  closeContactBtn.click(function () {
    toggleContactForm(false);
  });
});


