webpackHotUpdate_N_E("pages/project/[id]",{

/***/ "./pages/project/[id].tsx":
/*!********************************!*\
  !*** ./pages/project/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ProjectPage.module.sass */ \"./styles/ProjectPage.module.sass\");\n/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/wings_bg.jpg */ \"./images/wings_bg.jpg\");\n/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/wings_logo.svg */ \"./images/wings_logo.svg\");\n/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/project_check_down.svg */ \"./images/project_check_down.svg\");\n/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/project_check_down_small.svg */ \"./images/project_check_down_small.svg\");\n/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/applestock/macbook-documents/siteen-restart/siteen-restart-frontend/pages/project/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // temp project bg\n\n\n\n\n\n\n\n\nvar ProjectPage = function ProjectPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      id = _ref.id;\n\n  var getProject = function getProject(projectsArr, projectId) {\n    return projectsArr.filter(function (p) {\n      return p.id == projectId;\n    });\n  };\n\n  var singleProject = getProject(projects.response, id);\n  console.log();\n  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])();\n\n  var scroll = function scroll(ref) {\n    ref.current.scrollIntoView({\n      behavior: 'smooth'\n    });\n  };\n\n  var tasks = ['Розробити дизайн сайту.', 'Підтримувати позиціонування і фірмовий стиль.', 'Ознайомити потенційних клієнтів із проектом.', \"Ненав'язливо стимулювати відвідувачів на завантаження додатку.\", 'Реалізувати зручну інструктію користування сервісом.', 'Показати технологічність компанії.', \"Налагодити зворотний зв'язок з клієнтами.\", 'Реалізувати функціонал сайту на ...', 'Відфотографувати продукцію для подальшого упакування проекту.', 'Відзняти промо-відео проекту.', 'Створити контент-план просування Instagram сторінки.']; //   if (!singleProject) {\n  //       return <p>La</p>\n  //   }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"header\", {\n      style: {\n        backgroundImage: \"url(\".concat(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n      },\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_page_header,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_info,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n            alt: 'Brand logo'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_type,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n              children: singleProject.ordering_type\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              children: \"Landing Page \\u043F\\u0440\\u043E\\u0435\\u043A\\u0442\\u0443. \\u0424\\u043E\\u0442\\u043E\\u0437\\u0439\\u043E\\u043C\\u043A\\u0430. \\u041F\\u0440\\u043E\\u043C\\u043E-\\u0432\\u0456\\u0434\\u0435\\u043E. \\u0412\\u0435\\u0434\\u0435\\u043D\\u043D\\u044F \\u0441\\u043E\\u0446-\\u043C\\u0435\\u0440\\u0435\\u0436.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            scroll(myRef);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_big_device,\n            src: _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.for_small_device,\n            src: _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n            alt: \"projecCheckDown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      ref: myRef,\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_data,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.about,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u041F\\u0440\\u043E \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0456\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: \"\\u0421\\u0442\\u0443\\u0434\\u0456\\u044F \\u0430\\u0440\\u0442\\u0456\\u0445\\u0435\\u043A\\u0442\\u0443\\u0440\\u0438 \\u0456 \\u0434\\u0438\\u0437\\u0430\\u0439\\u043D\\u0443 \\u0456\\u043D\\u0442\\u0435\\u0440\\u2019\\u0454\\u0440\\u0443 \\u041D\\u0430\\u0442\\u0430\\u043B\\u0456\\u0457 \\u0413\\u0443\\u0431\\u0438\\u0448 \\u0443 \\u041B\\u044C\\u0432\\u043E\\u0432\\u0456. \\u041A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0456\\u044F \\u0440\\u043E\\u0437\\u0440\\u043E\\u0431\\u043B\\u044F\\u0454 \\u0456 \\u0440\\u0435\\u0430\\u043B\\u0456\\u0437\\u043E\\u0432\\u0443\\u0454 \\u0434\\u0438\\u0437\\u0430\\u0439\\u043D \\u0436\\u0438\\u0442\\u043B\\u043E\\u0432\\u0438\\u0445 \\u0442\\u0430 \\u0456\\u043D\\u0448\\u0438\\u0445 \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E\\u0440\\u0456\\u0432, \\u0448\\u0438\\u0440\\u043E\\u043A\\u043E \\u0441\\u043F\\u0435\\u0446\\u0456\\u0430\\u043B\\u0456\\u0437\\u0443\\u0454\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u043E\\u043C\\u0443 \\u0456\\u043D\\u0442\\u0435\\u0440\\u2019\\u0454\\u0440\\u0456 \\u0456 \\u043D\\u0430\\u0434\\u0430\\u0454 \\u0441\\u0432\\u043E\\u0457 \\u043F\\u043E\\u0441\\u043B\\u0443\\u0433\\u0438 \\u043D\\u0435 \\u043B\\u0438\\u0448\\u0435 \\u0443 \\u041B\\u044C\\u0432\\u043E\\u0432\\u0456, \\u0430 \\u0443 \\u0431\\u0443\\u0434\\u044C \\u044F\\u043A\\u0443 \\u0442\\u043E\\u0447\\u043A\\u0443 \\u0441\\u0432\\u0456\\u0442\\u0443.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.tasks,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0456\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: tasks.map(function (t) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n                children: [\"\\xB7 \", t]\n              }, t, true, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.results,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n            children: \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0438\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"hubysh.com\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"@natalihubysh\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_reference,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n            children: \"\\u0421\\u0430\\u0439\\u0442\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.iframe_container\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.cta_section_offer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            children: \"Did you like the project?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: \"Fill out the application and we will contact you to discuss cooperation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"btn\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: \"Consultation\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ProjectPage, \"wYF4W973D0682KeLHvb0qnH30CA=\");\n\n_c = ProjectPage;\n\nProjectPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, id, response, projects;\n    return _Users_applestock_macbook_documents_siteen_restart_siteen_restart_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            id = query.id;\n            _context.next = 4;\n            return fetch('http://localhost:8289/v1/project');\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            projects = _context.sent;\n            return _context.abrupt(\"return\", {\n              id: id,\n              projects: projects\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC8udHN4PzE0NDMiXSwibmFtZXMiOlsiUHJvamVjdFBhZ2UiLCJwcm9qZWN0cyIsImlkIiwiZ2V0UHJvamVjdCIsInByb2plY3RzQXJyIiwicHJvamVjdElkIiwiZmlsdGVyIiwicCIsInNpbmdsZVByb2plY3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJteVJlZiIsInVzZVJlZiIsInNjcm9sbCIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidGFza3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9qZWN0QmciLCJzdHlsZSIsInByb2plY3RfcGFnZV9oZWFkZXIiLCJwcm9qZWN0X2luZm8iLCJwcm9qZWN0TG9nbyIsInByb2plY3RfdHlwZSIsIm9yZGVyaW5nX3R5cGUiLCJmb3JfYmlnX2RldmljZSIsInByb2plY0NoZWNrRG93biIsImZvcl9zbWFsbF9kZXZpY2UiLCJwcm9qZWNDaGVja0Rvd25TbWFsbCIsInByb2plY3RfZGF0YSIsImFib3V0IiwibWFwIiwidCIsInJlc3VsdHMiLCJwcm9qZWN0X3JlZmVyZW5jZSIsImlmcmFtZV9jb250YWluZXIiLCJjdGFfc2VjdGlvbiIsImNvbnRhaW5lciIsImN0YV9zZWN0aW9uX29mZmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUN4QyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxXQUFELEVBQWNDLFNBQWQsRUFBNEI7QUFDN0MsV0FBT0Qs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QUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUU7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzRUYsZUF5RkUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpGRjtBQUFBLGtCQURGO0FBNkZELENBN0hEOztHQUFNekMsVzs7S0FBQUEsVzs7QUErSE5BLFdBQVcsQ0FBQzBDLGVBQVo7QUFBQSw2V0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFDdEJ6QyxjQURzQixHQUNqQnlDLEtBQUssQ0FBQ3pDLEVBRFc7QUFBQTtBQUFBLG1CQUdMMEMsS0FBSyxDQUFDLGtDQUFELENBSEE7O0FBQUE7QUFHdEJuQyxvQkFIc0I7QUFBQTtBQUFBLG1CQUlMQSxRQUFRLENBQUNvQyxJQUFULEVBSks7O0FBQUE7QUFJdEI1QyxvQkFKc0I7QUFBQSw2Q0FNckI7QUFDTEMsZ0JBQUUsRUFBRUEsRUFEQztBQUVMRCxzQkFBUSxFQUFFQTtBQUZMLGFBTnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVllRCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3QvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1Byb2plY3RQYWdlLm1vZHVsZS5zYXNzJ1xuLy8gdGVtcCBwcm9qZWN0IGJnXG5pbXBvcnQgcHJvamVjdEJnIGZyb20gJy4uLy4uL2ltYWdlcy93aW5nc19iZy5qcGcnXG5pbXBvcnQgcHJvamVjdExvZ28gZnJvbSAnLi4vLi4vaW1hZ2VzL3dpbmdzX2xvZ28uc3ZnJ1xuaW1wb3J0IHByb2plY0NoZWNrRG93biBmcm9tICcuLi8uLi9pbWFnZXMvcHJvamVjdF9jaGVja19kb3duLnN2ZydcbmltcG9ydCBwcm9qZWNDaGVja0Rvd25TbWFsbCBmcm9tICcuLi8uLi9pbWFnZXMvcHJvamVjdF9jaGVja19kb3duX3NtYWxsLnN2ZydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5jb25zdCBQcm9qZWN0UGFnZSA9ICh7IHByb2plY3RzLCBpZCB9KSA9PiB7XG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdHNBcnIsIHByb2plY3RJZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0c0Fyci5maWx0ZXIoKHApID0+IHAuaWQgPT0gcHJvamVjdElkKVxuICB9XG5cbiAgY29uc3Qgc2luZ2xlUHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdHMucmVzcG9uc2UsIGlkKSAgIFxuICBjb25zb2xlLmxvZygpXG5cbiAgY29uc3QgbXlSZWYgPSB1c2VSZWYoKVxuXG4gIGNvbnN0IHNjcm9sbCA9IChyZWYpID0+IHtcbiAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICB9XG5cbiAgY29uc3QgdGFza3MgPSBbXG4gICAgJ9Cg0L7Qt9GA0L7QsdC40YLQuCDQtNC40LfQsNC50L0g0YHQsNC50YLRgy4nLFxuICAgICfQn9GW0LTRgtGA0LjQvNGD0LLQsNGC0Lgg0L/QvtC30LjRhtGW0L7QvdGD0LLQsNC90L3RjyDRliDRhNGW0YDQvNC+0LLQuNC5INGB0YLQuNC70YwuJyxcbiAgICAn0J7Qt9C90LDQudC+0LzQuNGC0Lgg0L/QvtGC0LXQvdGG0ZbQudC90LjRhSDQutC70ZbRlNC90YLRltCyINGW0Lcg0L/RgNC+0LXQutGC0L7QvC4nLFxuICAgIFwi0J3QtdC90LDQsifRj9C30LvQuNCy0L4g0YHRgtC40LzRg9C70Y7QstCw0YLQuCDQstGW0LTQstGW0LTRg9Cy0LDRh9GW0LIg0L3QsCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LTQvtC00LDRgtC60YMuXCIsXG4gICAgJ9Cg0LXQsNC70ZbQt9GD0LLQsNGC0Lgg0LfRgNGD0YfQvdGDINGW0L3RgdGC0YDRg9C60YLRltGOINC60L7RgNC40YHRgtGD0LLQsNC90L3RjyDRgdC10YDQstGW0YHQvtC8LicsXG4gICAgJ9Cf0L7QutCw0LfQsNGC0Lgg0YLQtdGF0L3QvtC70L7Qs9GW0YfQvdGW0YHRgtGMINC60L7QvNC/0LDQvdGW0ZcuJyxcbiAgICBcItCd0LDQu9Cw0LPQvtC00LjRgtC4INC30LLQvtGA0L7RgtC90LjQuSDQt9CyJ9GP0LfQvtC6INC3INC60LvRltGU0L3RgtCw0LzQuC5cIixcbiAgICAn0KDQtdCw0LvRltC30YPQstCw0YLQuCDRhNGD0L3QutGG0ZbQvtC90LDQuyDRgdCw0LnRgtGDINC90LAgLi4uJyxcbiAgICAn0JLRltC00YTQvtGC0L7Qs9GA0LDRhNGD0LLQsNGC0Lgg0L/RgNC+0LTRg9C60YbRltGOINC00LvRjyDQv9C+0LTQsNC70YzRiNC+0LPQviDRg9C/0LDQutGD0LLQsNC90L3RjyDQv9GA0L7QtdC60YLRgy4nLFxuICAgICfQktGW0LTQt9C90Y/RgtC4INC/0YDQvtC80L4t0LLRltC00LXQviDQv9GA0L7QtdC60YLRgy4nLFxuICAgICfQodGC0LLQvtGA0LjRgtC4INC60L7QvdGC0LXQvdGCLdC/0LvQsNC9INC/0YDQvtGB0YPQstCw0L3QvdGPIEluc3RhZ3JhbSDRgdGC0L7RgNGW0L3QutC4LidcbiAgXVxuXG4vLyAgIGlmICghc2luZ2xlUHJvamVjdCkge1xuLy8gICAgICAgcmV0dXJuIDxwPkxhPC9wPlxuLy8gICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9qZWN0Qmd9KWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X3BhZ2VfaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfaW5mb30+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdExvZ299IGFsdD17J0JyYW5kIGxvZ28nfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfdHlwZX0+XG4gICAgICAgICAgICAgIDxoMz57c2luZ2xlUHJvamVjdC5vcmRlcmluZ190eXBlfTwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIExhbmRpbmcgUGFnZSDQv9GA0L7QtdC60YLRgy4g0KTQvtGC0L7Qt9C50L7QvNC60LAuINCf0YDQvtC80L4t0LLRltC00LXQvi4g0JLQtdC00LXQvdC90Y9cbiAgICAgICAgICAgICAgICDRgdC+0YYt0LzQtdGA0LXQti5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzY3JvbGwobXlSZWYpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5mb3JfYmlnX2RldmljZX1cbiAgICAgICAgICAgICAgc3JjPXtwcm9qZWNDaGVja0Rvd259XG4gICAgICAgICAgICAgIGFsdD0ncHJvamVjQ2hlY2tEb3duJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5mb3Jfc21hbGxfZGV2aWNlfVxuICAgICAgICAgICAgICBzcmM9e3Byb2plY0NoZWNrRG93blNtYWxsfVxuICAgICAgICAgICAgICBhbHQ9J3Byb2plY0NoZWNrRG93bidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c2VjdGlvbiByZWY9e215UmVmfSBjbGFzc05hbWU9e3N0eWxlLnByb2plY3RfZGF0YX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dH0+XG4gICAgICAgICAgICA8aDM+0J/RgNC+INC60L7QvNC/0LDQvdGW0Y48L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgINCh0YLRg9C00ZbRjyDQsNGA0YLRltGF0LXQutGC0YPRgNC4INGWINC00LjQt9Cw0LnQvdGDINGW0L3RgtC10YDigJnRlNGA0YMg0J3QsNGC0LDQu9GW0Zcg0JPRg9Cx0LjRiCDRgyDQm9GM0LLQvtCy0ZYuXG4gICAgICAgICAgICAgINCa0L7QvNC/0LDQvdGW0Y8g0YDQvtC30YDQvtCx0LvRj9GUINGWINGA0LXQsNC70ZbQt9C+0LLRg9GUINC00LjQt9Cw0LnQvSDQttC40YLQu9C+0LLQuNGFINGC0LAg0ZbQvdGI0LjRhVxuICAgICAgICAgICAgICDQv9GA0L7RgdGC0L7RgNGW0LIsINGI0LjRgNC+0LrQviDRgdC/0LXRhtGW0LDQu9GW0LfRg9GU0YLRjNGB0Y8g0L3QsCDRhNGD0L3QutGG0ZbQvtC90LDQu9GM0L3QvtC80YMg0ZbQvdGC0LXRgOKAmdGU0YDRliDRllxuICAgICAgICAgICAgICDQvdCw0LTQsNGUINGB0LLQvtGXINC/0L7RgdC70YPQs9C4INC90LUg0LvQuNGI0LUg0YMg0JvRjNCy0L7QstGWLCDQsCDRgyDQsdGD0LTRjCDRj9C60YMg0YLQvtGH0LrRgyDRgdCy0ZbRgtGDLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50YXNrc30+XG4gICAgICAgICAgICA8aDM+0JfQsNC00LDRh9GWPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3R9PsK3IHt0fTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmVzdWx0c30+XG4gICAgICAgICAgICA8aDM+0KDQtdC30YPQu9GM0YLQsNGC0Lg8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+aHVieXNoLmNvbTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPkBuYXRhbGlodWJ5c2g8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9qZWN0X3JlZmVyZW5jZX0+XG4gICAgICAgICAgICA8aDE+0KHQsNC50YI8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlmcmFtZV9jb250YWluZXJ9PlxuICAgICAgICAgICAgICB7LyogPGlmcmFtZVxuICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvZ2FsbGVyeS8xMDE3MTQ4ODMvVW1hbWktRGVsaXZlcnktU2VydmljZT9pZnJhbWU9MSZhbXA7aWxvMD0xJ1xuICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPSdmYWxzZSdcbiAgICAgICAgICAgICAgICBzYW5kYm94PScnXG4gICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5jdGFfc2VjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdGFfc2VjdGlvbl9vZmZlcn0+XG4gICAgICAgICAgICA8aDI+RGlkIHlvdSBsaWtlIHRoZSBwcm9qZWN0PzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRmlsbCBvdXQgdGhlIGFwcGxpY2F0aW9uIGFuZCB3ZSB3aWxsIGNvbnRhY3QgeW91IHRvIGRpc2N1c3NcbiAgICAgICAgICAgICAgY29vcGVyYXRpb25cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlxuICAgICAgICAgICAgICA8c3Bhbj5Db25zdWx0YXRpb248L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cblxuUHJvamVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBpZCA9IHF1ZXJ5LmlkXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4Mjg5L3YxL3Byb2plY3QnKVxuICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgaWQ6IGlkLFxuICAgIHByb2plY3RzOiBwcm9qZWN0c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project/[id].tsx\n");

/***/ })

})