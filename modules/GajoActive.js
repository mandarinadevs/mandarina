"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = exports.hide = void 0;

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


exports.show = show;

var hide = function hide(selector) {
  return document.querySelector(selector).classList.remove("active");
};

exports.hide = hide;