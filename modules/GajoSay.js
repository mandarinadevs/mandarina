"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayWarning = exports.sayOk = exports.sayInfo = exports.sayError = exports.sayAny = void 0;

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


exports.sayAny = sayAny;

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


exports.sayOk = sayOk;

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


exports.sayError = sayError;

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


exports.sayWarning = sayWarning;

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
};

exports.sayInfo = sayInfo;