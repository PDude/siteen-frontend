webpackHotUpdate_N_E("pages/project/[id]",{

/***/ "./pages/project/[id].tsx":
/*!********************************!*\
  !*** ./pages/project/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ProjectPage.module.sass */ \"./styles/ProjectPage.module.sass\");\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/wings_bg.jpg */ \"./images/wings_bg.jpg\");\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/wings_logo.svg */ \"./images/wings_logo.svg\");\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/project_check_down.svg */ \"./images/project_check_down.svg\");\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/project_check_down_small.svg */ \"./images/project_check_down_small.svg\");\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/siteen-restart-frontend/pages/project/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // temp project bg\n\n\n\n\n\n\n\n\nvar ProjectPage = function ProjectPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      id = _ref.id;\n  //   const getProject = (projectsArr, projectId) => {\n  //     return projectsArr.filter((p) => p.id == projectId)\n  //   }\n  //   const singleProject = getProject(projects.response, id)[0]\n  var singleProject = projects.filter(function (p) {\n    return p.id == id;\n  })[0];\n  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])();\n\n  var scroll = function scroll(ref) {\n    ref.current.scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"header\", {\n      style: {\n        backgroundImage: \"url(\".concat(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n      },\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_page_header,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_info,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n            alt: 'Brand logo'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_type,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n              children: singleProject.ordering_type\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: singleProject.project_tags.join(' ')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            scroll(myRef);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_big_device,\n            src: _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_small_device,\n            src: _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      ref: myRef,\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_data,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.about,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u041F\\u0440\\u043E \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0456\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: singleProject.about_project\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.tasks,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0456\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: singleProject.project_tasks.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n                children: [\"\\xB7 \", t]\n              }, t, true, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.results,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0438\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: singleProject.result_link[0]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: singleProject.result_link[1]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_reference,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n            children: singleProject.project_name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.iframe_container\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section_offer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            children: \"Did you like the project?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: \"Fill out the application and we will contact you to discuss cooperation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"btn\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: \"Consultation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ProjectPage, \"wYF4W973D0682KeLHvb0qnH30CA=\");\n\n_c = ProjectPage;\n\nProjectPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, id, response, projects;\n    return _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            id = query.id;\n            _context.next = 4;\n            return fetch('http://localhost:8289/v1/project');\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            projects = _context.sent;\n            return _context.abrupt(\"return\", {\n              id: id,\n              projects: projects\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC8udHN4PzE0NDMiXSwibmFtZXMiOlsiUHJvamVjdFBhZ2UiLCJwcm9qZWN0cyIsImlkIiwic2luZ2xlUHJvamVjdCIsImZpbHRlciIsInAiLCJteVJlZiIsInVzZVJlZiIsInNjcm9sbCIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmFja2dyb3VuZEltYWdlIiwicHJvamVjdEJnIiwic3R5bGUiLCJwcm9qZWN0X3BhZ2VfaGVhZGVyIiwicHJvamVjdF9pbmZvIiwicHJvamVjdExvZ28iLCJwcm9qZWN0X3R5cGUiLCJvcmRlcmluZ190eXBlIiwicHJvamVjdF90YWdzIiwiam9pbiIsImZvcl9iaWdfZGV2aWNlIiwicHJvamVjQ2hlY2tEb3duIiwiZm9yX3NtYWxsX2RldmljZSIsInByb2plY0NoZWNrRG93blNtYWxsIiwicHJvamVjdF9kYXRhIiwiYWJvdXQiLCJhYm91dF9wcm9qZWN0IiwidGFza3MiLCJwcm9qZWN0X3Rhc2tzIiwibWFwIiwidCIsInJlc3VsdHMiLCJyZXN1bHRfbGluayIsInByb2plY3RfcmVmZXJlbmNlIiwicHJvamVjdF9uYW1lIiwiaWZyYW1lX2NvbnRhaW5lciIsImN0YV9zZWN0aW9uIiwiY29udGFpbmVyIiwiY3RhX3NlY3Rpb25fb2ZmZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1DLGFBQWEsR0FBR0YsUUFB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Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkVGLGVBaUZFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqRkY7QUFBQSxrQkFERjtBQXFGRCxDQXBHRDs7R0FBTXpDLFc7O0tBQUFBLFc7O0FBc0dOQSxXQUFXLENBQUMwQyxlQUFaO0FBQUEsNldBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQ3RCekMsY0FEc0IsR0FDakJ5QyxLQUFLLENBQUN6QyxFQURXO0FBQUE7QUFBQSxtQkFHTDBDLEtBQUssQ0FBQyxrQ0FBRCxDQUhBOztBQUFBO0FBR3RCQyxvQkFIc0I7QUFBQTtBQUFBLG1CQUlMQSxRQUFRLENBQUNDLElBQVQsRUFKSzs7QUFBQTtBQUl0QjdDLG9CQUpzQjtBQUFBLDZDQU1yQjtBQUNMQyxnQkFBRSxFQUFFQSxFQURDO0FBRUxELHNCQUFRLEVBQUVBO0FBRkwsYUFOcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWWVELDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvUHJvamVjdFBhZ2UubW9kdWxlLnNhc3MnXG4vLyB0ZW1wIHByb2plY3QgYmdcbmltcG9ydCBwcm9qZWN0QmcgZnJvbSAnLi4vLi4vaW1hZ2VzL3dpbmdzX2JnLmpwZydcbmltcG9ydCBwcm9qZWN0TG9nbyBmcm9tICcuLi8uLi9pbWFnZXMvd2luZ3NfbG9nby5zdmcnXG5pbXBvcnQgcHJvamVjQ2hlY2tEb3duIGZyb20gJy4uLy4uL2ltYWdlcy9wcm9qZWN0X2NoZWNrX2Rvd24uc3ZnJ1xuaW1wb3J0IHByb2plY0NoZWNrRG93blNtYWxsIGZyb20gJy4uLy4uL2ltYWdlcy9wcm9qZWN0X2NoZWNrX2Rvd25fc21hbGwuc3ZnJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmNvbnN0IFByb2plY3RQYWdlID0gKHsgcHJvamVjdHMsIGlkIH0pID0+IHtcbiAgLy8gICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RzQXJyLCBwcm9qZWN0SWQpID0+IHtcbiAgLy8gICAgIHJldHVybiBwcm9qZWN0c0Fyci5maWx0ZXIoKHApID0+IHAuaWQgPT0gcHJvamVjdElkKVxuICAvLyAgIH1cblxuICAvLyAgIGNvbnN0IHNpbmdsZVByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RzLnJlc3BvbnNlLCBpZClbMF1cblxuICBjb25zdCBzaW5nbGVQcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkID09IGlkKVswXVxuXG4gIGNvbnN0IG15UmVmID0gdXNlUmVmKClcblxuICBjb25zdCBzY3JvbGwgPSAocmVmKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvamVjdEJnfSlgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUucHJvamVjdF9wYWdlX2hlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X2luZm99PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3RMb2dvfSBhbHQ9eydCcmFuZCBsb2dvJ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X3R5cGV9PlxuICAgICAgICAgICAgICA8aDM+e3NpbmdsZVByb2plY3Qub3JkZXJpbmdfdHlwZX08L2gzPlxuICAgICAgICAgICAgICA8cD57c2luZ2xlUHJvamVjdC5wcm9qZWN0X3RhZ3Muam9pbignICcpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2Nyb2xsKG15UmVmKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZm9yX2JpZ19kZXZpY2V9XG4gICAgICAgICAgICAgIHNyYz17cHJvamVjQ2hlY2tEb3dufVxuICAgICAgICAgICAgICBhbHQ9J3Byb2plY0NoZWNrRG93bidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZm9yX3NtYWxsX2RldmljZX1cbiAgICAgICAgICAgICAgc3JjPXtwcm9qZWNDaGVja0Rvd25TbWFsbH1cbiAgICAgICAgICAgICAgYWx0PSdwcm9qZWNDaGVja0Rvd24nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24gcmVmPXtteVJlZn0gY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X2RhdGF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXR9PlxuICAgICAgICAgICAgPGgzPtCf0YDQviDQutC+0LzQv9Cw0L3RltGOPC9oMz5cbiAgICAgICAgICAgIDxwPntzaW5nbGVQcm9qZWN0LmFib3V0X3Byb2plY3R9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50YXNrc30+XG4gICAgICAgICAgICA8aDM+0JfQsNC00LDRh9GWPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3NpbmdsZVByb2plY3QucHJvamVjdF90YXNrcy5tYXAoKHQpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt0fT7CtyB7dH08L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJlc3VsdHN9PlxuICAgICAgICAgICAgPGgzPtCg0LXQt9GD0LvRjNGC0LDRgtC4PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPntzaW5nbGVQcm9qZWN0LnJlc3VsdF9saW5rWzBdfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPntzaW5nbGVQcm9qZWN0LnJlc3VsdF9saW5rWzFdfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfcmVmZXJlbmNlfT5cbiAgICAgICAgICAgIDxoMT57c2luZ2xlUHJvamVjdC5wcm9qZWN0X25hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pZnJhbWVfY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgey8qIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2dhbGxlcnkvMTAxNzE0ODgzL1VtYW1pLURlbGl2ZXJ5LVNlcnZpY2U/aWZyYW1lPTEmYW1wO2lsbzA9MSdcbiAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj0nZmFsc2UnXG4gICAgICAgICAgICAgICAgc2FuZGJveD0nJ1xuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuY3RhX3NlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3RhX3NlY3Rpb25fb2ZmZXJ9PlxuICAgICAgICAgICAgPGgyPkRpZCB5b3UgbGlrZSB0aGUgcHJvamVjdD88L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZpbGwgb3V0IHRoZSBhcHBsaWNhdGlvbiBhbmQgd2Ugd2lsbCBjb250YWN0IHlvdSB0byBkaXNjdXNzXG4gICAgICAgICAgICAgIGNvb3BlcmF0aW9uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz5cbiAgICAgICAgICAgICAgPHNwYW4+Q29uc3VsdGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG5cblByb2plY3RQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgaWQgPSBxdWVyeS5pZFxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODI4OS92MS9wcm9qZWN0JylcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZCxcbiAgICBwcm9qZWN0czogcHJvamVjdHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/[id].tsx\n");

/***/ })

})