(function () {
  "use strict";

  var storageKey = "deepak-kandel-theme";
  var root = document.documentElement;
  var theme = "navy";

  function validTheme(value) {
    return value === "navy" || value === "light";
  }

  try {
    var saved = window.localStorage.getItem(storageKey);
    if (validTheme(saved)) theme = saved;
  } catch (error) {
    // The toggle still works when storage is unavailable.
  }

  function applyTheme(next, persist) {
    theme = next;
    root.setAttribute("data-theme", theme);

    var button = document.getElementById("theme-toggle");
    if (button) {
      var target = theme === "navy" ? "light" : "navy";
      var label = "Switch to " + target + " theme (currently " + theme + ")";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelector("[data-theme-toggle-label]").textContent = target === "light" ? "Light" : "Navy";
      button.hidden = false;
      // Recalculate the responsive menu after the control or label changes width.
      window.dispatchEvent(new Event("resize"));
    }

    var browserColor = document.querySelector('meta[name="theme-color"]');
    if (browserColor) browserColor.setAttribute("content", theme === "navy" ? "#0b172a" : "#ffffff");

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Browsing preferences do not depend on persistent storage.
      }
    }
  }

  applyTheme(theme, false);

  function bindToggle() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      applyTheme(theme === "navy" ? "light" : "navy", true);
    });
    applyTheme(theme, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggle, { once: true });
  } else {
    bindToggle();
  }

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
      applyTheme(validTheme(event.newValue) ? event.newValue : "navy", false);
    }
  });
}());
