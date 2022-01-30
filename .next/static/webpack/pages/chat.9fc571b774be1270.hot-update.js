"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonSendSticker.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    //borderRadius: '50%',\n                    //padding: '0 3px 0 0',\n                    minWidth: '42px',\n                    minHeight: '42px',\n                    fontSize: '20px',\n                    //marginBottom: '8px',\n                    //marginRight: '4px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.transparente.fundo,\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.transparente.buttonBlue,\n                        filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                        hover: {\n                            filter: 'grayscale(0)'\n                        }\n                    }\n                },\n                label: \"🎨\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        /*#__PURE__*/ children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQzs7d0ZBRUFWLHdEQUFNO2dCQUNMUyxVQUFVLEVBQUUsQ0FBQztvQkFDWCxFQUFzQjtvQkFDdEIsRUFBdUI7b0JBQ3ZCRSxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFNBQVMsRUFBRSxDQUFNO29CQUNqQkMsUUFBUSxFQUFFLENBQU07b0JBQ2hCLEVBQXNCO29CQUN0QixFQUFxQjtvQkFDckJDLFVBQVUsRUFBRSxDQUFHO29CQUNmQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsVUFBVSxFQUFFLENBQVE7b0JBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtvQkFDeEJDLGVBQWUsRUFBRWYseUVBQXlDO29CQUMxRG9CLEtBQUssRUFBRSxDQUFDO3dCQUNOTCxlQUFlLEVBQUVmLDhFQUE4Qzt3QkFDL0RzQixNQUFNLEVBQUVsQixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO3dCQUNoRGdCLEtBQUssRUFBRSxDQUFDOzRCQUNORSxNQUFNLEVBQUUsQ0FBYzt3QkFDeEIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQ0RDLEtBQUssRUFBQyxDQUFHO2dCQUNUQyxPQUFPLEVBQUUsUUFBUTtvQkFBRm5CLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzs7Ozs7O1lBRXBDQSxNQUFNLGdGQUNKUixxREFBRztnQkFDRlUsVUFBVSxFQUFFLENBQUM7b0JBQ1hNLE9BQU8sRUFBRSxDQUFNO29CQUNmYSxhQUFhLEVBQUUsQ0FBUTtvQkFDdkJDLFlBQVksRUFBRSxDQUFLO29CQUNuQm5CLFFBQVEsRUFBRSxDQUFVO29CQUNwQlEsZUFBZSxFQUFFZixvRUFBb0M7b0JBQ3JENEIsS0FBSyxFQUFFLENBQUM7d0JBQ05DLEVBQUUsRUFBRSxDQUFPO3dCQUNYQyxFQUFFLEVBQUUsQ0FBTztvQkFDYixDQUFDO29CQUNEQyxNQUFNLEVBQUUsQ0FBTztvQkFDZkMsS0FBSyxFQUFFLENBQU07b0JBQ2JDLE1BQU0sRUFBRSxDQUFNO29CQUNkQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsU0FBUyxFQUFFLENBQTJFO2dCQUN4RixDQUFDO2dCQUNEWCxPQUFPLEVBQUUsUUFBUTtvQkFBRm5CLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLEtBQUs7OztnR0FFaENQLHNEQUFJO3dCQUNIUSxVQUFVLEVBQUUsQ0FBQzs0QkFDWDhCLEtBQUssRUFBRXBDLHNFQUFxQzs0QkFDNUNxQyxVQUFVLEVBQUUsQ0FBTTt3QkFDcEIsQ0FBQztnREFDRixDQUVEOzs7Ozs7Z0dBQ0N6QyxxREFBRzt3QkFDRjBDLEdBQUcsRUFBQyxDQUFJO3dCQUNSaEMsVUFBVSxFQUFFLENBQUM7NEJBQ1hNLE9BQU8sRUFBRSxDQUFNOzRCQUNmMkIsUUFBUSxFQUFFLENBQU07NEJBQ2hCekIsY0FBYyxFQUFFLENBQWU7NEJBQy9CMEIsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFVBQVUsRUFBRSxDQUFNOzRCQUNsQkMsUUFBUSxFQUFFLENBQVE7d0JBQ3BCLENBQUM7a0NBRUExQyxzREFBc0IsQ0FBQyxRQUFRLENBQVA2QyxPQUFPOzBDQUM5QixNQUFNLCtEQUFML0Msc0RBQUk7Z0NBQ0gwQixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7b0NBQ2QsRUFBcUU7b0NBQ3JFLEVBQUUsRUFBRXNCLE9BQU8sQ0FBQzVDLEtBQUssQ0FBQzZDLGNBQWMsR0FBRyxDQUFDO3dDQUNsQzdDLEtBQUssQ0FBQzZDLGNBQWMsQ0FBQ0YsT0FBTztvQ0FDOUIsQ0FBQztnQ0FDSCxDQUFDO2dDQUNEUCxHQUFHLEVBQUMsQ0FBSTtnQ0FDUmhDLFVBQVUsRUFBRSxDQUFDO29DQUNYc0IsS0FBSyxFQUFFLENBQUs7b0NBQ1pGLFlBQVksRUFBRSxDQUFLO29DQUNuQlEsT0FBTyxFQUFFLENBQU07b0NBQ2ZjLEtBQUssRUFBRSxDQUFDO3dDQUNOakMsZUFBZSxFQUFFZixvRUFBb0M7b0NBQ3ZELENBQUM7b0NBQ0RvQixLQUFLLEVBQUUsQ0FBQzt3Q0FDTkwsZUFBZSxFQUFFZixvRUFBb0M7b0NBQ3ZELENBQUM7Z0NBQ0gsQ0FBQztzSEFFQUQsdURBQUs7b0NBQUNrRCxHQUFHLEVBQUVKLE9BQU87Ozs7OzsrQkFiTEEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDLENBQUM7R0F0R2U1QyxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcz9lODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIocHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAvL2JvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAvL3BhZGRpbmc6ICcwIDNweCAwIDAnLFxyXG4gICAgICAgICAgbWluV2lkdGg6ICc0MnB4JyxcclxuICAgICAgICAgIG1pbkhlaWdodDogJzQycHgnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgIC8vbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgIC8vbWFyZ2luUmlnaHQ6ICc0cHgnLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzAnLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmZ1bmRvLFxyXG4gICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnRyYW5zcGFyZW50ZS5idXR0b25CbHVlLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IGlzT3BlbiA/ICdncmF5c2NhbGUoMCknIDogJ2dyYXlzY2FsZSgxKScsXHJcbiAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgZmlsdGVyOiAnZ3JheXNjYWxlKDApJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGFiZWw9XCLwn46oXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICAgIHhzOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgIHNtOiAnMjkwcHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczMDBweCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzMwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoNCwgNCwgNSwgMC4xNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3RpY2tlcnNcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthcHBDb25maWcuc3RpY2tlcnMubWFwKChzdGlja2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tERU5UUk8gRE8gQ09NUE9ORU5URV0gQ2xpY291IG5vIHN0aWNrZXI6Jywgc3RpY2tlcik7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKHByb3BzLm9uU3RpY2tlckNsaWNrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uU3RpY2tlckNsaWNrKHN0aWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIiBrZXk9e3N0aWNrZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N0aWNrZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJJbWFnZSIsImFwcENvbmZpZyIsIkJ1dHRvblNlbmRTdGlja2VyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW5TdGF0ZSIsInN0eWxlU2hlZXQiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwidHJhbnNwYXJlbnRlIiwiZnVuZG8iLCJob3ZlciIsImJ1dHRvbkJsdWUiLCJmaWx0ZXIiLCJsYWJlbCIsIm9uQ2xpY2siLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwibmV1dHJhbHMiLCJ3aWR0aCIsInhzIiwic20iLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0YWciLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJzdGlja2VycyIsIm1hcCIsInN0aWNrZXIiLCJCb29sZWFuIiwib25TdGlja2VyQ2xpY2siLCJmb2N1cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});