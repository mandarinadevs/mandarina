"use strict";

var _GajoActive = require("./modules/GajoActive");

var _GajoDataSet = require("./modules/GajoDataSet");

var _GajoSay = require("./modules/GajoSay");

/**
 * Importar los scripts de los gajos de la mandarina
 */

/**
 * Configuraciones iniciales
 */
window.addEventListener("DOMContentLoaded", function () {
  /**
   * Propiedades básicas dataSet
   */
  (0, _GajoDataSet.listenDataSet)();
  /**
   * Iniciar Gajo Say
   */

  var say = document.createElement("div");
  say.setAttribute("class", "say");
  say.setAttribute("id", "gajo-say");
  document.querySelector("body").appendChild(say);
  /**
   * Iniciar Gajo Spinner
   */

  var spinner = document.createElement("div");
  var content = document.createElement("div");
  var mask1 = document.createElement("div");
  var mask2 = document.createElement("div");
  spinner.setAttribute("class", "spinner");
  spinner.setAttribute("id", "gajo-spinner");
  content.setAttribute("class", "spinner-content");
  mask1.setAttribute("class", "mask1");
  mask2.setAttribute("class", "mask2");
  spinner.appendChild(content);
  spinner.appendChild(mask1);
  spinner.appendChild(mask2);
  document.querySelector("body").appendChild(spinner);
  /**
   * Iniciar Gajo Cabinet
   */

  document.querySelectorAll(".cabinet").forEach(function (cabinet) {
    var id = "#" + cabinet.id; //#DRAWER1

    document.querySelectorAll(".cabinet-open").forEach(function (btn) {
      if (btn.dataset.target == id) {
        btn.addEventListener("click", function () {
          cabinet.classList.toggle("active");
          btn.classList.toggle("active");
        });
      }
    });
  });
  /**
   * Iniciar Gajo Modal
   */

  document.querySelectorAll(".modal").forEach(function (modal) {
    var id = "#" + modal.id; // #MODAL1
    // Abrir Modal

    document.querySelectorAll(".modal-open").forEach(function (btn) {
      if (btn.dataset.target == id) {
        btn.addEventListener("click", function () {
          document.querySelector(id).classList.add("active");
        });
      }
    }); // Cerrar Modal

    document.querySelectorAll(id + " .modal-close").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelector(id).classList.remove("active");
      });
    });
  });
  /**
   * Iniciar Gajo Navbar
   */

  document.querySelectorAll(".navbar .menu").forEach(function (menu) {
    var id = "#" + menu.id; // #MENU1

    document.querySelectorAll(".menu-open").forEach(function (btn) {
      if (btn.dataset.target == id) {
        btn.addEventListener("click", function () {
          menu.classList.toggle("active");
          btn.classList.toggle("active");
        });
      }
    });
  });
  /**
   * Iniciar Gajo Tab
   */

  document.querySelectorAll(".tab").forEach(function (tab) {
    var id = "#" + tab.id;
    document.querySelectorAll(id + ">.tab-header>.tab-open").forEach(function (tabOpen) {
      if (tabOpen.classList.contains("disabled")) {
        return;
      }

      tabOpen.addEventListener("click", function (e) {
        // Desactivar todos los Tabs
        document.querySelectorAll(id + ">.tab-header>.tab-open, " + id + ">.tab-body>.tab-content").forEach(function (elem) {
          elem.classList.remove("active");
        }); // Activar Tab

        tabOpen.classList.add("active");
        document.querySelector(id + ">.tab-body>.tab-content" + tabOpen.dataset.target).classList.add("active");
      });
    });
  });
  /**
   * Ready
   */

  console.log("Mandarina is ready...\nCheck the documentation: https://mandarinadevs.github.io/mandarina/");
});
/**
 * Test de Cheatsheet
 */

var testDocs = document.querySelector('#mandarina-test-docs');

if (testDocs) {
  document.querySelector('#testSpinner').addEventListener('click', function () {
    (0, _GajoActive.show)('#gajo-spinner');
    setTimeout(function () {
      (0, _GajoActive.hide)('#gajo-spinner');
    }, 3000);
  });
  document.querySelector('#testSayOk').addEventListener('click', function () {
    return (0, _GajoSay.sayOk)();
  });
  document.querySelector('#testSayError').addEventListener('click', function () {
    return (0, _GajoSay.sayError)();
  });
  document.querySelector('#testSayWarning').addEventListener('click', function () {
    return (0, _GajoSay.sayWarning)();
  });
  document.querySelector('#testSayInfo').addEventListener('click', function () {
    return (0, _GajoSay.sayInfo)();
  });
  document.querySelector('#testSayAny').addEventListener('click', function () {
    return (0, _GajoSay.sayAny)({
      title: 'Título',
      text: 'Algún texto personalizado',
      icon: '&#8987;'
    });
  });
}