webpackHotUpdate_N_E("pages/project/[id]",{

/***/ "./pages/project/[id].tsx":
/*!********************************!*\
  !*** ./pages/project/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ProjectPage.module.sass */ \"./styles/ProjectPage.module.sass\");\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/wings_bg.jpg */ \"./images/wings_bg.jpg\");\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/wings_logo.svg */ \"./images/wings_logo.svg\");\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/project_check_down.svg */ \"./images/project_check_down.svg\");\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/project_check_down_small.svg */ \"./images/project_check_down_small.svg\");\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/siteen-restart-frontend/pages/project/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // temp project bg\n\n\n\n\n\n\n\n\nvar ProjectPage = function ProjectPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      id = _ref.id;\n\n  var getProject = function getProject(projectsArr, projectId) {\n    return projectsArr.filter(function (p) {\n      return p.id == projectId;\n    });\n  };\n\n  var singleProject = getProject(projects.response, id)[0];\n  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])();\n\n  var scroll = function scroll(ref) {\n    ref.current.scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"header\", {\n      style: {\n        backgroundImage: \"url(\".concat(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n      },\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_page_header,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_info,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n            alt: 'Brand logo'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_type,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n              children: singleProject.ordering_type\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: singleProject.project_tags.join(' ')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            scroll(myRef);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_big_device,\n            src: _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_small_device,\n            src: _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      ref: myRef,\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_data,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.about,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u041F\\u0440\\u043E \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0456\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: singleProject.about_project\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.tasks,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0456\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: singleProject.project_tasks.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n                children: [\"\\xB7 \", t]\n              }, t, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.results,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0438\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: singleProject.result_link[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: singleProject.result_link[1]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_reference,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n            children: \"\\u0421\\u0430\\u0439\\u0442\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.iframe_container\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section_offer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            children: \"Did you like the project?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: \"Fill out the application and we will contact you to discuss cooperation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"btn\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: \"Consultation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ProjectPage, \"wYF4W973D0682KeLHvb0qnH30CA=\");\n\n_c = ProjectPage;\n\nProjectPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, id, response, projects;\n    return _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            id = query.id;\n            _context.next = 4;\n            return fetch('http://localhost:8289/v1/project');\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            projects = _context.sent;\n            return _context.abrupt(\"return\", {\n              id: id,\n              projects: projects\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC8udHN4PzE0NDMiXSwibmFtZXMiOlsiUHJvamVjdFBhZ2UiLCJwcm9qZWN0cyIsImlkIiwiZ2V0UHJvamVjdCIsInByb2plY3RzQXJyIiwicHJvamVjdElkIiwiZmlsdGVyIiwicCIsInNpbmdsZVByb2plY3QiLCJyZXNwb25zZSIsIm15UmVmIiwidXNlUmVmIiwic2Nyb2xsIiwicmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9qZWN0QmciLCJzdHlsZSIsInByb2plY3RfcGFnZV9oZWFkZXIiLCJwcm9qZWN0X2luZm8iLCJwcm9qZWN0TG9nbyIsInByb2plY3RfdHlwZSIsIm9yZGVyaW5nX3R5cGUiLCJwcm9qZWN0X3RhZ3MiLCJqb2luIiwiZm9yX2JpZ19kZXZpY2UiLCJwcm9qZWNDaGVja0Rvd24iLCJmb3Jfc21hbGxfZGV2aWNlIiwicHJvamVjQ2hlY2tEb3duU21hbGwiLCJwcm9qZWN0X2RhdGEiLCJhYm91dCIsImFib3V0X3Byb2plY3QiLCJ0YXNrcyIsInByb2plY3RfdGFza3MiLCJtYXAiLCJ0IiwicmVzdWx0cyIsInJlc3VsdF9saW5rIiwicHJvamVjdF9yZWZlcmVuY2UiLCJpZnJhbWVfY29udGFpbmVyIiwiY3RhX3NlY3Rpb24iLCJjb250YWluZXIiLCJjdGFfc2VjdGlvbl9vZmZlciIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUzs7QUFDeEMsTUFBTUMsVUFBVSxHQUFH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Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUU7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuRUYsZUFpRkUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpGRjtBQUFBLGtCQURGO0FBcUZELENBbEdEOztHQUFNNUMsVzs7S0FBQUEsVzs7QUFvR05BLFdBQVcsQ0FBQzZDLGVBQVo7QUFBQSw2V0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFDdEI1QyxjQURzQixHQUNqQjRDLEtBQUssQ0FBQzVDLEVBRFc7QUFBQTtBQUFBLG1CQUdMNkMsS0FBSyxDQUFDLGtDQUFELENBSEE7O0FBQUE7QUFHdEJ0QyxvQkFIc0I7QUFBQTtBQUFBLG1CQUlMQSxRQUFRLENBQUN1QyxJQUFULEVBSks7O0FBQUE7QUFJdEIvQyxvQkFKc0I7QUFBQSw2Q0FNckI7QUFDTEMsZ0JBQUUsRUFBRUEsRUFEQztBQUVMRCxzQkFBUSxFQUFFQTtBQUZMLGFBTnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVllRCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3QvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1Byb2plY3RQYWdlLm1vZHVsZS5zYXNzJ1xuLy8gdGVtcCBwcm9qZWN0IGJnXG5pbXBvcnQgcHJvamVjdEJnIGZyb20gJy4uLy4uL2ltYWdlcy93aW5nc19iZy5qcGcnXG5pbXBvcnQgcHJvamVjdExvZ28gZnJvbSAnLi4vLi4vaW1hZ2VzL3dpbmdzX2xvZ28uc3ZnJ1xuaW1wb3J0IHByb2plY0NoZWNrRG93biBmcm9tICcuLi8uLi9pbWFnZXMvcHJvamVjdF9jaGVja19kb3duLnN2ZydcbmltcG9ydCBwcm9qZWNDaGVja0Rvd25TbWFsbCBmcm9tICcuLi8uLi9pbWFnZXMvcHJvamVjdF9jaGVja19kb3duX3NtYWxsLnN2ZydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5jb25zdCBQcm9qZWN0UGFnZSA9ICh7IHByb2plY3RzLCBpZCB9KSA9PiB7XG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdHNBcnIsIHByb2plY3RJZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0c0Fyci5maWx0ZXIoKHApID0+IHAuaWQgPT0gcHJvamVjdElkKVxuICB9XG5cbiAgY29uc3Qgc2luZ2xlUHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdHMucmVzcG9uc2UsIGlkKVswXVxuXG4gIGNvbnN0IG15UmVmID0gdXNlUmVmKClcblxuICBjb25zdCBzY3JvbGwgPSAocmVmKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvamVjdEJnfSlgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF9wYWdlX2hlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X2luZm99PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3RMb2dvfSBhbHQ9eydCcmFuZCBsb2dvJ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X3R5cGV9PlxuICAgICAgICAgICAgICA8aDM+e3NpbmdsZVByb2plY3Qub3JkZXJpbmdfdHlwZX08L2gzPlxuICAgICAgICAgICAgICA8cD57c2luZ2xlUHJvamVjdC5wcm9qZWN0X3RhZ3Muam9pbignICcpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2Nyb2xsKG15UmVmKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZm9yX2JpZ19kZXZpY2V9XG4gICAgICAgICAgICAgIHNyYz17cHJvamVjQ2hlY2tEb3dufVxuICAgICAgICAgICAgICBhbHQ9J3Byb2plY0NoZWNrRG93bidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZm9yX3NtYWxsX2RldmljZX1cbiAgICAgICAgICAgICAgc3JjPXtwcm9qZWNDaGVja0Rvd25TbWFsbH1cbiAgICAgICAgICAgICAgYWx0PSdwcm9qZWNDaGVja0Rvd24nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24gcmVmPXtteVJlZn0gY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X2RhdGF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXR9PlxuICAgICAgICAgICAgPGgzPtCf0YDQviDQutC+0LzQv9Cw0L3RltGOPC9oMz5cbiAgICAgICAgICAgIDxwPntzaW5nbGVQcm9qZWN0LmFib3V0X3Byb2plY3R9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50YXNrc30+XG4gICAgICAgICAgICA8aDM+0JfQsNC00LDRh9GWPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3NpbmdsZVByb2plY3QucHJvamVjdF90YXNrcy5tYXAoKHQpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt0fT7CtyB7dH08L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJlc3VsdHN9PlxuICAgICAgICAgICAgPGgzPtCg0LXQt9GD0LvRjNGC0LDRgtC4PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPntzaW5nbGVQcm9qZWN0LnJlc3VsdF9saW5rWzBdfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPntzaW5nbGVQcm9qZWN0LnJlc3VsdF9saW5rWzFdfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfcmVmZXJlbmNlfT5cbiAgICAgICAgICAgIDxoMT7QodCw0LnRgjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaWZyYW1lX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHsvKiA8aWZyYW1lXG4gICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3d3dy5iZWhhbmNlLm5ldC9nYWxsZXJ5LzEwMTcxNDg4My9VbWFtaS1EZWxpdmVyeS1TZXJ2aWNlP2lmcmFtZT0xJmFtcDtpbG8wPTEnXG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIHNhbmRib3g9JydcbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmN0YV9zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN0YV9zZWN0aW9uX29mZmVyfT5cbiAgICAgICAgICAgIDxoMj5EaWQgeW91IGxpa2UgdGhlIHByb2plY3Q/PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBGaWxsIG91dCB0aGUgYXBwbGljYXRpb24gYW5kIHdlIHdpbGwgY29udGFjdCB5b3UgdG8gZGlzY3Vzc1xuICAgICAgICAgICAgICBjb29wZXJhdGlvblxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XG4gICAgICAgICAgICAgIDxzcGFuPkNvbnN1bHRhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5Qcm9qZWN0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGlkID0gcXVlcnkuaWRcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgyODkvdjEvcHJvamVjdCcpXG4gIGNvbnN0IHByb2plY3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQsXG4gICAgcHJvamVjdHM6IHByb2plY3RzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/project/[id].tsx\n");

/***/ })

})