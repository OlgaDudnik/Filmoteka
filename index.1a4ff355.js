!function(){var e=document.querySelector(".backdrop"),t=document.querySelector(".modal__button-close");function o(){e.classList.remove("mount"),document.body.classList.remove("overflow"),document.removeEventListener("keydown",n),document.removeEventListener("click",c),t.removeEventListener("click",o)}function n(e){"Escape"===e.code&&o()}function c(e){"BACKDROP"===e.target.nodeName&&o()}document.querySelector(".onModalBtn").addEventListener("click",(function(d){console.log(d.target.src),document.body.classList.add("overflow"),e.classList.add("mount"),document.addEventListener("keydown",n),e.addEventListener("click",c),t.addEventListener("click",o)}))}();
//# sourceMappingURL=index.1a4ff355.js.map
