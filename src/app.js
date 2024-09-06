const subject = [
  "My dog",
  "The weather",
  "My alarm",
  "The 4Geeks Academy",
  "Bob Sinclair"
];
const verb = ["ate", "broke", "lost", "hid", "destroyed"];

const object = [
  "my homework",
  "the keys",
  "my phone",
  "the report",
  "the presentation"
];

const time = [
  "yesterday",
  "this morning",
  "last night",
  "a few minutes ago",
  "right before the meeting"
];

function generateExcuse() {
  const randomSubject = Math.floor(Math.random() * subject.length);
  const randomVerb = Math.floor(Math.random() * verb.length);
  const randomObject = Math.floor(Math.random() * object.length);
  const randomTime = Math.floor(Math.random() * time.length);

  return (
    subject[randomSubject] +
    ` ` +
    verb[randomVerb] +
    ` ` +
    object[randomObject] +
    ` ` +
    time[randomTime]
  );
}

function displayExcuse() {
  document.getElementById("excuse").textContent = generateExcuse();
}

function generateAndReload() {
  displayExcuse();
  window.location.reload();
}

window.onload = function() {
  displayExcuse();
};
