setInterval(function() {
  var d = new Date();
  var hr = d.getHours();
  var ms = d.getMinutes();
  var se = d.getSeconds();

  if (hr <= 9) {
    hours.innerHTML = '0' + hr;
  } else {
    hours.innerHTML = hr;
  }

  if (ms <= 9) {
    minutes.innerHTML = '0' + ms;
  } else {
    minutes.innerHTML = ms;
  }

  if (se <= 9) {
    seconds.innerHTML = '0' + se;
  } else {
    seconds.innerHTML = se;
  }

  if (se >= 0 && se <= 15) {
    document.getElementById('meme1').style.display = 'block';
    document.getElementById('meme2').style.display = 'none';
    document.getElementById('meme4').style.display = 'none';
  }
  if (se >= 16 && se <= 30) {
    document.getElementById('meme2').style.display = 'block';
    document.getElementById('meme1').style.display = 'none';
  }
  if (se >= 31 && se <= 45) {
    document.getElementById('meme3').style.display = 'block';
    document.getElementById('meme2').style.display = 'none';
  }
  if (se >= 46 && se <= 60) {
    document.getElementById('meme4').style.display = 'block';
    document.getElementById('meme3').style.display = 'none';
  }

}, 1000);
