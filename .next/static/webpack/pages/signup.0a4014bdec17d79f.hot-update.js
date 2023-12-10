"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup/index.tsx":
/*!********************************!*\
  !*** ./pages/signup/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_Input_feature_user_info_input_InputUserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/Input/feature-user-info-input/InputUserInfo */ \"./src/Input/feature-user-info-input/InputUserInfo.tsx\");\n/* harmony import */ var _src_Input_ui_input_title_SignTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/Input/ui-input-title/SignTitle */ \"./src/Input/ui-input-title/SignTitle.tsx\");\n/* harmony import */ var _src_link_ui_sign_button_SignButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/link/ui-sign-button/SignButton */ \"./src/link/ui-sign-button/SignButton.tsx\");\n/* harmony import */ var _src_link_ui_social_sign_SocialSign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/link/ui-social-sign/SocialSign */ \"./src/link/ui-social-sign/SocialSign.tsx\");\n/* harmony import */ var _src_page_layout_SignUpLayout_SignUpLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/page-layout/SignUpLayout/SignUpLayout */ \"./src/page-layout/SignUpLayout/SignUpLayout.tsx\");\n/* harmony import */ var _src_sharing_util_getStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/src/sharing/util/getStatus */ \"./src/sharing/util/getStatus.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SignUpPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const currentPath = router.pathname;\n    const pathName = {\n        isSigninPage: currentPath === \"/signin\",\n        isSignupPage: currentPath === \"/signup\"\n    };\n    const [passwordValue, setPasswordValue] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [checkPasswordValue, setCheckPasswordValue] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [isNotSamePasswordValue, setIsNotSamePasswordValue] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [emailValue, setEmailValue] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    let result;\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        setIsNotSamePasswordValue(passwordValue !== checkPasswordValue);\n        if (localStorage.getItem(\"accessToken\")) router.push(\"/folder\");\n        result = (0,_src_sharing_util_getStatus__WEBPACK_IMPORTED_MODULE_6__.getStatus)(emailValue, passwordValue);\n    }, [\n        passwordValue,\n        emailValue,\n        checkPasswordValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_page_layout_SignUpLayout_SignUpLayout__WEBPACK_IMPORTED_MODULE_5__.SignUpLayout, {\n        signTitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Input_ui_input_title_SignTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            pathName: pathName\n        }, void 0, false, void 0, void 0),\n        emailInput: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Input_feature_user_info_input_InputUserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isPassword: false,\n            pathName: {\n                pathName\n            },\n            onBlur: setEmailValue\n        }, void 0, false, void 0, void 0),\n        passwordInput: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Input_feature_user_info_input_InputUserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isPassword: true,\n            onBlur: setPasswordValue,\n            getStatusResult: result\n        }, void 0, false, void 0, void 0),\n        passwordCheckInput: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Input_feature_user_info_input_InputUserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isPassword: true,\n            checkPassword: true,\n            onBlur: setCheckPasswordValue,\n            isNotSamePasswordValue: isNotSamePasswordValue,\n            getStatusResult: result\n        }, void 0, false, void 0, void 0),\n        loginButton: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_link_ui_sign_button_SignButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            pathName: pathName\n        }, void 0, false, void 0, void 0),\n        socialLogin: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_link_ui_social_sign_SocialSign__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            pathName: pathName\n        }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"/Users/seung-yeon/Desktop/1-weekly-mission/pages/signup/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUpPage, \"40agq2LAx7PdFnV4St7451CecCU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = SignUpPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpPage);\nvar _c;\n$RefreshReg$(_c, \"SignUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNqQjtBQUNDO0FBQ0E7QUFDYTtBQUNsQjtBQUNqQjtBQUNJO0FBRTVDLE1BQU1TLGFBQWE7O0lBQ2pCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNSyxjQUFzQkQsT0FBT0UsUUFBUTtJQUMzQyxNQUFNQyxXQUFXO1FBQ2ZDLGNBQWNILGdCQUFnQjtRQUM5QkksY0FBY0osZ0JBQWdCO0lBQ2hDO0lBRUEsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDVSxvQkFBb0JDLHNCQUFzQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNZLHdCQUF3QkMsMEJBQTBCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3JFLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxJQUFJZ0I7SUFFSmpCLGdEQUFTQSxDQUFDO1FBQ1JjLDBCQUEwQkwsa0JBQWtCRTtRQUM1QyxJQUFJTyxhQUFhQyxPQUFPLENBQUMsZ0JBQWdCaEIsT0FBT2lCLElBQUksQ0FBQztRQUNyREgsU0FBU25CLHNFQUFTQSxDQUFDaUIsWUFBWU47SUFDakMsR0FBRztRQUFDQTtRQUFlTTtRQUFZSjtLQUFtQjtJQUVsRCxxQkFDRSw4REFBQ2Qsb0ZBQVlBO1FBQ1h3Qix5QkFBVyw4REFBQzNCLDJFQUFTQTtZQUFDWSxVQUFVQTs7UUFDaENnQiwwQkFDRSw4REFBQzdCLHdGQUFhQTtZQUNaOEIsWUFBWTtZQUNaakIsVUFBVTtnQkFBRUE7WUFBUztZQUNyQmtCLFFBQVFSOztRQUdaUyw2QkFDRSw4REFBQ2hDLHdGQUFhQTtZQUNaOEIsWUFBWTtZQUNaQyxRQUFRZDtZQUNSZ0IsaUJBQWlCVDs7UUFHckJVLGtDQUNFLDhEQUFDbEMsd0ZBQWFBO1lBQ1o4QixZQUFZO1lBQ1pLLGVBQWU7WUFDZkosUUFBUVo7WUFDUkMsd0JBQXdCQTtZQUN4QmEsaUJBQWlCVDs7UUFHckJZLDJCQUFhLDhEQUFDbEMsMkVBQVVBO1lBQUNXLFVBQVVBOztRQUNuQ3dCLDJCQUFhLDhEQUFDbEMsMkVBQVVBO1lBQUNVLFVBQVVBOzs7Ozs7O0FBR3pDO0dBbERNSjs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBb0ROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC9pbmRleC50c3g/ZDNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXRVc2VySW5mbyBmcm9tIFwiQC9zcmMvSW5wdXQvZmVhdHVyZS11c2VyLWluZm8taW5wdXQvSW5wdXRVc2VySW5mb1wiO1xuaW1wb3J0IFNpZ25UaXRsZSBmcm9tIFwiQC9zcmMvSW5wdXQvdWktaW5wdXQtdGl0bGUvU2lnblRpdGxlXCI7XG5pbXBvcnQgU2lnbkJ1dHRvbiBmcm9tIFwiQC9zcmMvbGluay91aS1zaWduLWJ1dHRvbi9TaWduQnV0dG9uXCI7XG5pbXBvcnQgU29jaWFsU2lnbiBmcm9tIFwiQC9zcmMvbGluay91aS1zb2NpYWwtc2lnbi9Tb2NpYWxTaWduXCI7XG5pbXBvcnQgeyBTaWduVXBMYXlvdXQgfSBmcm9tIFwiQC9zcmMvcGFnZS1sYXlvdXQvU2lnblVwTGF5b3V0L1NpZ25VcExheW91dFwiO1xuaW1wb3J0IHsgZ2V0U3RhdHVzIH0gZnJvbSBcIkAvc3JjL3NoYXJpbmcvdXRpbC9nZXRTdGF0dXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTaWduVXBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY3VycmVudFBhdGg6IHN0cmluZyA9IHJvdXRlci5wYXRobmFtZTtcbiAgY29uc3QgcGF0aE5hbWUgPSB7XG4gICAgaXNTaWduaW5QYWdlOiBjdXJyZW50UGF0aCA9PT0gXCIvc2lnbmluXCIsXG4gICAgaXNTaWdudXBQYWdlOiBjdXJyZW50UGF0aCA9PT0gXCIvc2lnbnVwXCIsXG4gIH07XG5cbiAgY29uc3QgW3Bhc3N3b3JkVmFsdWUsIHNldFBhc3N3b3JkVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGVja1Bhc3N3b3JkVmFsdWUsIHNldENoZWNrUGFzc3dvcmRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTm90U2FtZVBhc3N3b3JkVmFsdWUsIHNldElzTm90U2FtZVBhc3N3b3JkVmFsdWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IHJlc3VsdDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTm90U2FtZVBhc3N3b3JkVmFsdWUocGFzc3dvcmRWYWx1ZSAhPT0gY2hlY2tQYXNzd29yZFZhbHVlKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSkgcm91dGVyLnB1c2goXCIvZm9sZGVyXCIpO1xuICAgIHJlc3VsdCA9IGdldFN0YXR1cyhlbWFpbFZhbHVlLCBwYXNzd29yZFZhbHVlKTtcbiAgfSwgW3Bhc3N3b3JkVmFsdWUsIGVtYWlsVmFsdWUsIGNoZWNrUGFzc3dvcmRWYWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZ25VcExheW91dFxuICAgICAgc2lnblRpdGxlPXs8U2lnblRpdGxlIHBhdGhOYW1lPXtwYXRoTmFtZX0gLz59XG4gICAgICBlbWFpbElucHV0PXtcbiAgICAgICAgPElucHV0VXNlckluZm9cbiAgICAgICAgICBpc1Bhc3N3b3JkPXtmYWxzZX1cbiAgICAgICAgICBwYXRoTmFtZT17eyBwYXRoTmFtZSB9fVxuICAgICAgICAgIG9uQmx1cj17c2V0RW1haWxWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIHBhc3N3b3JkSW5wdXQ9e1xuICAgICAgICA8SW5wdXRVc2VySW5mb1xuICAgICAgICAgIGlzUGFzc3dvcmQ9e3RydWV9XG4gICAgICAgICAgb25CbHVyPXtzZXRQYXNzd29yZFZhbHVlfVxuICAgICAgICAgIGdldFN0YXR1c1Jlc3VsdD17cmVzdWx0fVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgcGFzc3dvcmRDaGVja0lucHV0PXtcbiAgICAgICAgPElucHV0VXNlckluZm9cbiAgICAgICAgICBpc1Bhc3N3b3JkPXt0cnVlfVxuICAgICAgICAgIGNoZWNrUGFzc3dvcmQ9e3RydWV9XG4gICAgICAgICAgb25CbHVyPXtzZXRDaGVja1Bhc3N3b3JkVmFsdWV9XG4gICAgICAgICAgaXNOb3RTYW1lUGFzc3dvcmRWYWx1ZT17aXNOb3RTYW1lUGFzc3dvcmRWYWx1ZX1cbiAgICAgICAgICBnZXRTdGF0dXNSZXN1bHQ9e3Jlc3VsdH1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIGxvZ2luQnV0dG9uPXs8U2lnbkJ1dHRvbiBwYXRoTmFtZT17cGF0aE5hbWV9IC8+fVxuICAgICAgc29jaWFsTG9naW49ezxTb2NpYWxTaWduIHBhdGhOYW1lPXtwYXRoTmFtZX0gLz59XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFBhZ2U7XG4iXSwibmFtZXMiOlsiSW5wdXRVc2VySW5mbyIsIlNpZ25UaXRsZSIsIlNpZ25CdXR0b24iLCJTb2NpYWxTaWduIiwiU2lnblVwTGF5b3V0IiwiZ2V0U3RhdHVzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWduVXBQYWdlIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsInBhdGhOYW1lIiwiaXNTaWduaW5QYWdlIiwiaXNTaWdudXBQYWdlIiwicGFzc3dvcmRWYWx1ZSIsInNldFBhc3N3b3JkVmFsdWUiLCJjaGVja1Bhc3N3b3JkVmFsdWUiLCJzZXRDaGVja1Bhc3N3b3JkVmFsdWUiLCJpc05vdFNhbWVQYXNzd29yZFZhbHVlIiwic2V0SXNOb3RTYW1lUGFzc3dvcmRWYWx1ZSIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJzaWduVGl0bGUiLCJlbWFpbElucHV0IiwiaXNQYXNzd29yZCIsIm9uQmx1ciIsInBhc3N3b3JkSW5wdXQiLCJnZXRTdGF0dXNSZXN1bHQiLCJwYXNzd29yZENoZWNrSW5wdXQiLCJjaGVja1Bhc3N3b3JkIiwibG9naW5CdXR0b24iLCJzb2NpYWxMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup/index.tsx\n"));

/***/ })

});