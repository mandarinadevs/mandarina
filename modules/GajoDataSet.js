"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenDataSet = void 0;

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
};

exports.listenDataSet = listenDataSet;