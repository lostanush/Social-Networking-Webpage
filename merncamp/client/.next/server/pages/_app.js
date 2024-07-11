/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__]);\n_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\components\\\\Nav.js\";\n\n\n\n\n\n\nconst Nav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (false) {}\n  }, [router.asPath]);\n  const logout = () => {\n    window.localStorage.removeItem(\"auth\");\n    setState(null);\n    router.push(\"/login\");\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"nav\", {\n    className: \"nav d-flex justify-content-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      className: `nav-link  ${current === \"/\" ? \"active\" : \" logo\"}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"b\", {\n        children: \"MernCamp\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), state && state.token !== \"\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/users/dashboard\",\n        className: `nav-link ${current === \"/users/dashboard\" ? \"active\" : \"\"}`,\n        children: state && state.user && state.user.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        onClick: logout,\n        className: \"nav-link\",\n        href: \"/login\",\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/login\",\n        className: `nav-link ${current === \"/login\" ? \"active\" : \"\"}`,\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/register\",\n        className: `nav-link ${current === \"/register\" ? \"active\" : \"\"}`,\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNmO0FBQ1o7QUFDVztBQUFBO0FBQUE7QUFFeEMsTUFBTVUsR0FBRyxHQUFHQSxDQUFBLEtBQU07RUFDaEIsTUFBTTtJQUFBLEdBQUNDLE9BQU87SUFBQSxHQUFFQztFQUFVLElBQUlYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFDLE1BQU07SUFBQSxHQUFDWSxLQUFLO0lBQUEsR0FBRUM7RUFBUSxJQUFJZCxpREFBVSxDQUFDRyxpREFBVyxDQUFDO0VBQ2pELE1BQU1ZLE1BQU0sR0FBR1Ysc0RBQVMsQ0FBQyxDQUFDO0VBRTFCSCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLE9BQStCLEVBR2xDO0VBQ0gsQ0FBQyxFQUFFLENBQUNhLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFFbkIsTUFBTUMsTUFBTSxHQUFHQSxDQUFBLEtBQU07SUFDbkJKLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3RDVCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2RDLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUN2QixDQUFDO0VBRUQsb0JBQ0VqQiw2REFBQTtJQUFLa0IsU0FBUyxFQUFDLGtDQUFrQztJQUFBQyxRQUFBLGdCQUMvQ25CLDZEQUFBLENBQUNILGtEQUFJO01BQ0h1QixJQUFJLEVBQUMsR0FBRztNQUNSRixTQUFTLEVBQUcsYUFBWWQsT0FBTyxLQUFLLEdBQUcsR0FBRyxRQUFRLEdBQUcsT0FBUSxFQUFFO01BQUFlLFFBQUEsZUFFL0RuQiw2REFBQTtRQUFBbUIsUUFBQSxFQUFHO01BQVE7UUFBQUUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUc7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDWCxDQUFDLEVBRU5sQixLQUFLLElBQUlBLEtBQUssQ0FBQ21CLEtBQUssS0FBSyxFQUFFLGdCQUMxQnpCLDZEQUFBLENBQUFFLDJEQUFBO01BQUFpQixRQUFBLGdCQUNFbkIsNkRBQUEsQ0FBQ0gsa0RBQUk7UUFDSHVCLElBQUksRUFBQyxrQkFBa0I7UUFDdkJGLFNBQVMsRUFBRyxZQUNWZCxPQUFPLEtBQUssa0JBQWtCLEdBQUcsUUFBUSxHQUFHLEVBQzdDLEVBQUU7UUFBQWUsUUFBQSxFQUVGYixLQUFLLElBQUlBLEtBQUssQ0FBQ29CLElBQUksSUFBSXBCLEtBQUssQ0FBQ29CLElBQUksQ0FBQ0M7TUFBSTtRQUFBTixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDbkMsQ0FBQyxlQUVQeEIsNkRBQUE7UUFBRzRCLE9BQU8sRUFBRWQsTUFBTztRQUFDSSxTQUFTLEVBQUMsVUFBVTtRQUFDRSxJQUFJLEVBQUMsUUFBUTtRQUFBRCxRQUFBLEVBQUM7TUFFdkQ7UUFBQUUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUcsQ0FBQztJQUFBLGVBQ0osQ0FBQyxnQkFFSHhCLDZEQUFBLENBQUFFLDJEQUFBO01BQUFpQixRQUFBLGdCQUNFbkIsNkRBQUEsQ0FBQ0gsa0RBQUk7UUFDSHVCLElBQUksRUFBQyxRQUFRO1FBQ2JGLFNBQVMsRUFBRyxZQUFXZCxPQUFPLEtBQUssUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFHLEVBQUU7UUFBQWUsUUFBQSxFQUMvRDtNQUVEO1FBQUFFLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFNLENBQUMsZUFDUHhCLDZEQUFBLENBQUNILGtEQUFJO1FBQ0h1QixJQUFJLEVBQUMsV0FBVztRQUNoQkYsU0FBUyxFQUFHLFlBQVdkLE9BQU8sS0FBSyxXQUFXLEdBQUcsUUFBUSxHQUFHLEVBQUcsRUFBRTtRQUFBZSxRQUFBLEVBQ2xFO01BRUQ7UUFBQUUsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQU0sQ0FBQztJQUFBLGVBQ1AsQ0FDSDtFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNFLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVyQixHQUFHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBjb25zdCBjdXJyID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICBzZXRDdXJyZW50KGN1cnIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICBzZXRTdGF0ZShudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICAke2N1cnJlbnQgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiIGxvZ29cIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGI+TWVybkNhbXA8L2I+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIHtzdGF0ZSAmJiBzdGF0ZS50b2tlbiAhPT0gXCJcIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi91c2Vycy9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3VzZXJzL2Rhc2hib2FyZFwiID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7Y3VycmVudCA9PT0gXCIvbG9naW5cIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3JlZ2lzdGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtjdXJyZW50ID09PSBcIi9yZWdpc3RlclwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJjdXJyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImFzUGF0aCIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJocmVmIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidG9rZW4iLCJ1c2VyIiwibmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\context\\\\index.js\";\n\n\n\n\nconst UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: {},\n    token: \"\"\n  });\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const auth = JSON.parse(window.localStorage.getItem(\"auth\"));\n    if (auth) {\n      setState(auth);\n    }\n    console.log(state);\n  }, []);\n  const token = state && state.token ? state.token : \"\";\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:8000/api\";\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(response => response, error => {\n    let res = error.response;\n    if (res.status === 401 && !res.config._isRetryRequest) {\n      setState(null);\n      window.localStorage.removeItem(\"auth\");\n      router.push(\"/\");\n    }\n    return Promise.reject(error);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(UserContext.Provider, {\n    value: [state, setState],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbkI7QUFDZDtBQUFBO0FBRTFCLE1BQU1PLFdBQVcsZ0JBQUdOLG9EQUFhLENBQUMsQ0FBQztBQUVuQyxNQUFNTyxZQUFZLEdBQUdBLENBQUM7RUFBRUM7QUFBUyxDQUFDLEtBQUs7RUFDckMsTUFBTTtJQUFBLEdBQUNDLEtBQUs7SUFBQSxHQUFFQztFQUFRLElBQUlYLCtDQUFRLENBQUM7SUFDakNZLElBQUksRUFBRSxDQUFDLENBQUM7SUFDUkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBQ0YsTUFBTUMsTUFBTSxHQUFHWCxzREFBUyxDQUFDLENBQUM7RUFFMUJELGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1hLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsSUFBSUwsSUFBSSxFQUFFO01BQ1JKLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDO0lBQ2hCO0lBQ0FNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixLQUFLLENBQUM7RUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1HLEtBQUssR0FBR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFLLEdBQUcsRUFBRTtFQUNyRFQsc0RBQWMsQ0FBQ29CLE9BQU8sR0FBR0MsMkJBQTJCO0VBQ3BEckIsc0RBQWMsQ0FBQ3dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFJLFVBQVNoQixLQUFNLEVBQUM7RUFFbEVULDBEQUFrQixDQUFDMkIsUUFBUSxDQUFDQyxHQUFHLENBQzVCRCxRQUFRLElBQUtBLFFBQVEsRUFDckJFLEtBQUssSUFBSztJQUNULElBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFRO0lBQ3hCLElBQUlHLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDRCxHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsZUFBZSxFQUFFO01BQ3JEMUIsUUFBUSxDQUFDLElBQUksQ0FBQztNQUNkTyxNQUFNLENBQUNDLFlBQVksQ0FBQ21CLFVBQVUsQ0FBQyxNQUFNLENBQUM7TUFDdEN4QixNQUFNLENBQUN5QixJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCO0lBQ0EsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNSLEtBQUssQ0FBQztFQUM5QixDQUNGLENBQUM7RUFFRCxvQkFDRTNCLDZEQUFBLENBQUNDLFdBQVcsQ0FBQ21DLFFBQVE7SUFBQ0MsS0FBSyxFQUFFLENBQUNqQyxLQUFLLEVBQUVDLFFBQVEsQ0FBRTtJQUFBRixRQUFBLEVBQzVDQTtFQUFRO0lBQUFtQyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDVyxDQUFDO0FBRTNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSk7XHJcbiAgICBpZiAoYXV0aCkge1xyXG4gICAgICBzZXRTdGF0ZShhdXRoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gc3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6IFwiXCI7XHJcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIChyZXNwb25zZSkgPT4gcmVzcG9uc2UsXHJcbiAgICAoZXJyb3IpID0+IHtcclxuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmICFyZXMuY29uZmlnLl9pc1JldHJ5UmVxdWVzdCkge1xyXG4gICAgICAgIHNldFN0YXRlKG51bGwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImpzeERFViIsIl9qc3hERVYiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsInJvdXRlciIsImF1dGgiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvbWlzZSIsInJlamVjdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_0__, _components_Nav__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_context__WEBPACK_IMPORTED_MODULE_0__, _components_Nav__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\pages\\\\_app.js\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_0__.UserProvider, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n      position: \"top-center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQUNQO0FBQ21CO0FBQ0Y7QUFDQztBQUNsQjtBQUNFO0FBQUE7QUFFL0IsTUFBTU0sS0FBSyxHQUFHQSxDQUFDO0VBQUVDLFNBQVM7RUFBRUM7QUFBVSxDQUFDLEtBQUs7RUFDMUMsb0JBQ0VILDZEQUFBLENBQUNMLGtEQUFZO0lBQUFTLFFBQUEsZ0JBQ1hKLDZEQUFBLENBQUNKLHVEQUFHO01BQUFTLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFFLENBQUMsZUFDUFIsNkRBQUEsQ0FBQ0YsMERBQWM7TUFBQ1csUUFBUSxFQUFDO0lBQVk7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQUUsQ0FBQyxlQUd4Q1IsNkRBQUEsQ0FBQ0UsU0FBUyxFQUFBUSxhQUFBLEtBQUtQLFNBQVM7TUFBQUUsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQUcsQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUVoQixDQUFDO0FBRW5CLENBQUM7QUFFRCxpRUFBZVAsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L3Jlc2V0LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIiAvPlxyXG5cclxuICAgICAgey8qIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiB9fT4gKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgey8qIC8vIDwvZGl2PiAqL31cclxuICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlVzZXJQcm92aWRlciIsIk5hdiIsIkhlYWQiLCJUb2FzdENvbnRhaW5lciIsImpzeERFViIsIl9qc3hERVYiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicG9zaXRpb24iLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify","vendor-chunks/bootstrap","vendor-chunks/antd"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();