"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/folder",{

/***/ "./src/sharing/util/constant.js":
/*!**************************************!*\
  !*** ./src/sharing/util/constant.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROOT_ID: function() { return /* binding */ ROOT_ID; },\n/* harmony export */   ROUTE: function() { return /* binding */ ROUTE; },\n/* harmony export */   TIME_IN_MILLISECONDS: function() { return /* binding */ TIME_IN_MILLISECONDS; }\n/* harmony export */ });\nconst ROUTE = {\n    랜딩: \"/\",\n    로그인: \"/signin\",\n    회원가입: \"/signup\",\n    개인정보처리방침: \"/privacy\",\n    FAQ: \"/faq\"\n};\nconst second = 1000;\nconst minute = second * 60;\nconst hour = minute * 60;\nconst day = hour * 24;\nconst month = day * 31;\nconst year = month * 12;\nconst TIME_IN_MILLISECONDS = {\n    second,\n    minute,\n    hour,\n    day,\n    month,\n    year\n};\nconst ROOT_ID = \"root\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmluZy91dGlsL2NvbnN0YW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFFBQVE7SUFDbkJDLElBQUk7SUFDSkMsS0FBSztJQUNMQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsS0FBSztBQUNQLEVBQUU7QUFFRixNQUFNQyxTQUFTO0FBQ2YsTUFBTUMsU0FBU0QsU0FBUztBQUN4QixNQUFNRSxPQUFPRCxTQUFTO0FBQ3RCLE1BQU1FLE1BQU1ELE9BQU87QUFDbkIsTUFBTUUsUUFBUUQsTUFBTTtBQUNwQixNQUFNRSxPQUFPRCxRQUFRO0FBRWQsTUFBTUUsdUJBQXVCO0lBQ2xDTjtJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztBQUNGLEVBQUU7QUFFSyxNQUFNRSxVQUFVLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJpbmcvdXRpbC9jb25zdGFudC5qcz8wNDk1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBST1VURSA9IHtcbiAg656c65SpOiBcIi9cIixcbiAg66Gc6re47J24OiBcIi9zaWduaW5cIixcbiAg7ZqM7JuQ6rCA7J6FOiBcIi9zaWdudXBcIixcbiAg6rCc7J247KCV67O07LKY66as67Cp7LmoOiBcIi9wcml2YWN5XCIsXG4gIEZBUTogXCIvZmFxXCIsXG59O1xuXG5jb25zdCBzZWNvbmQgPSAxMDAwO1xuY29uc3QgbWludXRlID0gc2Vjb25kICogNjA7XG5jb25zdCBob3VyID0gbWludXRlICogNjA7XG5jb25zdCBkYXkgPSBob3VyICogMjQ7XG5jb25zdCBtb250aCA9IGRheSAqIDMxO1xuY29uc3QgeWVhciA9IG1vbnRoICogMTI7XG5cbmV4cG9ydCBjb25zdCBUSU1FX0lOX01JTExJU0VDT05EUyA9IHtcbiAgc2Vjb25kLFxuICBtaW51dGUsXG4gIGhvdXIsXG4gIGRheSxcbiAgbW9udGgsXG4gIHllYXIsXG59O1xuXG5leHBvcnQgY29uc3QgUk9PVF9JRCA9IFwicm9vdFwiO1xuIl0sIm5hbWVzIjpbIlJPVVRFIiwi656c65SpIiwi66Gc6re47J24Iiwi7ZqM7JuQ6rCA7J6FIiwi6rCc7J247KCV67O07LKY66as67Cp7LmoIiwiRkFRIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsIm1vbnRoIiwieWVhciIsIlRJTUVfSU5fTUlMTElTRUNPTkRTIiwiUk9PVF9JRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sharing/util/constant.js\n"));

/***/ })

});