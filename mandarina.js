"use strict";

///////////////////////////////////////////////////////////
//                     GAJO SAY
///////////////////////////////////////////////////////////

/**
 * Array de botones para enviar al gajo Say dentro del objeto Message
 * @typedef {Object} btn
 * @property {String} text Texto del boton
 * @property {String} color Color del boton
 */

/**
 * Objeto mensaje que recibe el gajo Say
 * @typedef {Object} Message
 * @property {String} title Titulo del mensaje
 * @property {String} text Cuerpo del mensaje
 * @property {String} icon Presets o iconos personalizados en formato decimal
 * @property {Array<btn>} btn Configuracion de botones indexados
 */

/**
 * Muestra un mensaje cualquiera
 * @param {Message} message {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */
var sayAny = function sayAny(message) {
  return new Promise(function (resolve, reject) {
    // Establecer icono
    var icon;

    switch (message.icon) {
      case false:
        icon = "❔";
        break;

      case "ok":
        icon = "✔️";
        break;

      case "error":
        icon = "❌";
        break;

      case "warning":
        icon = "⚠️";
        break;

      case "info":
        icon = "❔";
        break;

      default:
        icon = message.icon;
        break;
    } // Desagregar objeto mensaje


    var title = message.title ? message.title : "Aviso";
    var text = message.text;
    var arrBtns = message.btn ? message.btn : [{
      text: "Ok",
      color: "notify"
    }];
    var body = "\n            <div class=\"say-content white\">\n                <div class=\"say-header\" id=\"say-title\">\n                    <h1>".concat(icon, "</h1>\n                    <h5>").concat(title, "</h5>\n                </div>\n                <div class=\"say-body\" id=\"say-text\">\n                    <p>").concat(text, "</p>\n                </div>\n                <div class=\"say-footer\" id=\"say-btns\"></div>\n            </div>\n        "); // Escribir mensaje

    var say = document.querySelector("#gajo-say");
    say.innerHTML = body;
    say.classList.add("active");
    document.querySelector("#gajo-say .say-content").classList.add("active"); // Insertar botones

    var i = 0;
    arrBtns.forEach(function (btn) {
      document.querySelector("#gajo-say #say-btns").innerHTML += "\n                <button class=\"btn ".concat(btn.color, "\" data-index=\"").concat(i++, "\">").concat(btn.text, "</button>\n            ");
    });
    document.querySelectorAll("#gajo-say button").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // Limpiar mensaje y resolver
        say.innerHTML = "";
        say.classList.remove("active");
        resolve(e.target.dataset.index);
      });
    });
  });
};
/**
 * Muestra un mensaje de conformidad
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */


var sayOk = function sayOk() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var title = obj.title ? obj.title : "Enhorabuena";
    var text = obj.text ? obj.text : "Se completó la tarea con éxito";
    var arrBtns = [{
      text: "Ok",
      color: "green"
    }];
    sayAny({
      title: title,
      text: text,
      btn: arrBtns,
      icon: "ok"
    }).then(function (index) {
      return resolve(index);
    });
  });
};
/**
 * Muestra un mensaje de error
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */


var sayError = function sayError() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var title = obj.title ? obj.title : "Error";
    var text = obj.text ? obj.text : "No se pudo completar la tarea";
    var arrBtns = [{
      text: "Ok",
      color: "red"
    }];
    sayAny({
      title: title,
      text: text,
      btn: arrBtns,
      icon: "error"
    }).then(function (index) {
      return resolve(index);
    });
  });
};
/**
 * Muestra un mensaje de advertencia
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */


var sayWarning = function sayWarning() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var title = obj.title ? obj.title : "Atención";
    var text = obj.text ? obj.text : "¿Confirma que desea proceder con los cambios?";
    var arrBtns = [{
      text: "Sí",
      color: "green"
    }, {
      text: "No",
      color: "red"
    }];
    sayAny({
      title: title,
      text: text,
      btn: arrBtns,
      icon: "warning"
    }).then(function (index) {
      return resolve(index);
    });
  });
};
/**
 * Muestra un mensaje informativo
 * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}
 * @returns {void}
 */


var sayInfo = function sayInfo() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var title = obj.title ? obj.title : "Notificación";
    var text = obj.text ? obj.text : "¿Confirma que desea proceder con los cambios?";
    var arrBtns = [{
      text: "Sí",
      color: "green"
    }, {
      text: "No",
      color: "red"
    }];
    sayAny({
      title: title,
      text: text,
      btn: arrBtns,
      icon: "info"
    }).then(function (index) {
      return resolve(index);
    });
  });
}; ///////////////////////////////////////////////////////////
//                     GAJO SLIDER
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//                     GAJO DATASET
///////////////////////////////////////////////////////////

/**
 * Activar los dataset
 */


var listenDataSet = function listenDataSet() {
  document.querySelectorAll("body *").forEach(function (item) {
    if (item.dataset.height) item.style.height += item.dataset.height;
    if (item.dataset.minHeight) item.style.minHeight += item.dataset.minHeight;
    if (item.dataset.maxHeight) item.style.maxHeight += item.dataset.maxHeight;
    if (item.dataset.width) item.style.width += item.dataset.width;
    if (item.dataset.minWidth) item.style.minWidth += item.dataset.minWidth;
    if (item.dataset.maxWidth) item.style.maxWidth += item.dataset.maxWidth;
    if (item.dataset.bg) item.style.backgroundImage += "url(" + item.dataset.bg + ")";
  });
}; ///////////////////////////////////////////////////////////
//                     GAJO ACTIVE
///////////////////////////////////////////////////////////

/**
 * Activa un componente
 * @param {String} selector Selector de etiqueta
 * @returns {void}
 */


var show = function show(selector) {
  return document.querySelector(selector).classList.add("active");
};
/**
 * Desactiva un componente
 * @param {String} selector Selector de etiqueta
 * @returns {void}
 */


var hide = function hide(selector) {
  return document.querySelector(selector).classList.remove("active");
};
/**
 * Configuraciones iniciales
 */


window.addEventListener("DOMContentLoaded", function () {
  /**
   * Propiedades básicas dataSet
   */
  listenDataSet();
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
    show('#gajo-spinner');
    setTimeout(function () {
      hide('#gajo-spinner');
    }, 3000);
  });
  document.querySelector('#testSayOk').addEventListener('click', function () {
    return sayOk();
  });
  document.querySelector('#testSayError').addEventListener('click', function () {
    return sayError();
  });
  document.querySelector('#testSayWarning').addEventListener('click', function () {
    return sayWarning();
  });
  document.querySelector('#testSayInfo').addEventListener('click', function () {
    return sayInfo();
  });
  document.querySelector('#testSayAny').addEventListener('click', function () {
    return sayAny({
      title: 'Título',
      text: 'Algún texto personalizado',
      icon: '&#8987;'
    });
  });
}