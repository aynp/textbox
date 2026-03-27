document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("persistent");

  const storedText = localStorage.getItem("savedText");

  if (storedText) {
    textarea.value = storedText;
  }

  let saveTimeout;
  textarea.addEventListener("input", function () {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(function () {
      try {
        localStorage.setItem("savedText", textarea.value);
      } catch (e) {
        console.warn("Failed to save to localStorage:", e);
        textarea.style.backgroundColor = "red";
        setTimeout(function () {
          textarea.style.backgroundColor = "";
        }, 2000);
      }
    }, 300);
  });

  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "\t");
    }
  });
});

