/**
 * Activa un componente
 * @param {String} selector Selector de etiqueta
 * @returns {void}
 */
 export const show = (selector) => document.querySelector(selector).classList.add("active")

 /**
  * Desactiva un componente
  * @param {String} selector Selector de etiqueta
  * @returns {void}
  */
 export const hide = (selector) => document.querySelector(selector).classList.remove("active")