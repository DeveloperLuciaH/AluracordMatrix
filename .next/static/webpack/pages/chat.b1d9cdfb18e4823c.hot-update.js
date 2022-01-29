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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    marginRight: '4px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.transparente.fundo,\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.transparente.buttonBlue,\n                        filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                        hover: {\n                            filter: 'grayscale(0)'\n                        }\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '100px',\n                        sm: '50px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ProjetosGitHub\\\\AluracordMatriz\\\\AluracordMatrix\\\\src\\\\components\\\\ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxTQUFTTSxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7OztJQUN4QyxHQUFLLENBQTBCUCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBRSxRQUF6Q1MsTUFBTSxHQUFrQlQsR0FBa0IsS0FBbENVLFlBQVksR0FBSVYsR0FBa0I7SUFFakQsTUFBTSw2RUFDSEMscURBQUc7UUFDRlUsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQVU7UUFDdEIsQ0FBQzs7d0ZBRUFWLHdEQUFNO2dCQUNMUyxVQUFVLEVBQUUsQ0FBQztvQkFDWEUsWUFBWSxFQUFFLENBQUs7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBVztvQkFDcEJDLFFBQVEsRUFBRSxDQUFNO29CQUNoQkMsU0FBUyxFQUFFLENBQU07b0JBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsV0FBVyxFQUFFLENBQUs7b0JBQ2xCQyxVQUFVLEVBQUUsQ0FBRztvQkFDZkMsT0FBTyxFQUFFLENBQU07b0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO29CQUNwQkMsY0FBYyxFQUFFLENBQVE7b0JBQ3hCQyxlQUFlLEVBQUVuQix5RUFBeUM7b0JBQzFEd0IsS0FBSyxFQUFFLENBQUM7d0JBQ05MLGVBQWUsRUFBRW5CLDhFQUE4Qzt3QkFDL0QwQixNQUFNLEVBQUV0QixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO3dCQUNoRG9CLEtBQUssRUFBRSxDQUFDOzRCQUNORSxNQUFNLEVBQUUsQ0FBYzt3QkFDeEIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQ0RDLEtBQUssRUFBQyxDQUFHO2dCQUNUQyxPQUFPLEVBQUUsUUFBUTtvQkFBRnZCLE1BQU0sQ0FBTkEsWUFBWSxFQUFFRCxNQUFNOzs7Ozs7O1lBRXBDQSxNQUFNLGdGQUNKUixxREFBRztnQkFDRlUsVUFBVSxFQUFFLENBQUM7b0JBQ1hVLE9BQU8sRUFBRSxDQUFNO29CQUNmYSxhQUFhLEVBQUUsQ0FBUTtvQkFDdkJyQixZQUFZLEVBQUUsQ0FBSztvQkFDbkJELFFBQVEsRUFBRSxDQUFVO29CQUNwQlksZUFBZSxFQUFFbkIsb0VBQW9DO29CQUNyRCtCLEtBQUssRUFBRSxDQUFDO3dCQUNOQyxFQUFFLEVBQUUsQ0FBTzt3QkFDWEMsRUFBRSxFQUFFLENBQU07b0JBQ1osQ0FBQztvQkFDREMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLEtBQUssRUFBRSxDQUFNO29CQUNiQyxNQUFNLEVBQUUsQ0FBTTtvQkFDZDNCLE9BQU8sRUFBRSxDQUFNO29CQUNmNEIsU0FBUyxFQUFFLENBQTJFO2dCQUN4RixDQUFDO2dCQUNEVCxPQUFPLEVBQUUsUUFBUTtvQkFBRnZCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDLEtBQUs7OztnR0FFaENQLHNEQUFJO3dCQUNIUSxVQUFVLEVBQUUsQ0FBQzs0QkFDWGdDLEtBQUssRUFBRXRDLHNFQUFxQzs0QkFDNUN1QyxVQUFVLEVBQUUsQ0FBTTt3QkFDcEIsQ0FBQztrQ0FDRixDQUVEOzs7Ozs7Z0dBQ0MzQyxxREFBRzt3QkFDRjRDLEdBQUcsRUFBQyxDQUFJO3dCQUNSbEMsVUFBVSxFQUFFLENBQUM7NEJBQ1hVLE9BQU8sRUFBRSxDQUFNOzRCQUNmeUIsUUFBUSxFQUFFLENBQU07NEJBQ2hCdkIsY0FBYyxFQUFFLENBQWU7NEJBQy9Cd0IsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFVBQVUsRUFBRSxDQUFNOzRCQUNsQkMsUUFBUSxFQUFFLENBQVE7d0JBQ3BCLENBQUM7a0NBRUE1QyxzREFBc0IsQ0FBQyxRQUFRLENBQVArQyxPQUFPOzBDQUM5QixNQUFNLCtEQUFMakQsc0RBQUk7Z0NBQ0g4QixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7b0NBQ2QsRUFBcUU7b0NBQ3JFLEVBQUUsRUFBRW9CLE9BQU8sQ0FBQzlDLEtBQUssQ0FBQytDLGNBQWMsR0FBRyxDQUFDO3dDQUNsQy9DLEtBQUssQ0FBQytDLGNBQWMsQ0FBQ0YsT0FBTztvQ0FDOUIsQ0FBQztnQ0FDSCxDQUFDO2dDQUNEUCxHQUFHLEVBQUMsQ0FBSTtnQ0FDUmxDLFVBQVUsRUFBRSxDQUFDO29DQUNYeUIsS0FBSyxFQUFFLENBQUs7b0NBQ1p2QixZQUFZLEVBQUUsQ0FBSztvQ0FDbkJDLE9BQU8sRUFBRSxDQUFNO29DQUNmeUMsS0FBSyxFQUFFLENBQUM7d0NBQ04vQixlQUFlLEVBQUVuQixvRUFBb0M7b0NBQ3ZELENBQUM7b0NBQ0R3QixLQUFLLEVBQUUsQ0FBQzt3Q0FDTkwsZUFBZSxFQUFFbkIsb0VBQW9DO29DQUN2RCxDQUFDO2dDQUNILENBQUM7c0hBRUFELHVEQUFLO29DQUFDb0QsR0FBRyxFQUFFSixPQUFPOzs7Ozs7K0JBYkxBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJyQyxDQUFDO0dBdEdlOUMsaUJBQWlCO0tBQWpCQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VuZFN0aWNrZXIuanM/ZTg0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvblNlbmRTdGlja2VyKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3BlblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIHBhZGRpbmc6ICcwIDNweCAwIDAnLFxyXG4gICAgICAgICAgbWluV2lkdGg6ICc1MHB4JyxcclxuICAgICAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzRweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMCcsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy50cmFuc3BhcmVudGUuZnVuZG8sXHJcbiAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmJ1dHRvbkJsdWUsXHJcbiAgICAgICAgICAgIGZpbHRlcjogaXNPcGVuID8gJ2dyYXlzY2FsZSgwKScgOiAnZ3JheXNjYWxlKDEpJyxcclxuICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICBmaWx0ZXI6ICdncmF5c2NhbGUoMCknLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYWJlbD1cIvCfmItcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TdGF0ZSghaXNPcGVuKX1cclxuICAgICAgLz5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgeHM6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgc206ICc1MHB4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxyXG4gICAgICAgICAgICByaWdodDogJzMwcHgnLFxyXG4gICAgICAgICAgICBib3R0b206ICczMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDQsIDQsIDUsIDAuMTUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggOHB4IDE2cHggMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0aWNrZXJzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHRhZz1cInVsXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXBwQ29uZmlnLnN0aWNrZXJzLm1hcCgoc3RpY2tlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbREVOVFJPIERPIENPTVBPTkVOVEVdIENsaWNvdSBubyBzdGlja2VyOicsIHN0aWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihwcm9wcy5vblN0aWNrZXJDbGljaykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblN0aWNrZXJDbGljayhzdGlja2VyKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cImxpXCIga2V5PXtzdGlja2VyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdGlja2VyfSAvPlxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiSW1hZ2UiLCJhcHBDb25maWciLCJCdXR0b25TZW5kU3RpY2tlciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuU3RhdGUiLCJzdHlsZVNoZWV0IiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInRyYW5zcGFyZW50ZSIsImZ1bmRvIiwiaG92ZXIiLCJidXR0b25CbHVlIiwiZmlsdGVyIiwibGFiZWwiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsIm5ldXRyYWxzIiwid2lkdGgiLCJ4cyIsInNtIiwiaGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0YWciLCJmbGV4V3JhcCIsImZsZXgiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJzdGlja2VycyIsIm1hcCIsInN0aWNrZXIiLCJCb29sZWFuIiwib25TdGlja2VyQ2xpY2siLCJmb2N1cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.js\n");

/***/ })

});