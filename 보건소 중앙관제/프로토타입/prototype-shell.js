/** 공통: 탭·모달·서브nav (프로토타입) */
(function () {
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var buttons = root.querySelectorAll(".tab-btn");
    var panels = root.querySelectorAll(".tab-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-tab");
        buttons.forEach(function (b) {
          b.classList.toggle("active", b === btn);
        });
        panels.forEach(function (p) {
          p.classList.toggle("active", p.id === id);
        });
        document.dispatchEvent(
          new CustomEvent("prototype-tab-shown", { detail: { id: id } }),
        );
      });
    });
  });

  document.querySelectorAll("[data-open-modal]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var sel = el.getAttribute("data-open-modal");
      var overlay = document.querySelector(sel);
      if (overlay) overlay.classList.add("open");
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () {
      var overlay = el.closest(".modal-overlay");
      if (overlay) overlay.classList.remove("open");
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  });
})();
