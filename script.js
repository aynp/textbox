function getStorageKey() {
  var path = window.location.pathname;

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return "savedText:" + path;
}

document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.getElementById("persistent");
  if (!textarea) return;

  var STORAGE_KEY = getStorageKey();

  var storedText = localStorage.getItem(STORAGE_KEY);
  if (storedText !== null) {
    textarea.value = storedText;
  }

  var saveTimeout;
  textarea.addEventListener("input", function () {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(function () {
      try {
        localStorage.setItem(STORAGE_KEY, textarea.value);
      } catch (e) {
        console.warn("Failed to save to localStorage:", e);
        textarea.style.backgroundColor = "red";
        setTimeout(function () {
          textarea.style.backgroundColor = "";
        }, 2000);
      }
    }, 300);
  });

  window.addEventListener("beforeunload", function () {
    clearTimeout(saveTimeout);
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });

  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "\t");
    }
  });
});

