"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Dropdown.jsx":
/*!*************************************!*\
  !*** ./app/components/Dropdown.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-client)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_currentBreed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/currentBreed */ \"(app-client)/./app/atoms/currentBreed.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropdown(props) {\n    _s();\n    const [selectedBreed, setSelectedBreed] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_currentBreed__WEBPACK_IMPORTED_MODULE_2__.currentBreedState);\n    const { breeds  } = props;\n    const handleChange = (e)=>{\n        setSelectedBreed(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"h-8 rounded-md\",\n                defaultValue: \"Select breed\",\n                onChange: (e)=>handleChange(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        children: \"Select breed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anamdiazs/Documents/GitHub/catstagram/app/components/Dropdown.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this),\n                    breeds.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            className: \"text-lg\",\n                            value: item.id,\n                            children: item.name\n                        }, item.id, false, {\n                            fileName: \"/Users/anamdiazs/Documents/GitHub/catstagram/app/components/Dropdown.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 6\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anamdiazs/Documents/GitHub/catstagram/app/components/Dropdown.jsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anamdiazs/Documents/GitHub/catstagram/app/components/Dropdown.jsx\",\n            lineNumber: 18,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anamdiazs/Documents/GitHub/catstagram/app/components/Dropdown.jsx\",\n        lineNumber: 17,\n        columnNumber: 2\n    }, this);\n}\n_s(Dropdown, \"fTbb9eeVzwHYA5xlZcGFxDP6Em4=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRHJvcGRvd24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1QztBQUNrQjtBQUcxQyxTQUFTRSxTQUFTQyxLQUFLLEVBQUU7O0lBRXZDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdMLHNEQUFjQSxDQUFDQyxrRUFBaUJBO0lBQzFFLE1BQU0sRUFBRUssT0FBTSxFQUFFLEdBQUdIO0lBRW5CLE1BQU1JLGVBQWUsQ0FBQ0MsSUFBTTtRQUMzQkgsaUJBQWlCRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDaEM7SUFFQyxxQkFDRCw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0M7c0JBQ0EsNEVBQUNDO2dCQUFPRixXQUFVO2dCQUFpQkcsY0FBYztnQkFBZ0JDLFVBQVdSLENBQUFBLElBQUtELGFBQWFDOztrQ0FDN0YsOERBQUNTO2tDQUFPOzs7Ozs7b0JBQ1BYLE9BQU9ZLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1gsOERBQUNGOzRCQUFPTCxXQUFVOzRCQUF3QkYsT0FBT1MsS0FBS0MsRUFBRTtzQ0FBR0QsS0FBS0UsSUFBSTsyQkFBbkNGLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QyxDQUFDO0dBdEJ1QmxCOztRQUVtQkYsa0RBQWNBOzs7S0FGakNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Ryb3Bkb3duLmpzeD84NTEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IGN1cnJlbnRCcmVlZFN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvY3VycmVudEJyZWVkJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG5cdFxuXHRjb25zdCBbc2VsZWN0ZWRCcmVlZCwgc2V0U2VsZWN0ZWRCcmVlZF0gPSB1c2VSZWNvaWxTdGF0ZShjdXJyZW50QnJlZWRTdGF0ZSlcblx0Y29uc3QgeyBicmVlZHMgfSA9IHByb3BzXG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcblx0XHRzZXRTZWxlY3RlZEJyZWVkKGUudGFyZ2V0LnZhbHVlKVxuXHR9XG5cbiAgcmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWU9Jyc+XG5cdFx0PGZvcm0+XG5cdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT0naC04IHJvdW5kZWQtbWQnIGRlZmF1bHRWYWx1ZT17J1NlbGVjdCBicmVlZCd9IG9uQ2hhbmdlPXsgZSA9PiBoYW5kbGVDaGFuZ2UoZSl9PlxuXHRcdFx0XHQ8b3B0aW9uPlNlbGVjdCBicmVlZDwvb3B0aW9uPlxuXHRcdFx0XHR7YnJlZWRzLm1hcChpdGVtID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0ndGV4dC1sZycga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHQ8L2Zvcm0+XG5cdDwvZGl2PlxuXG4gIClcbn1cblxuXG4iXSwibmFtZXMiOlsidXNlUmVjb2lsU3RhdGUiLCJjdXJyZW50QnJlZWRTdGF0ZSIsIkRyb3Bkb3duIiwicHJvcHMiLCJzZWxlY3RlZEJyZWVkIiwic2V0U2VsZWN0ZWRCcmVlZCIsImJyZWVkcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIm1hcCIsIml0ZW0iLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Dropdown.jsx\n"));

/***/ })

});