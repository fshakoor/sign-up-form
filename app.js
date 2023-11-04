var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'white';
      document.getElementById('password').classList.remove('error');
      document.getElementById('confirm_password').classList.remove('error');
    }
  }