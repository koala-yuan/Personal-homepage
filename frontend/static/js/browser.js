/**
 * Auto detect user browser and show warnings
 * https://browser-update.org/
 */

/* eslint-disable no-unused-vars */
var $buoop = {
  notify: { i: 15, f: -4, o: -4, s: -2, c: -4 },
  url: '//browsehappy.com/',
  style: 'top',
  reminder: 0,
  reminderClosed: 1,
  newwindow: true,
  noclose: true,
  insecure: true,
  unsupported: true,
  // test: true,
  api: 5
}

function $buoF () {
  var e = document.createElement('script')
  e.src = '/static/js/update.js'
  document.body.appendChild(e)
}

try {
  document.addEventListener('DOMContentLoaded', $buoF, false)
} catch (e) {
  window.attachEvent('onload', $buoF)
}
