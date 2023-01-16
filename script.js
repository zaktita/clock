function showTime() {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let display = document.getElementById("MyClock");

    // if ( s<=9) s ="0" + s;
    s<=9? s="0" +s : s
    if ( m<=9) m ="0" + m;
    if ( h<=9) h ="0" + h;
    display.innerText = h + ":" + m +":"+  s;

    setTimeout(showTime,1000);
  }


showTime();