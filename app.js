let ajaxreq = new XMLHttpRequest();
let endPoint = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

function connect() {
  ajaxreq.onreadystatechange = showTime;
  ajaxreq.open("get", endPoint, true);
  ajaxreq.send(null);
}
function showTime() {
  if (ajaxreq.readyState === 4 && ajaxreq.status === 200) {
    let obj = JSON.parse(ajaxreq.responseText);
    let current = new Date(obj.datetime);
    let str = current.toDateString() + "," + current.toLocaleTimeString();
    let span = document.querySelector("#currentdatetime");
    span.innerHTML = str;
  }
}
