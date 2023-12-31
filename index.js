"use strict";
/**
 * @type {HTMLFormElement}
 */
if (localStorage.getItem('normaltab') == "true") {
  if (window==window.top) {
          const popup = open("about:blank", "_blank")
          const doc = popup.document
          const iframe = doc.createElement("iframe")
          const style = iframe.style
          const link = doc.createElement("link")
  
          doc.title = "My Drive - Google Drive"
          link.rel = "icon";
          link.href = "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png";
          iframe.src = location.href
          style.position = "fixed"
          style.top = style.bottom = style.left = style.right = 0
          style.border = style.outline = "none"
          style.width = style.height = "100%"
          doc.body.appendChild(iframe)
          window.location.replace('https://google.com')
  }
}
const swAllowedHostnames = ["localhost", "127.0.0.1"];
async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Service workers cannot be registered without https.");

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  // Unregister all service workers
  const registrations = await navigator.serviceWorker.getRegistrations();
  for (let registration of registrations) {
    await registration.unregister();
  }

  // Register the new service worker
  await navigator.serviceWorker.register("/sw.js", {
    scope: __uv$config.prefix,
  });
}
registerSW();
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const ab = localStorage.getItem("abcloak") || false
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, searchEngine.value);
  if (ab == "true" && window==window.top) {
          
          const popup = open("about:blank", "_blank")
          const doc = popup.document
          const iframe = doc.createElement("iframe")
          const style = iframe.style
          const link = doc.createElement("link")
  
          doc.title = "My Drive - Google Drive"
          link.rel = "icon";
          link.href = "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png";
          iframe.src = location.origin + __uv$config.prefix + __uv$config.encodeUrl(url);
          style.position = "fixed"
          style.top = style.bottom = style.left = style.right = 0
          style.border = style.outline = "none"
          style.width = style.height = "100%"
  
          doc.body.appendChild(iframe)
  } else {
    location.href = location.origin + __uv$config.prefix + __uv$config.encodeUrl(url);
  }
});
window.onload = function() {
  // get the stored search engine from localStorage, default to 'google' if none
  const searchEngine = localStorage.getItem('searchEngine') || 'https://google.com/search?q=%s';
  // set the value of the hidden input
  document.getElementById('uv-search-engine').value = searchEngine;
};