webpackHotUpdate_N_E("pages/project/[id]",{

/***/ "./pages/project/[id].tsx":
/*!********************************!*\
  !*** ./pages/project/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ProjectPage.module.sass */ \"./styles/ProjectPage.module.sass\");\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/wings_bg.jpg */ \"./images/wings_bg.jpg\");\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/wings_logo.svg */ \"./images/wings_logo.svg\");\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/project_check_down.svg */ \"./images/project_check_down.svg\");\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/project_check_down_small.svg */ \"./images/project_check_down_small.svg\");\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/siteen-restart-frontend/pages/project/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // temp project bg\n\n\n\n\n\n\n\n\n\nvar ProjectPage = function ProjectPage(_ref) {\n  _s();\n\n  var serverProject = _ref.project;\n  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(serverProject),\n      project = _useState[0],\n      setProject = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(function () {\n    var loadProject = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var response, projectData;\n        return _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://localhost:8289/v1/project/\".concat(router.query.id));\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                projectData = _context.sent;\n                setProject(projectData.response[0]);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function loadProject() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    if (!serverProject) {\n      loadProject();\n    }\n  }, []);\n\n  var scroll = function scroll(ref) {\n    ref.current.scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  if (!project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      style: {\n        backgroundImage: \"url(\".concat(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n      },\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_page_header,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_info,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n            alt: 'Brand logo'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_type,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: project.ordering_type\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: project.project_tags.join(' ')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            scroll(myRef);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_big_device,\n            src: _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_small_device,\n            src: _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      ref: myRef,\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_data,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.about,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u041F\\u0440\\u043E \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0456\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: project.about_project\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.tasks,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0456\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: project.project_tasks.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: [\"\\xB7 \", t]\n              }, t, true, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.results,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0438\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: project.result_link[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: project.result_link[1]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_reference,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: project.project_name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.iframe_container,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              children: \"Coming soon ...\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section_offer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Did you like the project?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Fill out the application and we will contact you to discuss cooperation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"btn\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: \"Consultation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ProjectPage, \"SWGvMyPK8z60HeYxeOpi8rBzyIk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = ProjectPage;\n\nProjectPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {\n    var query, req, response, project;\n    return _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            query = _ref3.query, req = _ref3.req;\n\n            if (req) {\n              _context2.next = 3;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              project: null\n            });\n\n          case 3:\n            _context2.next = 5;\n            return fetch(\"http://localhost:8289/v1/project/\".concat(query.id));\n\n          case 5:\n            response = _context2.sent;\n            _context2.next = 8;\n            return response.json();\n\n          case 8:\n            project = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              project: project.response[0]\n            });\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC8udHN4PzE0NDMiXSwibmFtZXMiOlsiUHJvamVjdFBhZ2UiLCJzZXJ2ZXJQcm9qZWN0IiwicHJvamVjdCIsIm15UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzZXRQcm9qZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibG9hZFByb2plY3QiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJyZXNwb25zZSIsImpzb24iLCJwcm9qZWN0RGF0YSIsInNjcm9sbCIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmFja2dyb3VuZEltYWdlIiwicHJvamVjdEJnIiwic3R5bGUiLCJwcm9qZWN0X3BhZ2VfaGVhZGVyIiwicHJvamVjdF9pbmZvIiwicHJvamVjdExvZ28iLCJwcm9qZWN0X3R5cGUiLCJvcmRlcmluZ190eXBlIiwicHJvamVjdF90YWdzIiwiam9pbiIsImZvcl9iaWdfZGV2aWNlIiwicHJvamVjQ2hlY2tEb3duIiwiZm9yX3NtYWxsX2RldmljZSIsInByb2plY0NoZWNrRG93blNtYWxsIiwicHJvamVjdF9kYXRhIiwiYWJvdXQiLCJhYm91dF9wcm9qZWN0IiwidGFza3MiLCJwcm9qZWN0X3Rhc2tzIiwibWFwIiwidCIsInJlc3VsdHMiLCJyZXN1bHRfbGluayIsInByb2plY3RfcmVmZXJlbmNlIiwicHJvamVjdF9uYW1lIiwiaWZyYW1lX2NvbnRhaW5lciIsImN0YV9zZWN0aW9uIiwiY3RhX3NlY3Rpb25fb2ZmZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdDO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQTdCQyxPQUE2QjtB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QUR1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FFbkI7QUFDTGpELHFCQUFPLEVBQUU7QUFESixhQUZtQjs7QUFBQTtBQUFBO0FBQUEsbUJBT0xTLEtBQUssNENBQXFDQyxLQUFLLENBQUNDLEVBQTNDLEVBUEE7O0FBQUE7QUFPdEJDLG9CQVBzQjtBQUFBO0FBQUEsbUJBUU5BLFFBQVEsQ0FBQ0MsSUFBVCxFQVJNOztBQUFBO0FBUXRCYixtQkFSc0I7QUFBQSw4Q0FVckI7QUFDTEEscUJBQU8sRUFBRUEsT0FBTyxDQUFDWSxRQUFSLENBQWlCLENBQWpCO0FBREosYUFWcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZWVkLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvUHJvamVjdFBhZ2UubW9kdWxlLnNhc3MnXG4vLyB0ZW1wIHByb2plY3QgYmdcbmltcG9ydCBwcm9qZWN0QmcgZnJvbSAnLi4vLi4vaW1hZ2VzL3dpbmdzX2JnLmpwZydcbmltcG9ydCBwcm9qZWN0TG9nbyBmcm9tICcuLi8uLi9pbWFnZXMvd2luZ3NfbG9nby5zdmcnXG5pbXBvcnQgcHJvamVjQ2hlY2tEb3duIGZyb20gJy4uLy4uL2ltYWdlcy9wcm9qZWN0X2NoZWNrX2Rvd24uc3ZnJ1xuaW1wb3J0IHByb2plY0NoZWNrRG93blNtYWxsIGZyb20gJy4uLy4uL2ltYWdlcy9wcm9qZWN0X2NoZWNrX2Rvd25fc21hbGwuc3ZnJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFByb2plY3RQYWdlID0gKHsgcHJvamVjdDogc2VydmVyUHJvamVjdCB9KSA9PiB7XG4gIGNvbnN0IG15UmVmID0gdXNlUmVmKClcblxuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShzZXJ2ZXJQcm9qZWN0KVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4Mjg5L3YxL3Byb2plY3QvJHtyb3V0ZXIucXVlcnkuaWR9YFxuICAgICAgKVxuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldFByb2plY3QocHJvamVjdERhdGEucmVzcG9uc2VbMF0pXG4gICAgfVxuXG4gICAgaWYgKCFzZXJ2ZXJQcm9qZWN0KSB7XG4gICAgICBsb2FkUHJvamVjdCgpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBzY3JvbGwgPSAocmVmKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgfVxuXG4gIGlmICghcHJvamVjdCkge1xuICAgIHJldHVybiA8cD48L3A+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2plY3RCZ30pYCB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfcGFnZV9oZWFkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF9pbmZvfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0TG9nb30gYWx0PXsnQnJhbmQgbG9nbyd9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF90eXBlfT5cbiAgICAgICAgICAgICAgPGgzPntwcm9qZWN0Lm9yZGVyaW5nX3R5cGV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Byb2plY3QucHJvamVjdF90YWdzLmpvaW4oJyAnKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNjcm9sbChteVJlZilcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmZvcl9iaWdfZGV2aWNlfVxuICAgICAgICAgICAgICBzcmM9e3Byb2plY0NoZWNrRG93bn1cbiAgICAgICAgICAgICAgYWx0PSdwcm9qZWNDaGVja0Rvd24nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmZvcl9zbWFsbF9kZXZpY2V9XG4gICAgICAgICAgICAgIHNyYz17cHJvamVjQ2hlY2tEb3duU21hbGx9XG4gICAgICAgICAgICAgIGFsdD0ncHJvamVjQ2hlY2tEb3duJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIHJlZj17bXlSZWZ9IGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF9kYXRhfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0fT5cbiAgICAgICAgICAgIDxoMz7Qn9GA0L4g0LrQvtC80L/QsNC90ZbRjjwvaDM+XG4gICAgICAgICAgICA8cD57cHJvamVjdC5hYm91dF9wcm9qZWN0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFza3N9PlxuICAgICAgICAgICAgPGgzPtCX0LDQtNCw0YfRljwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LnByb2plY3RfdGFza3MubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dH0+wrcge3R9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yZXN1bHRzfT5cbiAgICAgICAgICAgIDxoMz7QoNC10LfRg9C70YzRgtCw0YLQuDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz57cHJvamVjdC5yZXN1bHRfbGlua1swXX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz57cHJvamVjdC5yZXN1bHRfbGlua1sxXX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X3JlZmVyZW5jZX0+XG4gICAgICAgICAgICA8aDE+e3Byb2plY3QucHJvamVjdF9uYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaWZyYW1lX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHsvKiA8aWZyYW1lXG4gICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3AvQnRnMWpkX0hKc1QvJ1xuICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPXswfVxuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgPGgxPkNvbWluZyBzb29uIC4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmN0YV9zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN0YV9zZWN0aW9uX29mZmVyfT5cbiAgICAgICAgICAgIDxoMj5EaWQgeW91IGxpa2UgdGhlIHByb2plY3Q/PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBGaWxsIG91dCB0aGUgYXBwbGljYXRpb24gYW5kIHdlIHdpbGwgY29udGFjdCB5b3UgdG8gZGlzY3Vzc1xuICAgICAgICAgICAgICBjb29wZXJhdGlvblxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XG4gICAgICAgICAgICAgIDxzcGFuPkNvbnN1bHRhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5Qcm9qZWN0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSwgcmVxIH0pID0+IHtcbiAgaWYgKCFyZXEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODI4OS92MS9wcm9qZWN0LyR7cXVlcnkuaWR9YClcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdDogcHJvamVjdC5yZXNwb25zZVswXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project/[id].tsx\n");

/***/ })

})