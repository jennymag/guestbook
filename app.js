function date_() {
  let dateObj = new Date();
  let newdate;
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;
  console.log(newdate);
  return newdate;
}
function time_() {
  let timeObj = new Date();
  let newtime;
  let hours = timeObj.getHours();
  let minutes = timeObj.getMinutes();
  let seconds = timeObj.getSeconds();

  newtime = hours + ":" + minutes + ":" + seconds;
  return newtime;
}
function create(name, message, date) {
  const el = document.createElement("div");
  el.className = "comment";
  const $name = document.createElement("p");
  $name.className = "nick";
  $name.innerText = name;
  el.appendChild($name);
  const $message = document.createElement("message");
  $message.className = "message";
  $message.innerText = message;
  el.appendChild($message);
  const $date = document.createElement("p");
  $date.className = "date";
  $date.innerText = date;
  el.appendChild($date);
  document.getElementById("commentSection").prepend(el);
}
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nick").value;
  const message = document.getElementById("message").value;
  const date = date_() + " " + time_();
  create(name, message, date);
  const previous = JSON.parse(localStorage.getItem("database") || "[]");
  let obj = { name: name, message: message, date: date };
  console.log(previous);
  previous.push(obj);
  console.log(previous);
  localStorage.setItem("database", JSON.stringify(previous));
});

const entries = JSON.parse(localStorage.getItem("database") || "[]");

entries.forEach((entry) => {
  create(entry.name, entry.message, entry.date);
});
