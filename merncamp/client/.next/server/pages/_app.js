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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__]);\n_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\components\\\\Nav.js\";\n\n\n\n\n\n\nconst Nav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (false) {}\n  }, [router.asPath]);\n  const logout = () => {\n    window.localStorage.removeItem(\"auth\");\n    setState(null);\n    router.push(\"/login\");\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"nav\", {\n    className: \"nav d-flex justify-content-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\",\n      className: `nav-link  ${current === \"/\" ? \"active\" : \" logo\"}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"b\", {\n        children: \"MernCamp\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), state !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/users/dashboard\",\n        className: `nav-link ${current === \"/users/dashboard\" ? \"active\" : \"\"}`,\n        children: state && state.user && state.user.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        onClick: logout,\n        className: \"nav-link\",\n        href: \"/login\",\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/login\",\n        className: `nav-link ${current === \"/login\" ? \"active\" : \"\"}`,\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/register\",\n        className: `nav-link ${current === \"/register\" ? \"active\" : \"\"}`,\n        children: \"Register\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQUEsZUFDUCxDQUNIO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ0UsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZXJCLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IGN1cnIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgIHNldEN1cnJlbnQoY3Vycik7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIHNldFN0YXRlKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cclxuICAgICAgPExpbmtcclxuICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgICR7Y3VycmVudCA9PT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCIgbG9nb1wifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Yj5NZXJuQ2FtcDwvYj5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAge3N0YXRlICE9PSBudWxsID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3VzZXJzL2Rhc2hib2FyZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvdXNlcnMvZGFzaGJvYXJkXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL2xvZ2luXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtjdXJyZW50ID09PSBcIi9sb2dpblwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke2N1cnJlbnQgPT09IFwiL3JlZ2lzdGVyXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiTGluayIsInVzZVJvdXRlciIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImN1cnIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImhyZWYiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ1c2VyIiwibmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\context\\\\index.js\";\n\n\n\n\nconst UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: {},\n    token: \"\"\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const auth = JSON.parse(window.localStorage.getItem(\"auth\"));\n    if (auth) {\n      setState(auth);\n    }\n  }, []);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const token = state && state.token ? state.token : \"\";\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:8000/api\";\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n  axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function (response) {\n    // Any status code that lies within the range of 2xx causes this function to trigger\n    // Do something with response data\n    return response;\n  }, function (error) {\n    // Do something with response error\n    let res = error.response;\n    if (res.status === 401 && !res.config._isRetryRequest) {\n      setState({\n        user: {},\n        token: \"\"\n      });\n      window.localStorage.removeItem(\"auth\");\n      router.push(\"/login\");\n    }\n    return Promise.reject(error);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(UserContext.Provider, {\n    value: [state, setState],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbkI7QUFDZDtBQUFBO0FBRTFCLE1BQU1PLFdBQVcsZ0JBQUdOLG9EQUFhLENBQUMsQ0FBQztBQUVuQyxNQUFNTyxZQUFZLEdBQUdBLENBQUM7RUFBRUM7QUFBUyxDQUFDLEtBQUs7RUFDckMsTUFBTTtJQUFBLEdBQUNDLEtBQUs7SUFBQSxHQUFFQztFQUFRLElBQUlYLCtDQUFRLENBQUM7SUFDakNZLElBQUksRUFBRSxDQUFDLENBQUM7SUFDUkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBRUZYLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1ZLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsSUFBSUwsSUFBSSxFQUFFO01BQ1JILFFBQVEsQ0FBQ0csSUFBSSxDQUFDO0lBQ2hCO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1NLE1BQU0sR0FBR2pCLHNEQUFTLENBQUMsQ0FBQztFQUUxQixNQUFNVSxLQUFLLEdBQUdILEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDckRULHNEQUFjLENBQUNrQixPQUFPLEdBQUdDLDJCQUEyQjtFQUNwRG5CLHNEQUFjLENBQUNzQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBSSxVQUFTZCxLQUFNLEVBQUM7RUFFbEVULDBEQUFrQixDQUFDeUIsUUFBUSxDQUFDQyxHQUFHLENBQzdCLFVBQVVELFFBQVEsRUFBRTtJQUNsQjtJQUNBO0lBQ0EsT0FBT0EsUUFBUTtFQUNqQixDQUFDLEVBQ0QsVUFBVUUsS0FBSyxFQUFFO0lBQ2Y7SUFDQSxJQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBUTtJQUN4QixJQUFJRyxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxNQUFNLENBQUNDLGVBQWUsRUFBRTtNQUNyRHhCLFFBQVEsQ0FBQztRQUNQQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1JDLEtBQUssRUFBRTtNQUNULENBQUMsQ0FBQztNQUNGSSxNQUFNLENBQUNDLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQyxNQUFNLENBQUM7TUFDdENoQixNQUFNLENBQUNpQixJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCO0lBQ0EsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNSLEtBQUssQ0FBQztFQUM5QixDQUNGLENBQUM7RUFFRCxvQkFDRXpCLDZEQUFBLENBQUNDLFdBQVcsQ0FBQ2lDLFFBQVE7SUFBQ0MsS0FBSyxFQUFFLENBQUMvQixLQUFLLEVBQUVDLFFBQVEsQ0FBRTtJQUFBRixRQUFBLEVBQzVDQTtFQUFRO0lBQUFpQyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDVyxDQUFDO0FBRTNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSk7XHJcbiAgICBpZiAoYXV0aCkge1xyXG4gICAgICBzZXRTdGF0ZShhdXRoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IHN0YXRlICYmIHN0YXRlLnRva2VuID8gc3RhdGUudG9rZW4gOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEk7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllcyB3aXRoaW4gdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZXMgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyXHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGRhdGFcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBlcnJvclxyXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgIXJlcy5jb25maWcuX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdXNlcjoge30sXHJcbiAgICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImpzeERFViIsIl9qc3hERVYiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsImF1dGgiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX2lzUmV0cnlSZXF1ZXN0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJQcm9taXNlIiwicmVqZWN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_0__, _components_Nav__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_context__WEBPACK_IMPORTED_MODULE_0__, _components_Nav__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"D:\\\\Social-Networking-Webpage\\\\merncamp\\\\client\\\\pages\\\\_app.js\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_0__.UserProvider, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"/css/styles.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n      position: \"top-center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQUNQO0FBQ21CO0FBQ0Y7QUFDQztBQUNsQjtBQUNFO0FBQUE7QUFFL0IsTUFBTU0sS0FBSyxHQUFHQSxDQUFDO0VBQUVDLFNBQVM7RUFBRUM7QUFBVSxDQUFDLEtBQUs7RUFDMUMsb0JBQ0VILDZEQUFBLENBQUNMLGtEQUFZO0lBQUFTLFFBQUEsZ0JBQ1hKLDZEQUFBLENBQUNILGtEQUFJO01BQUFPLFFBQUEsZUFDSEosNkRBQUE7UUFBTUssR0FBRyxFQUFDLFlBQVk7UUFBQ0MsSUFBSSxFQUFDO01BQWlCO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFFO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQzVDLENBQUMsZUFDUFYsNkRBQUEsQ0FBQ0osdURBQUc7TUFBQVcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQUUsQ0FBQyxlQUNQViw2REFBQSxDQUFDRiwwREFBYztNQUFDYSxRQUFRLEVBQUM7SUFBWTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBRSxDQUFDLGVBRXhDViw2REFBQSxDQUFDRSxTQUFTLEVBQUFVLGFBQUEsS0FBS1QsU0FBUztNQUFBSSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBRyxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ2hCLENBQUM7QUFFbkIsQ0FBQztBQUVELGlFQUFlVCxLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvcmVzZXQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZXMuY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIiAvPlxyXG5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Vc2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuIl0sIm5hbWVzIjpbIlVzZXJQcm92aWRlciIsIk5hdiIsIkhlYWQiLCJUb2FzdENvbnRhaW5lciIsImpzeERFViIsIl9qc3hERVYiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNoaWxkcmVuIiwicmVsIiwiaHJlZiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBvc2l0aW9uIiwiX29iamVjdFNwcmVhZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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