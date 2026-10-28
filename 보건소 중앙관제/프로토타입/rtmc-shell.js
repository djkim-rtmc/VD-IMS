/**
 * VD-IMS 보건소 중앙관제 — RTMC shell (multi-page rail, tabs, modals, Chart defaults)
 */
(function () {
  "use strict";

  var ICON = {
    home: '<path d="M4 11l8-7 8 7v9H4z"/>',
    chart: '<path d="M4 19l5-6 4 3 7-9"/><path d="M4 4v16h16"/>',
    box: '<rect x="4" y="5" width="16" height="4"/><path d="M5 9v10h14V9M10 13h4"/>',
    bp: '<path d="M3 16l4-5 3 3 4-6 3 4h4"/><circle cx="18" cy="18" r="2"/>',
    bell: '<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    hosp: '<path d="M4 21V7l8-4 8 4v14z"/><path d="M12 9v6M9 12h6M9 21v-3h6v3"/>',
  };

  var NAV = [
    ["MONITORING"],
    ["통합-대시보드.html", "통합 대시보드", "chart", "dashboard"],
    ["REGION MANAGEMENT · 보건소"],
    ["VD-IMS%20관할기관%20현황.html", "관할기관 현황", "map", "jurisdiction", "NEW"],
    ["재고-관리.html", "재고 관리", "box", "stock"],
    ["이상반응-관리.html", "이상반응 관리", "bp", "adverse"],
    ["알림-조치-관리.html", "알림·조치", "bell", "alerts"],
  ];

  function renderRail(activeId) {
    var root = document.getElementById("rtmc-rail");
    if (!root) return;
    root.innerHTML = NAV.map(function (m) {
      if (m.length === 1) {
        return '<div class="r-sec">' + m[0] + "</div>";
      }
      var href = m[0];
      var label = m[1];
      var icon = m[2];
      var id = m[3];
      var badge = m[4];
      var on = id === activeId;
      return (
        '<a class="r-item ext' +
        (on ? " on" : "") +
        '" href="' +
        href +
        '"' +
        (on ? ' aria-current="page"' : "") +
        '><svg viewBox="0 0 24 24" aria-hidden="true">' +
        (ICON[icon] || ICON.chart) +
        "</svg><span>" +
        label +
        "</span>" +
        (badge ? '<span class="r-new">' + badge + "</span>" : "") +
        "</a>"
      );
    }).join("");
  }

  var page = document.body && document.body.getAttribute("data-rtmc-page");
  if (page) renderRail(page);

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

  window.RTMCChart = {
    pink: "#E62878",
    pinkSoft: "#FFE6F0",
    purple: "#7873EB",
    deepPurple: "#373291",
    caution: "#FDB02F",
    error: "#E53F3F",
    grey: "#ADB5BD",
    applyDefaults: function () {
      if (typeof Chart === "undefined") return;
      Chart.defaults.font.family =
        '"Spoqa Han Sans Neo","Noto Sans KR",sans-serif';
      Chart.defaults.color = "#6C757D";
      Chart.defaults.borderColor = "#E9ECEF";
    },
  };
  window.RTMCChart.applyDefaults();
})();
