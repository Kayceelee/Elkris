function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sesaalolu@gmail.com",
      Password: "",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

  document.addEventListener('submit',function(){
    document.querySelector('#btn_signin').disable = true;
    document.querySelector('#btn_signin').style.background = 'grey';
  })