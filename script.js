document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("persistent");

  const storedText = localStorage.getItem("savedText");

  if (storedText) {
    textarea.value = storedText;
  }

  textarea.addEventListener("input", function () {
    const currentText = textarea.value;
    localStorage.setItem("savedText", currentText);
  });
});
