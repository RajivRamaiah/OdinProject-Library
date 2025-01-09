/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Contact Us';\n\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n    contactInfo.innerHTML = `\n        <div class=\"phone\">\n            <h2>Phone</h2>\n            <p>(555) 123-4567</p>\n        </div>\n        <div class=\"email\">\n            <h2>Email</h2>\n            <p>info@bellasitalian.com</p>\n        </div>\n        <div class=\"address\">\n            <h2>Address</h2>\n            <p>123 Italian Street</p>\n            <p>Foodtown, FT 12345</p>\n        </div>\n    `;\n\n    const form = document.createElement('form');\n    form.classList.add('contact-form');\n    form.innerHTML = `\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" name=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" id=\"email\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"message\">Message:</label>\n            <textarea id=\"message\" name=\"message\" required></textarea>\n        </div>\n        <button type=\"submit\">Send Message</button>\n    `;\n\n    contact.appendChild(title);\n    contact.appendChild(contactInfo);\n    contact.appendChild(form);\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5LW9kaW4tcHJvamVjdC8uL3NyYy9jb250YWN0LmpzP2Q1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBob25lXCI+XG4gICAgICAgICAgICA8aDI+UGhvbmU8L2gyPlxuICAgICAgICAgICAgPHA+KDU1NSkgMTIzLTQ1Njc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWxcIj5cbiAgICAgICAgICAgIDxoMj5FbWFpbDwvaDI+XG4gICAgICAgICAgICA8cD5pbmZvQGJlbGxhc2l0YWxpYW4uY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgIDxoMj5BZGRyZXNzPC9oMj5cbiAgICAgICAgICAgIDxwPjEyMyBJdGFsaWFuIFN0cmVldDwvcD5cbiAgICAgICAgICAgIDxwPkZvb2R0b3duLCBGVCAxMjM0NTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const restaurantName = document.createElement('h1');\n    restaurantName.textContent = \"Bella's Italian Kitchen\";\n\n    const image = document.createElement('img');\n    image.src = 'restaurant-image.jpg';\n    image.alt = 'Restaurant interior';\n\n    const description = document.createElement('p');\n    description.textContent = 'Welcome to Bella\\'s, where authentic Italian cuisine meets modern elegance. Est. 1995.';\n\n    const hours = document.createElement('div');\n    hours.classList.add('hours');\n    hours.innerHTML = `\n        <h2>Hours</h2>\n        <p>Monday: 11:00 - 22:00</p>\n        <p>Tuesday: 11:00 - 22:00</p>\n        <p>Wednesday: 11:00 - 22:00</p>\n        <p>Thursday: 11:00 - 22:00</p>\n        <p>Friday: 11:00 - 23:00</p>\n        <p>Saturday: 11:00 - 23:00</p>\n        <p>Sunday: 12:00 - 21:00</p>\n    `;\n\n    const location = document.createElement('div');\n    location.classList.add('location');\n    location.innerHTML = `\n        <h2>Location</h2>\n        <p>123 Italian Street</p>\n        <p>Foodtown, FT 12345</p>\n    `;\n\n    home.appendChild(restaurantName);\n    home.appendChild(image);\n    home.appendChild(description);\n    home.appendChild(hours);\n    home.appendChild(location);\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS1vZGluLXByb2plY3QvLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJCZWxsYSdzIEl0YWxpYW4gS2l0Y2hlblwiO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSAncmVzdGF1cmFudC1pbWFnZS5qcGcnO1xuICAgIGltYWdlLmFsdCA9ICdSZXN0YXVyYW50IGludGVyaW9yJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gQmVsbGFcXCdzLCB3aGVyZSBhdXRoZW50aWMgSXRhbGlhbiBjdWlzaW5lIG1lZXRzIG1vZGVybiBlbGVnYW5jZS4gRXN0LiAxOTk1Lic7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+SG91cnM8L2gyPlxuICAgICAgICA8cD5Nb25kYXk6IDExOjAwIC0gMjI6MDA8L3A+XG4gICAgICAgIDxwPlR1ZXNkYXk6IDExOjAwIC0gMjI6MDA8L3A+XG4gICAgICAgIDxwPldlZG5lc2RheTogMTE6MDAgLSAyMjowMDwvcD5cbiAgICAgICAgPHA+VGh1cnNkYXk6IDExOjAwIC0gMjI6MDA8L3A+XG4gICAgICAgIDxwPkZyaWRheTogMTE6MDAgLSAyMzowMDwvcD5cbiAgICAgICAgPHA+U2F0dXJkYXk6IDExOjAwIC0gMjM6MDA8L3A+XG4gICAgICAgIDxwPlN1bmRheTogMTI6MDAgLSAyMTowMDwvcD5cbiAgICBgO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgyPkxvY2F0aW9uPC9oMj5cbiAgICAgICAgPHA+MTIzIEl0YWxpYW4gU3RyZWV0PC9wPlxuICAgICAgICA8cD5Gb29kdG93biwgRlQgMTIzNDU8L3A+XG4gICAgYDtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    const nav = document.createElement('nav');\n    \n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'Home';\n    homeBtn.addEventListener('click', () => loadPage(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    \n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'Menu';\n    menuBtn.addEventListener('click', () => loadPage(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n    \n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = 'Contact';\n    contactBtn.addEventListener('click', () => loadPage(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n    \n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    header.appendChild(nav);\n    \n    return header;\n}\n\nfunction loadPage(pageFunction) {\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n    main.appendChild(pageFunction());\n}\n\n// Initial page load\ndocument.body.appendChild(createHeader());\nconst main = document.createElement('main');\ndocument.body.appendChild(main);\nloadPage(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnQztBQUNBO0FBQ007O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw2Q0FBVTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNkNBQVU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdEQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkNBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5LW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIFxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkUGFnZShjcmVhdGVIb21lKSk7XG4gICAgXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRQYWdlKGNyZWF0ZU1lbnUpKTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFBhZ2UoY3JlYXRlQ29udGFjdCkpO1xuICAgIFxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2VGdW5jdGlvbikge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhZ2VGdW5jdGlvbigpKTtcbn1cblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5sb2FkUGFnZShjcmVhdGVIb21lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const menuTitle = document.createElement('h1');\n    menuTitle.textContent = 'Our Menu';\n\n    const menuItems = [\n        {\n            name: \"Margherita Pizza\",\n            description: \"Fresh tomatoes, mozzarella, basil\",\n            price: \"$14.99\"\n        },\n        {\n            name: \"Spaghetti Carbonara\",\n            description: \"Creamy sauce with pancetta and pecorino\",\n            price: \"$16.99\"\n        },\n        {\n            name: \"Lasagna\",\n            description: \"Layered pasta with meat sauce and cheese\",\n            price: \"$18.99\"\n        },\n        {\n            name: \"Tiramisu\",\n            description: \"Classic Italian coffee-flavored dessert\",\n            price: \"$8.99\"\n        }\n    ];\n\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menu-grid');\n\n    menuItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item');\n\n        const itemName = document.createElement('h2');\n        itemName.textContent = item.name;\n\n        const itemDescription = document.createElement('p');\n        itemDescription.textContent = item.description;\n\n        const itemPrice = document.createElement('span');\n        itemPrice.textContent = item.price;\n\n        menuItem.appendChild(itemName);\n        menuItem.appendChild(itemDescription);\n        menuItem.appendChild(itemPrice);\n\n        menuGrid.appendChild(menuItem);\n    });\n\n    menu.appendChild(menuTitle);\n    menu.appendChild(menuGrid);\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnktb2Rpbi1wcm9qZWN0Ly4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJNYXJnaGVyaXRhIFBpenphXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVzaCB0b21hdG9lcywgbW96emFyZWxsYSwgYmFzaWxcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQxNC45OVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU3BhZ2hldHRpIENhcmJvbmFyYVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYW15IHNhdWNlIHdpdGggcGFuY2V0dGEgYW5kIHBlY29yaW5vXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMTYuOTlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkxhc2FnbmFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxheWVyZWQgcGFzdGEgd2l0aCBtZWF0IHNhdWNlIGFuZCBjaGVlc2VcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQxOC45OVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiVGlyYW1pc3VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzaWMgSXRhbGlhbiBjb2ZmZWUtZmxhdm9yZWQgZGVzc2VydFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDguOTlcIlxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUdyaWQuY2xhc3NMaXN0LmFkZCgnbWVudS1ncmlkJyk7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgICAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51R3JpZCk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;