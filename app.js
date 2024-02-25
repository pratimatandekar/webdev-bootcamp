let xhr, timeZoneList, timeZoneName;
let endPoint = "http://worldtimeapi.org/api/timezone/";
function loadTimeZones() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = processTimeZones;
  xhr.open("GET", endPoint, true);
  xhr.send(null);
}
function processTimeZones() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const timeZoneArr = JSON.parse(xhr.responseText);
    timeZoneList = document.getElementById("timezone");
    let items = "";
    timeZoneArr.forEach((t) => {
      items += `<option>${t}</option>`;
    });
    timeZoneList.innerHTML = items;
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    alert("Sorry! The request cannot be fulfilled\nReason:" + xhr.statusText);
  }
}
function showData() {
  xhr = new XMLHttpRequest();
  timeZoneName = timeZoneList.value;
  let endPoint2 = endPoint + timeZoneName;
  xhr.onreadystatechange = processDate;
  xhr.open("GET", endPoint2, true);
  xhr.send(null);
}
function processDate() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let dateTimeSpan = document.getElementById("currentdatetime");
    const obj = JSON.parse(xhr.responseText);
    console.log(obj);
    let dateString = obj.datetime;
    let globalDate = new Date(dateString);
    let str =
      globalDate.toDateString() +
      "," +
      globalDate.toLocaleTimeString("en-US", { timeZone: timeZoneName });
    dateTimeSpan.innerHTML = str;
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    alert("Sorry! The request cannot be fulfilled\nReason:" + xhr.statusText);
  }
}
window.onload = loadTimeZones;
