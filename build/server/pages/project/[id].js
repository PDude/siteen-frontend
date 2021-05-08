module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+tsZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"home_footer": "Footer_home_footer__1NfIv",
	"footer_nav": "Footer_footer_nav__rxCQW"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4RUv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9Ijc3IiB2aWV3Qm94PSIwIDAgMTQ4IDc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTQ5LjY5OSA4LjEwMTM0QzQyLjkxNjEgMTMuMjM3NSAzNi4xMzMyIDE4LjM3MzcgMjkuMzcyOCAyMy40MDE3QzI3LjM5NjcgMjQuOTA5NiAyNC4wMTM2IDI2LjY4OTEgMjMuNDUwMyAyOS4zOTQ0QzIxLjg3NjggMzUuOTU0IDI3LjkxMTEgMzguOTAzOSAzMi44MzY0IDM2LjIwMzVDMzUuNzc2MiAzNC41NTc1IDM4LjM3NTggMzIuMDUwNCA0MS4wNjE5IDMwLjEyNThDNDEuMDYxOSAzMC4xMjU4IDQzLjI1NDUgMzMuMDY2MiA0My4wMTAzIDMzLjI0MTFDNDIuNzY2MSAzMy40MTYxIDQyLjM5OTkgMzMuNjc4NiA0Mi4xNTU3IDMzLjg1MzVDNDAuNjY4IDM1LjAxMTYgMzkuMjAyOCAzNi4wNjEzIDM3LjcxNTEgMzcuMjE5M0MzMC44MTAxIDQyLjQ0MyAyMy44MDU2IDQ3LjY0NTkgMTYuOTAwNiA1Mi44Njk2QzE0LjU1ODIgNTQuNjQgMTYuODkxOCA1OC40MDAxIDE5LjIxMTYgNTYuNzM3OUMyNS45NzIgNTEuNzA5OSAzMi42NTUzIDQ2LjU1MyAzOS40MTU3IDQxLjUyNUM0MS42MTM0IDM5Ljk1MDMgNDQuMDEwMyAzOC40MTcxIDQ1Ljk3NyAzNi40NTU2QzUwLjQ5ODIgMzIuMjAzNCA0Ny4yNyAyNC43NTcgNDEuNTc4IDI1LjE1MjZDMzguMjExNiAyNS4zNTQ5IDM0LjQwOTkgMjkuNjQ0IDMxLjgyMzMgMzEuNTg5NEMzMS41NzkxIDMxLjc2NDMgMzEuMzEyNCAzMi4wNDc1IDMwLjk2ODYgMzIuMjAxN0MyOS41MDM0IDMzLjI1MTUgMjYuODU0NCAzMS4wMDY0IDI4LjM0MjEgMjkuODQ4NEMyOS4zMTg5IDI5LjE0ODYgMzAuMzE4MiAyOC4zNDA1IDMxLjI5NSAyNy42NDA2QzM4LjIgMjIuNDE3IDQ1LjIwNDYgMTcuMjE0IDUyLjEzMjEgMTEuODgyMUM1NC4zMjk5IDEwLjMwNzUgNTIuMDE4OCA2LjQzOTE3IDQ5LjY5OSA4LjEwMTM0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNTEuMDE0OSAyNy4yMzA1QzUzLjI2OTQgMjcuNjk5OSA1NS41MTA3IDI2LjA5NCA1Ni4wMjA4IDIzLjY0MzdDNTYuNTMxIDIxLjE5MzMgNTUuMTE3IDE4LjgyNjQgNTIuODYyNCAxOC4zNTdDNTAuNjA3OSAxNy44ODc2IDQ4LjM2NjcgMTkuNDkzNSA0Ny44NTY1IDIxLjk0MzhDNDcuMzQ2MyAyNC4zOTQyIDQ4Ljc2MDQgMjYuNzYxMSA1MS4wMTQ5IDI3LjIzMDVaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMC4yMDc1IDU3LjU3MzRDNy4yNzcxNiA1OS42NzMgNC4zNDY3NiA2MS43NzI2IDEuNDE2NDMgNjMuODcyMUMtMC45MDM0MTUgNjUuNTM0MyAxLjQwNzY2IDY5LjQwMjYgMy43Mjc1IDY3Ljc0MDRDNi42NTc4MyA2NS42NDA5IDkuNTg4MjMgNjMuNTQxMyAxMi41MTg2IDYxLjQ0MTdDMTQuODM4NCA1OS43Nzk2IDEyLjYyNjkgNTUuOTMyIDEwLjIwNzUgNTcuNTczNFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPHBhdGggZD0iTTIwLjg5ODkgNDAuMTU0QzE1LjUyNjYgNDQuMDAzMiAxMC4xNTQ0IDQ3Ljg1MjUgNC42NjAwMiA1MS43ODkyQzIuMzQwMTggNTMuNDUxMyA0LjY1MTI1IDU3LjMxOTYgNi45NzExIDU1LjY1NzVDMTIuMzQzNCA1MS44MDgyIDE3LjcxNTYgNDcuOTU5IDIzLjIwOTkgNDQuMDIyM0MyNS41NTIzIDQyLjI1MTkgMjMuMjQxMiAzOC4zODM2IDIwLjg5ODkgNDAuMTU0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjYuMDQwOSA0My4yNzYzQzY0Ljg0NzQgNDMuMjc2MyA2My42OTE3IDQzLjA5NSA2Mi41NzM4IDQyLjczMjRDNjEuNDcxIDQyLjM1NDggNjAuNjAyMyA0MS44NzEzIDU5Ljk2NzggNDEuMjgyMUw2MC44MDYyIDM5LjUxNDZDNjEuNDEwNSA0MC4wNTg0IDYyLjE4MSA0MC41MDQxIDYzLjExNzcgNDAuODUxNkM2NC4wNjk0IDQxLjE4MzkgNjUuMDQzOCA0MS4zNTAxIDY2LjA0MDkgNDEuMzUwMUM2Ny4zNTUzIDQxLjM1MDEgNjguMzM3MiA0MS4xMzExIDY4Ljk4NjggNDAuNjkyOUM2OS42MzY1IDQwLjIzOTcgNjkuOTYxMyAzOS42NDMgNjkuOTYxMyAzOC45MDI3QzY5Ljk2MTMgMzguMzU4OSA2OS43OCAzNy45MjA3IDY5LjQxNzQgMzcuNTg4NEM2OS4wNjk5IDM3LjI0MDkgNjguNjMxOCAzNi45NzY1IDY4LjEwMzEgMzYuNzk1M0M2Ny41ODk0IDM2LjYxNCA2Ni44NTY3IDM2LjQxIDY1LjkwNSAzNi4xODM0QzY0LjcxMTUgMzUuODk2NCA2My43NDQ2IDM1LjYwOTMgNjMuMDA0MyAzNS4zMjIzQzYyLjI3OTIgMzUuMDM1MyA2MS42NTIyIDM0LjU5NzEgNjEuMTIzNSAzNC4wMDhDNjAuNjA5OCAzMy40MDM3IDYwLjM1MyAzMi41OTU0IDYwLjM1MyAzMS41ODMyQzYwLjM1MyAzMC43MzcyIDYwLjU3MjEgMjkuOTc0MyA2MS4wMTAyIDI5LjI5NDVDNjEuNDYzNCAyOC42MTQ2IDYyLjE0MzIgMjguMDcwOCA2My4wNDk3IDI3LjY2MjlDNjMuOTU2MSAyNy4yNTUgNjUuMDgxNiAyNy4wNTEgNjYuNDI2MiAyNy4wNTFDNjcuMzYyOCAyNy4wNTEgNjguMjg0NCAyNy4xNzE5IDY5LjE5MDggMjcuNDEzNkM3MC4wOTcyIDI3LjY1NTMgNzAuODc1MyAyOC4wMDI4IDcxLjUyNDkgMjguNDU2TDcwLjc3NzEgMzAuMjY4OUM3MC4xMTIzIDI5Ljg0NTkgNjkuNDAyMyAyOS41Mjg2IDY4LjY0NjkgMjkuMzE3MUM2Ny44OTE2IDI5LjA5MDUgNjcuMTUxMyAyOC45NzcyIDY2LjQyNjIgMjguOTc3MkM2NS4xNDIgMjguOTc3MiA2NC4xNzUyIDI5LjIxMTQgNjMuNTI1NSAyOS42Nzk3QzYyLjg5MSAzMC4xNDggNjIuNTczOCAzMC43NTIzIDYyLjU3MzggMzEuNDkyNkM2Mi41NzM4IDMyLjAzNjQgNjIuNzU1MSAzMi40ODIxIDYzLjExNzcgMzIuODI5NkM2My40ODAyIDMzLjE2MTkgNjMuOTI1OSAzMy40MjYzIDY0LjQ1NDYgMzMuNjIyN0M2NC45OTg1IDMzLjgwNCA2NS43MzEyIDM0LjAwMDQgNjYuNjUyOCAzNC4yMTE5QzY3Ljg0NjIgMzQuNDk4OSA2OC44MDU2IDM0Ljc4NiA2OS41MzA3IDM1LjA3M0M3MC4yNTU5IDM1LjM2MDEgNzAuODc1MyAzNS43OTgyIDcxLjM4ODkgMzYuMzg3NEM3MS45MTc3IDM2Ljk3NjUgNzIuMTgyIDM3Ljc2OTcgNzIuMTgyIDM4Ljc2NjhDNzIuMTgyIDM5LjU5NzcgNzEuOTU1NCA0MC4zNjA2IDcxLjUwMjIgNDEuMDU1NUM3MS4wNDkgNDEuNzM1NCA3MC4zNjE2IDQyLjI3OTIgNjkuNDQwMSA0Mi42ODcxQzY4LjUxODUgNDMuMDc5OSA2Ny4zODU1IDQzLjI3NjMgNjYuMDQwOSA0My4yNzYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExMC43ODQgMzUuNTg1N0g5Ny4wNzQxQzk3LjE5ODcgMzcuMjg5MSA5Ny44NTMxIDM4LjY3MDUgOTkuMDM3MSAzOS43Mjk5QzEwMC4yMjEgNDAuNzY4NSAxMDEuNzE3IDQxLjI4NzggMTAzLjUyNCA0MS4yODc4QzEwNC41NDIgNDEuMjg3OCAxMDUuNDc3IDQxLjExMTIgMTA2LjMyOCA0MC43NTgxQzEwNy4xOCA0MC4zODQyIDEwNy45MTcgMzkuODQ0MSAxMDguNTQxIDM5LjEzNzhMMTA5Ljc4NyA0MC41NzExQzEwOS4wNiA0MS40NDM2IDEwOC4xNDYgNDIuMTA4MyAxMDcuMDQ1IDQyLjU2NTNDMTA1Ljk2NSA0My4wMjIzIDEwNC43NyA0My4yNTA4IDEwMy40NjIgNDMuMjUwOEMxMDEuNzc5IDQzLjI1MDggMTAwLjI4MyA0Mi44OTc3IDk4Ljk3NDggNDIuMTkxNEM5Ny42ODY5IDQxLjQ2NDQgOTYuNjc5NCA0MC40NjczIDk1Ljk1MjQgMzkuMjAwMkM5NS4yMjUzIDM3LjkzMyA5NC44NjE4IDM2LjQ5OTcgOTQuODYxOCAzNC45MDAyQzk0Ljg2MTggMzMuMzAwNyA5NS4yMDQ2IDMxLjg2NzQgOTUuODkgMzAuNjAwM0M5Ni41OTYzIDI5LjMzMzIgOTcuNTUxOSAyOC4zNDY1IDk4Ljc1NjcgMjcuNjQwMkM5OS45ODIyIDI2LjkzMzkgMTAxLjM1MyAyNi41ODA4IDEwMi44NyAyNi41ODA4QzEwNC4zODYgMjYuNTgwOCAxMDUuNzQ3IDI2LjkzMzkgMTA2Ljk1MSAyNy42NDAyQzEwOC4xNTYgMjguMzQ2NSAxMDkuMTAxIDI5LjMzMzIgMTA5Ljc4NyAzMC42MDAzQzExMC40NzIgMzEuODQ2NyAxMTAuODE1IDMzLjI4IDExMC44MTUgMzQuOTAwMkwxMTAuNzg0IDM1LjU4NTdaTTEwMi44NyAyOC40ODE1QzEwMS4yOTEgMjguNDgxNSA5OS45NjE1IDI4Ljk5MDQgOTguODgxMyAzMC4wMDgzQzk3LjgyMTkgMzEuMDA1NCA5Ny4yMTk1IDMyLjMxNCA5Ny4wNzQxIDMzLjkzNDNIMTA4LjY5NkMxMDguNTUxIDMyLjMxNCAxMDcuOTM4IDMxLjAwNTQgMTA2Ljg1OCAzMC4wMDgzQzEwNS43OTkgMjguOTkwNCAxMDQuNDY5IDI4LjQ4MTUgMTAyLjg3IDI4LjQ4MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI5LjU4OSAzNS41ODU3SDExNS44NzlDMTE2LjAwNCAzNy4yODkxIDExNi42NTggMzguNjcwNSAxMTcuODQyIDM5LjcyOTlDMTE5LjAyNiA0MC43Njg1IDEyMC41MjIgNDEuMjg3OCAxMjIuMzI5IDQxLjI4NzhDMTIzLjM0NyA0MS4yODc4IDEyNC4yODEgNDEuMTExMiAxMjUuMTMzIDQwLjc1ODFDMTI1Ljk4NSA0MC4zODQyIDEyNi43MjIgMzkuODQ0MSAxMjcuMzQ1IDM5LjEzNzhMMTI4LjU5MiA0MC41NzExQzEyNy44NjUgNDEuNDQzNiAxMjYuOTUxIDQyLjEwODMgMTI1Ljg1IDQyLjU2NTNDMTI0Ljc3IDQzLjAyMjMgMTIzLjU3NSA0My4yNTA4IDEyMi4yNjcgNDMuMjUwOEMxMjAuNTg0IDQzLjI1MDggMTE5LjA4OCA0Mi44OTc3IDExNy43OCA0Mi4xOTE0QzExNi40OTIgNDEuNDY0NCAxMTUuNDg0IDQwLjQ2NzMgMTE0Ljc1NyAzOS4yMDAyQzExNC4wMyAzNy45MzMgMTEzLjY2NyAzNi40OTk3IDExMy42NjcgMzQuOTAwMkMxMTMuNjY3IDMzLjMwMDcgMTE0LjAwOSAzMS44Njc0IDExNC42OTUgMzAuNjAwM0MxMTUuNDAxIDI5LjMzMzIgMTE2LjM1NyAyOC4zNDY1IDExNy41NjIgMjcuNjQwMkMxMTguNzg3IDI2LjkzMzkgMTIwLjE1OCAyNi41ODA4IDEyMS42NzQgMjYuNTgwOEMxMjMuMTkxIDI2LjU4MDggMTI0LjU1MSAyNi45MzM5IDEyNS43NTYgMjcuNjQwMkMxMjYuOTYxIDI4LjM0NjUgMTI3LjkwNiAyOS4zMzMyIDEyOC41OTIgMzAuNjAwM0MxMjkuMjc3IDMxLjg0NjcgMTI5LjYyIDMzLjI4IDEyOS42MiAzNC45MDAyTDEyOS41ODkgMzUuNTg1N1pNMTIxLjY3NCAyOC40ODE1QzEyMC4wOTYgMjguNDgxNSAxMTguNzY2IDI4Ljk5MDQgMTE3LjY4NiAzMC4wMDgzQzExNi42MjcgMzEuMDA1NCAxMTYuMDI0IDMyLjMxNCAxMTUuODc5IDMzLjkzNDNIMTI3LjUwMUMxMjcuMzU2IDMyLjMxNCAxMjYuNzQzIDMxLjAwNTQgMTI1LjY2MyAzMC4wMDgzQzEyNC42MDMgMjguOTkwNCAxMjMuMjc0IDI4LjQ4MTUgMTIxLjY3NCAyOC40ODE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0Ny4wNiAyNy4yMzIzVjQzLjA5NUgxNDUuMjAxTDEzNS42ODQgMzEuMjY2VjQzLjA5NUgxMzMuNDE4VjI3LjIzMjNIMTM1LjI3NkwxNDQuNzkzIDM5LjA2MTRWMjcuMjMyM0gxNDcuMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzUuNTgxMSAyNy4yMzI0SDc3Ljg0NzJWNDMuMDk1MUg3NS41ODExVjI3LjIzMjRaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik04NS43NDYxIDI5LjIwMzlIODAuMzA3NVYyNy4yMzI0SDkzLjQyODJWMjkuMjAzOUg4Ny45ODk1VjQzLjA5NTFIODUuNzQ2MVYyOS4yMDM5WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyOC43NDkxIiB5MT0iNTkuNTQ1NCIgeDI9IjQwLjAyMTUiIHkyPSI1LjQwNDQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFNjAwN0UiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjM5MjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUxLjA1OCIgeTE9IjI3LjI2NCIgeDI9IjUyLjkyMjEiIHkyPSIxOC4zMTA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOTRFMUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjIxNzkiIHN0b3AtY29sb3I9IiNFQzY1MTIiLz4KPHN0b3Agb2Zmc2V0PSIwLjUxMTEiIHN0b3AtY29sb3I9IiNGMDdFMDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjc4IiBzdG9wLWNvbG9yPSIjRjI4RDAyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YzOTIwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI1LjY3Nzc0IiB5MT0iNjguODk0OSIgeDI9IjguMjU5OTUiIHkyPSI1Ni40OTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyOTIzNUMiLz4KPHN0b3Agb2Zmc2V0PSIwLjU2MzMiIHN0b3AtY29sb3I9IiM3RjFCM0EiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjExLjk2ODEiIHkxPSI1Ny4yNjQ3IiB4Mj0iMTUuOTA0MSIgeTI9IjM4LjM2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI5MjM1QyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDg0Njc2NiIgc3RvcC1jb2xvcj0iIzQ3MjA1MCIvPgo8c3RvcCBvZmZzZXQ9IjAuMjQzNiIgc3RvcC1jb2xvcj0iIzdBMUMzQyIvPgo8c3RvcCBvZmZzZXQ9IjAuMzgyNCIgc3RvcC1jb2xvcj0iIzlGMTkyRSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDk0MiIgc3RvcC1jb2xvcj0iI0I2MTcyNSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTY1IiBzdG9wLWNvbG9yPSIjQkUxNjIyIi8+CjxzdG9wIG9mZnNldD0iMC42NjQ3IiBzdG9wLWNvbG9yPSIjQ0EwRjNGIi8+CjxzdG9wIG9mZnNldD0iMC44MDY2IiBzdG9wLWNvbG9yPSIjRDkwNzYxIi8+CjxzdG9wIG9mZnNldD0iMC45MjM1IiBzdG9wLWNvbG9yPSIjRTMwMjc2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2MDA3RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXIiIHgxPSI4My44MjM3IiB5MT0iMjAuNDM0MSIgeDI9IjgzLjgyMzciIHkyPSI0OC43NjAzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUE5NEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREQ0MjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhciIgeDE9IjgzLjgyMzciIHkxPSIyMC40MzQxIiB4Mj0iODMuODIzNyIgeTI9IjQ4Ljc2MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZBQTk0QyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERDQyNDIiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNDcuMDYiIGhlaWdodD0iNzcuMDAwMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "4oX2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+tsZ");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4RUv");
/* harmony import */ var _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);






const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home_footer,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer_nav,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: _images_logo_nav_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
              alt: "Siteen"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Services"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Cases"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Get a Brif"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "About Us"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              children: "Privacy Policy"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          children: [currentYear, " \xA9 All Rights Reserved"]
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FENz");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FENz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qt91");
/* harmony import */ var _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yi2M");
/* harmony import */ var _images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MrDF");
/* harmony import */ var _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YXMl");
/* harmony import */ var _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dQf8");
/* harmony import */ var _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4oX2");



 // temp project bg








const ProjectPage = ({
  projects,
  id
}) => {
  const singleProject = projects.response.filter(p => p.id == id)[0];
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();

  const scroll = ref => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
      style: {
        backgroundImage: `url(${_images_wings_bg_jpg__WEBPACK_IMPORTED_MODULE_2___default.a})`
      },
      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.project_page_header,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.project_info,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: _images_wings_logo_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
            alt: 'Brand logo'
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.project_type,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: singleProject.ordering_type
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: singleProject.project_tags.join(' ')
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
          onClick: () => {
            scroll(myRef);
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.for_big_device,
            src: _images_project_check_down_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: "projecCheckDown"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.for_small_device,
            src: _images_project_check_down_small_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
            alt: "projecCheckDown"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      ref: myRef,
      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.project_data,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.about,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
            children: "\u041F\u0440\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: singleProject.about_project
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.tasks,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
            children: "\u0417\u0430\u0434\u0430\u0447\u0456"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
            children: singleProject.project_tasks.map(t => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
              children: ["\xB7 ", t]
            }, t))
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.results,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
            children: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                href: "#",
                children: singleProject.result_link[0]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                href: "#",
                children: singleProject.result_link[1]
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.project_reference,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            children: singleProject.project_name
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.iframe_container,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
              children: "Coming soon ..."
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.cta_section,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.cta_section_offer,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            children: "Did you like the project?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: "Fill out the application and we will contact you to discuss cooperation"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "btn",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Consultation"
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {})]
  });
};

ProjectPage.getInitialProps = async ({
  query
}) => {
  const id = query.id;
  const response = await fetch('http://localhost:8289/v1/project');
  const projects = await response.json();
  return {
    id: id,
    projects: projects
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "MrDF":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9Ijc3IiB2aWV3Qm94PSIwIDAgMzYwIDc3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxNy45ODcgNS43MDQzN0MyMTcuOTYzIDQuOTQyNDIgMjE4LjA5NyA0LjE4Mzc4IDIxOC4zODIgMy40NzczMkMyMTguNjY4IDIuNzcwODggMjE5LjA5NyAyLjEzMjMzIDIxOS42NDIgMS42MDI4N0MyMjAuOTEyIDAuNTY1OTk4IDIyMi40OTggMCAyMjQuMTM0IDBDMjI1Ljc3IDAgMjI3LjM1NSAwLjU2NTk5OCAyMjguNjI1IDEuNjAyODdDMjI5LjE2MyAyLjE0MzA2IDIyOS41ODkgMi43ODQ0MiAyMjkuODgxIDMuNDkwMzlDMjMwLjE3MSA0LjE5NjM1IDIzMC4zMjEgNC45NTMxMSAyMzAuMzIxIDUuNzE3MjlDMjMwLjMyMSA2LjQ4MTQ2IDIzMC4xNzEgNy4yMzgxMiAyMjkuODgxIDcuOTQ0MDlDMjI5LjU4OSA4LjY1MDA5IDIyOS4xNjMgOS4yOTE1MiAyMjguNjI1IDkuODMxNzFDMjI3LjM2MyAxMC44ODQ3IDIyNS43NzQgMTEuNDYxMSAyMjQuMTM0IDExLjQ2MTFDMjIyLjQ5MyAxMS40NjExIDIyMC45MDUgMTAuODg0NyAyMTkuNjQyIDkuODMxNzFDMjE5LjA5MiA5LjMwMDI5IDIxOC42NiA4LjY1NzcyIDIxOC4zNzUgNy45NDYzMkMyMTguMDkgNy4yMzQ5MSAyMTcuOTU3IDYuNDcwODMgMjE3Ljk4NyA1LjcwNDM3Wk0yMjkuNjc3IDU3Ljg1MDRIMjE4LjYyOVYxNi40MjI1SDIyOS42NzdWNTcuODUwNFpNMTk2LjU2NyA0Mi43OTkyTDIwMS45ODIgMTYuNDIzSDIxMi42MDhMMjAyLjE2MiA1Ny44NTFIMTkyLjkzNkwxODUuMTM0IDMxLjc3MTVMMTc3LjMxOSA1Ny44NTFIMTY4LjE0NEwxNTcuNjIyIDE2LjQyM0gxNjguMjZMMTczLjYyMyA0Mi43NjAzTDE4MS4xNjkgMTYuNDIzSDE4OS4xMzdMMTk2LjU2NyA0Mi43OTkyWk0yNDkuMjE5IDIxLjIwNzVMMjQ4Ljg3MiAxNi40MjI0SDIzOC40NTNWNTcuODExNEgyNDkuNDYzVjI4LjU5NzlDMjUwLjEzNiAyNy4zNDQ3IDI1MS4xNDcgMjYuMzA2NyAyNTIuMzc5IDI1LjYwMjFDMjUzLjYxMSAyNC44OTc1IDI1NS4wMTUgMjQuNTU0NiAyNTYuNDMgMjQuNjEyNUMyNTcuMzQ5IDI0LjUxNDQgMjU4LjI3NiAyNC42MDQ1IDI1OS4xNTkgMjQuODc3MkMyNjAuMDQxIDI1LjE0OTggMjYwLjg1OSAyNS41OTk1IDI2MS41NjQgMjYuMTk5QzI2Mi43MTggMjcuNjU0OCAyNjMuMjY2IDI5LjUwNDUgMjYzLjA5MSAzMS4zNTgxVjU3Ljg4OUgyNzQuMTAxVjMxLjEyNThDMjc0LjAzMiAyNS45NjY3IDI3Mi45MzcgMjIuMDk3NCAyNzAuODE1IDE5LjUxNzhDMjY4LjY5NCAxNi45MzgzIDI2NS40NDMgMTUuNjQ4NCAyNjEuMDYzIDE1LjY0ODRDMjU4Ljc5MiAxNS41NzAxIDI1Ni41MzYgMTYuMDMyOSAyNTQuNDc3IDE2Ljk5OTFDMjUyLjQxOSAxNy45NjUyIDI1MC42MTcgMTkuNDA3NCAyNDkuMjE5IDIxLjIwNzVaTTI4MC44MzkgMzYuODI3N0MyODAuODM5IDMwLjQ3MzEgMjgyLjM0NCAyNS4zNTcgMjg1LjM1NSAyMS40NzlDMjg2Ljc2OSAxOS41OTc0IDI4OC42MTIgMTguMDg1NCAyOTAuNzI5IDE3LjA3MDdDMjkyLjg0NyAxNi4wNTYgMjk1LjE3NiAxNS41Njg0IDI5Ny41MiAxNS42NDkyQzI5OS41MjIgMTUuNTQ2MyAzMDEuNTIgMTUuOTE2MiAzMDMuMzU0IDE2LjcyOTNDMzA1LjE4NyAxNy41NDIzIDMwNi44MDYgMTguNzc1OSAzMDguMDggMjAuMzMxMUwzMDguNTMgMTYuNDYxN0gzMTguNTEzVjU2LjQ0NUMzMTguNTkzIDU5Ljc2NDkgMzE3Ljc0MiA2My4wNCAzMTYuMDY0IDY1Ljg5OTNDMzE0LjQxMSA2OC41ODUyIDMxMi4wMDUgNzAuNzE3NiAzMDkuMTQ1IDcyLjAyNTZDMzA1Ljg2NCA3My40OTYyIDMwMi4yOTUgNzQuMjE4NSAyOTguNzAxIDc0LjE0MUMyOTUuNjY2IDc0LjEzODIgMjkyLjY2MyA3My41MTk3IDI4OS44NzMgNzIuMzIyNUMyODcuMzMzIDcxLjM0OTEgMjg1LjA4NyA2OS43MzE3IDI4My4zNTQgNjcuNjI3NUwyODguMjMgNjAuODgyQzI4OS40NDcgNjIuMzUxNCAyOTAuOTc1IDYzLjUzMDMgMjkyLjcwMSA2NC4zMzM2QzI5NC40MjggNjUuMTM2NSAyOTYuMzExIDY1LjU0MzcgMjk4LjIxMyA2NS41MjUyQzI5OS40NDggNjUuNjAxNSAzMDAuNjg1IDY1LjQzMjIgMzAxLjg1NCA2NS4wMjcxQzMwMy4wMjMgNjQuNjIyMSAzMDQuMTAyIDYzLjk4OTQgMzA1LjAyOCA2My4xNjQ4QzMwNS44NzMgNjIuMjgzMSAzMDYuNTI4IDYxLjIzMzMgMzA2Ljk0NyA2MC4wODI4QzMwNy4zNjcgNTguOTMyNiAzMDcuNTQ0IDU3LjcwNjcgMzA3LjQ2NSA1Ni40ODM5VjU0LjI2NTRDMzA2LjIxNiA1NS42ODUzIDMwNC42NyA1Ni44MDk1IDMwMi45MzcgNTcuNTU2NkMzMDEuMjA0IDU4LjMwMzYgMjk5LjMyOCA1OC42NTU1IDI5Ny40NDMgNTguNTg2M0MyOTUuMTI1IDU4LjY0NCAyOTIuODI1IDU4LjE0NTQgMjkwLjczNiA1Ny4xMzE1QzI4OC42NDcgNTYuMTE3OCAyODYuODI5IDU0LjYxNzkgMjg1LjQzMyA1Mi43NTY1QzI4Mi4zNyA0OC44NjEzIDI4MC44MzkgNDMuNzAyIDI4MC44MzkgMzcuMjc5VjM2LjgyNzdaTTI5MS44NDkgMzcuNjUyOUMyOTEuNjcyIDQwLjc2MDUgMjkyLjQ1NiA0My44NDY2IDI5NC4wOTQgNDYuNDg4QzI5NC43NjYgNDcuNTA2OSAyOTUuNjg2IDQ4LjMzNjggMjk2Ljc2NiA0OC44OTg3QzI5Ny44NDYgNDkuNDYwNyAyOTkuMDUxIDQ5LjczNjMgMzAwLjI2NyA0OS42OTk1QzMwMS43MDcgNDkuNzk3NyAzMDMuMTQ1IDQ5LjQ4NjkgMzA0LjQxOCA0OC44MDI5QzMwNS42OTIgNDguMTE4NiAzMDYuNzQ4IDQ3LjA4ODYgMzA3LjQ2NSA0NS44MzAzVjI4LjQ0MzlDMzA2Ljc0MiAyNy4yMTIyIDMwNS42OTUgMjYuMjA1OCAzMDQuNDM3IDI1LjUzNjRDMzAzLjE4IDI0Ljg2NzEgMzAxLjc2MyAyNC41NjA5IDMwMC4zNDMgMjQuNjUxOUMyOTkuMTE1IDI0LjYxMyAyOTcuODk3IDI0Ljg5MjggMjk2LjgwNiAyNS40NjQzQzI5NS43MTcgMjYuMDM1OCAyOTQuNzkxIDI2Ljg3OTkgMjk0LjEyIDI3LjkxNUMyOTIuNjA2IDMwLjA4MTkgMjkxLjg0OSAzMy4zMjc5IDI5MS44NDkgMzcuNjUyOVpNMzQ4Ljc1MSA0NC41MDg2QzM0OS4xMDQgNDUuMDc0IDM0OS4yOTMgNDUuNzI3NyAzNDkuMjk2IDQ2LjM5NTdDMzQ5LjMwOSA0Ny4wMTc5IDM0OS4xNjggNDcuNjMzNiAzNDguODg2IDQ4LjE4NzVDMzQ4LjYwNSA0OC43NDEyIDM0OC4xODggNDkuMjE2IDM0Ny42OCA0OS41Njg1QzM0Ni4yNTMgNTAuNDc0MyAzNDQuNTc2IDUwLjg5ODggMzQyLjg5MiA1MC43ODExQzM0MC45NjYgNTAuODgxMiAzMzkuMDY1IDUwLjMyNjcgMzM3LjQ5MSA0OS4yMDc0QzMzNi44MTIgNDguNjY4MiAzMzYuMjY0IDQ3Ljk4MjQgMzM1Ljg4NyA0Ny4yMDA4QzMzNS41MDggNDYuNDE5MSAzMzUuMzEyIDQ1LjU2MjEgMzM1LjMwOSA0NC42OTMxSDMyNC44NzVDMzI0Ljg3OCA0Ny4yMDQ1IDMyNS42NzcgNDkuNjQ5NSAzMjcuMTU5IDUxLjY3MDlDMzI4Ljc2MyA1My45MjY4IDMzMC45NCA1NS43MDg1IDMzMy40NTkgNTYuODI5OUMzMzYuMzU5IDU4LjExMjcgMzM5LjQ5NyA1OC43NDY2IDM0Mi42NjIgNTguNjg3M0MzNDcuMDkyIDU4Ljg4NTkgMzUxLjQ3IDU3LjY2MTYgMzU1LjE1OSA1NS4xOTE5QzM1Ni42NjggNTQuMTk0MyAzNTcuODk5IDUyLjgzMTMgMzU4Ljc0NyA1MS4yMjg4QzM1OS41OTIgNDkuNjI2MyAzNjAuMDIxIDQ3LjgzNTMgMzU5Ljk5OSA0Ni4wMjE1QzM1OS45OTkgNDAuNzMzNiAzNTcuMDg4IDM3LjAxODkgMzUxLjI3MSAzNC44Nzc5QzM0OS4wMTUgMzQuMDc3MSAzNDYuNjk3IDMzLjQ1NjIgMzQ0LjM0MyAzMy4wMjA1QzM0Mi4yOTIgMzIuNzE1MyAzNDAuMzE0IDMyLjA1MiAzMzguNDkzIDMxLjA2QzMzNy45NjYgMzAuNzY0NyAzMzcuNTI4IDMwLjMzNDIgMzM3LjIyNSAyOS44MTI5QzMzNi45MTkgMjkuMjkxNSAzMzYuNzYgMjguNjk4MSAzMzYuNzYgMjguMDkzNkMzMzYuNzQ3IDI3LjQ3NiAzMzYuODgyIDI2Ljg2NDMgMzM3LjE0NSAyNi4zMDY5QzMzNy40MTIgMjUuNzQ5NSAzMzcuODAxIDI1LjI2MTggMzM4LjI4NCAyNC44ODJDMzM5LjUyNCAyMy45NjA1IDM0MS4wNDYgMjMuNTA0MSAzNDIuNTg2IDIzLjU5MjNDMzQzLjQ0IDIzLjUxNjYgMzQ0LjMwMyAyMy42MTQ2IDM0NS4xMjEgMjMuODgwNEMzNDUuOTM4IDI0LjE0NjMgMzQ2LjY5NCAyNC41NzQ3IDM0Ny4zNDYgMjUuMTRDMzQ3Ljg0NSAyNS42NDg1IDM0OC4yNCAyNi4yNTMyIDM0OC41IDI2LjkxODFDMzQ4Ljc2NCAyNy41ODMgMzQ4Ljg4OSAyOC4yOTQzIDM0OC44NzEgMjkuMDA5NEgzNTkuODgzQzM1OS45MjMgMjcuMTQgMzU5LjUxNiAyNS4yODg1IDM1OC42OTUgMjMuNjA5OUMzNTcuODc1IDIxLjkzMTMgMzU2LjY2OCAyMC40NzQ1IDM1NS4xNzQgMTkuMzYxN0MzNTIuMDQzIDE2Ljg4NTMgMzQ3Ljg1NyAxNS42NDcxIDM0Mi42MjIgMTUuNjQ3MUMzMzguMzQ5IDE1LjQ0NzUgMzM0LjE0MiAxNi43NTcxIDMzMC43MjkgMTkuMzQ4OUMzMjkuMzAyIDIwLjQxNjQgMzI4LjE0OCAyMS44MDY0IDMyNy4zNTUgMjMuNDA2NEMzMjYuNTY1IDI1LjAwNjMgMzI2LjE1OCAyNi43NzEyIDMyNi4xNzMgMjguNTU3OUMzMjYuMTczIDM0Ljg2MDYgMzMxLjA3NSAzOS4wNDggMzQwLjg3NyA0MS4xMjA0QzM0My4xMDYgNDEuNDg5IDM0NS4yNzEgNDIuMTg5MSAzNDcuMjk0IDQzLjE5NzJDMzQ3Ljg5MSA0My40ODg4IDM0OC4zOTYgNDMuOTQzMyAzNDguNzUxIDQ0LjUwODZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNzMxOTEgMEg2Ni4xNTY5SDc4LjA1MjhIMTE1LjA5OEMxMTcuODkgMC4wMTgzNTUzIDEyMC42NTIgMC42MDMyNDkgMTIzLjIyNCAxLjcyMTI0QzEyNS43OTcgMi44MzkyMyAxMjguMTMgNC40Njg0MSAxMzAuMDkxIDYuNTE1NjJDMTMyLjA1MiA4LjU2Mjg2IDEzMy42MDIgMTAuOTg3OSAxMzQuNjUyIDEzLjY1MjNDMTM1LjcwMiAxNi4zMTY3IDEzNi4yMzIgMTkuMTY4MSAxMzYuMjEyIDIyLjA0MzZWMzYuMDcxMkMxMzYuMjEyIDM5LjIzMjcgMTM1LjAwMyA0Mi4yNjY5IDEzMi44NDcgNDQuNTE3M0MxMzAuNjkxIDQ2Ljc2NzcgMTI3Ljc2MSA0OC4wNTI4IDEyNC42OTIgNDguMDk1MUg4NS42MTY3Qzg1LjEwMDYgNDguMDk1MSA4NC42MDU1IDQ4LjMwNjMgODQuMjQwNSA0OC42ODIyQzgzLjg3NTggNDkuMDU3OCA4My42NzA2IDQ5LjU2NzcgODMuNjcwNiA1MC4wOTkxVjU0LjEwN0M4My42NzA2IDU0LjYzODQgODMuODc1OCA1NS4xNDgzIDg0LjI0MDUgNTUuNTIzOUM4NC42MDU1IDU1Ljg5OTggODUuMTAwNiA1Ni4xMTExIDg1LjYxNjcgNTYuMTExMUgxMTIuODZDMTEzLjg5MiA1Ni4xMTExIDExNC44ODIgNTUuNjg4OCAxMTUuNjEyIDU0LjkzN0MxMTYuMzQyIDU0LjE4NTUgMTE2Ljc1MiA1My4xNjYxIDExNi43NTIgNTIuMTAyOUgxMzIuMzJDMTMyLjg0NCA1Mi4xMDI2IDEzMy4zNjQgNTIuMjExMiAxMzMuODQ2IDUyLjQyMjhDMTM0LjMyOCA1Mi42MzQxIDEzNC43NjUgNTIuOTQzNiAxMzUuMTI4IDUzLjMzM0MxMzUuNDkyIDUzLjcyMjMgMTM1Ljc3NSA1NC4xODM0IDEzNS45NjEgNTQuNjg4MkMxMzYuMTQ4IDU1LjE5MzEgMTM2LjIzMyA1NS43MzE3IDEzNi4yMTIgNTYuMjcxM1Y1Ni41MTE3QzEzNi4yNjYgNTkuMDM1NyAxMzUuODM3IDYxLjU0NTggMTM0Ljk0OSA2My44OTg5QzEzNC4wNjEgNjYuMjUyIDEzMi43MzEgNjguNDAxOSAxMzEuMDM2IDcwLjIyNTdDMTI5LjM0MSA3Mi4wNDkyIDEyNy4zMTQgNzMuNTExMiAxMjUuMDcgNzQuNTI3N0MxMjIuODI2IDc1LjU0NDYgMTIwLjQwOSA3Ni4wOTU4IDExNy45NTggNzYuMTUwNkg3Ny44MzI3Qzc0LjIyMDIgNzYuMTUwNiA3MC43NTUzIDc0LjY3MjcgNjguMjAwOCA3Mi4wNDJDNjYuNTg2NiA3MC4zNzk3IDY1LjQxOTUgNjguMzQzNCA2NC43Nzg4IDY2LjEzMDhINDMuMDI0OUMzOS4zNTUyIDY2LjEzMDggMzUuODM2MyA2NC42Mjk3IDMzLjI0MTMgNjEuOTU3N0MzMC42NDY3IDU5LjI4NTcgMjkuMTg5IDU1LjY2MTYgMjkuMTg5IDUxLjg4MjlWNDkuODc4OEMyOS4xODkgNDkuNDA1OSAyOS4zNzE1IDQ4Ljk1MiAyOS42OTYzIDQ4LjYxNzRDMzAuMDIxMSA0OC4yODMyIDMwLjQ2MTYgNDguMDk1MSAzMC45MjA4IDQ4LjA5NTFINjQuMjExMVY0Mi4wODMxSDI3LjQ1NzVDMjUuNjQwNSA0Mi4wODMxIDIzLjg0MTQgNDEuNzE0NCAyMi4xNjI3IDQwLjk5ODZDMjAuNDg0MSA0MC4yODI1IDE4Ljk1ODggMzkuMjMzIDE3LjY3NDEgMzcuOTFDMTYuMzg5MyAzNi41ODY3IDE1LjM3MDEgMzUuMDE2MSAxNC42NzQ4IDMzLjI4NzVDMTMuOTc5NSAzMS41NTg4IDEzLjYyMTcgMjkuNzA2IDEzLjYyMTcgMjcuODM0OVYyNS44MzFDMTMuNjIxNyAyNS4zNTggMTMuODA0MSAyNC45MDQzIDE0LjEyODkgMjQuNTY5OEMxNC40NTM3IDI0LjIzNTMgMTQuODk0MiAyNC4wNDc0IDE1LjM1MzUgMjQuMDQ3NEg2NC4yMTExVjE4LjAzNTdIMTMuODM1OEMxMi4wMTg5IDE4LjAzNTcgMTAuMjE5NyAxNy42NjcxIDguNTQxMDYgMTYuOTUxMUM2Ljg2MjQ1IDE2LjIzNSA1LjMzNzIgMTUuMTg1NSA0LjA1MjQyIDEzLjg2MjVDMi43Njc2NSAxMi41Mzk0IDEuNzQ4NSAxMC45Njg3IDEuMDUzMTggOS4yNDAwMUMwLjM1Nzg2OCA3LjUxMTMzIDAgNS42NTg2MiAwIDMuNzg3NTNWMS43ODM1NkMwIDEuNTQ5MzQgMC4wNDQ4MDA4IDEuMzE3MzggMC4xMzE4MzcgMS4xMDA5OUMwLjIxODg3NCAwLjg4NDYwNSAwLjM0NjQ0IDAuNjg4MDEzIDAuNTA3MjYyIDAuNTIyMzk3QzAuNjY4MDg1IDAuMzU2NzgxIDAuODU5MDAzIDAuMjI1Mzk3IDEuMDY5MTMgMC4xMzU3NjdDMS4yNzkyNSAwLjA0NjEzNjEgMS41MDQ0NyAwIDEuNzMxOTEgMFpNODQuMjQwNSAyMC42MjY2QzgzLjg3NTggMjEuMDAyNCA4My42NzA2IDIxLjUxMjEgODMuNjcwNiAyMi4wNDM2VjI2LjA1MTVDODMuNjcwNiAyNi41ODMgODMuODc1OCAyNy4wOTI3IDg0LjI0MDUgMjcuNDY4NUM4NC42MDU1IDI3Ljg0NDMgODUuMTAwNiAyOC4wNTU1IDg1LjYxNjcgMjguMDU1NUgxMTcuMDA1QzExNy4wMDUgMjUuOTUwMiAxMTYuMjAxIDIzLjkyOTMgMTE0Ljc2NyAyMi40Mjk1QzExMy4zMzIgMjAuOTI5NiAxMTEuMzgyIDIwLjA3MTIgMTA5LjMzOCAyMC4wMzk2SDg1LjYxNjdDODUuMTAwNiAyMC4wMzk2IDg0LjYwNTUgMjAuMjUwOCA4NC4yNDA1IDIwLjYyNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YXMl":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iOTUiIHZpZXdCb3g9IjAgMCAxNyA5NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjg5NzMgOTMuNzA5NEM4LjY4NDQzIDk0LjA5NTcgOS4zMTc1NiA5NC4wODg4IDkuNzAzODYgOTMuNjk0MUwxNS45OTkgODcuMjYyMUMxNi4zODUzIDg2Ljg2NzQgMTYuMzc4NSA4Ni4yMzQzIDE1Ljk4MzggODUuODQ4QzE1LjU4OTEgODUuNDYxNyAxNC45NTYgODUuNDY4NSAxNC41Njk3IDg1Ljg2MzJMOC45NzM5OCA5MS41ODA1TDMuMjU2NjMgODUuOTg0OEMyLjg2MTkzIDg1LjU5ODUgMi4yMjg4MSA4NS42MDUzIDEuODQyNSA4Ni4wMDAxQzEuNDU2MiA4Ni4zOTQ4IDEuNDYzMDEgODcuMDI3OSAxLjg1NzcxIDg3LjQxNDJMOC4yODk3MyA5My43MDk0Wk03LjAwMDA2IDEuMDEwNzVMNy45ODkyNSA5My4wMDU0TDkuOTg5MTMgOTIuOTgzOUw4Ljk5OTk0IDAuOTg5MjQ4TDcuMDAwMDYgMS4wMTA3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQf8":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxNiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkyODkgMjAuNzA3MUM3LjY4MzQyIDIxLjA5NzYgOC4zMTY1OCAyMS4wOTc2IDguNzA3MTEgMjAuNzA3MUwxNS4wNzExIDE0LjM0MzFDMTUuNDYxNiAxMy45NTI2IDE1LjQ2MTYgMTMuMzE5NSAxNS4wNzExIDEyLjkyODlDMTQuNjgwNSAxMi41Mzg0IDE0LjA0NzQgMTIuNTM4NCAxMy42NTY5IDEyLjkyODlMOCAxOC41ODU4TDIuMzQzMTUgMTIuOTI4OUMxLjk1MjYyIDEyLjUzODQgMS4zMTk0NiAxMi41Mzg0IDAuOTI4OTMzIDEyLjkyODlDMC41Mzg0MDggMTMuMzE5NSAwLjUzODQwOSAxMy45NTI2IDAuOTI4OTMzIDE0LjM0MzFMNy4yOTI4OSAyMC43MDcxWk03IDQuMzcxMTRlLTA4TDcgMjBMOSAyMEw5IC00LjM3MTE0ZS0wOEw3IDQuMzcxMTRlLTA4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "qt91":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"project_page_header": "ProjectPage_project_page_header__C0rIz",
	"levitation": "ProjectPage_levitation__3IKP1",
	"project_info": "ProjectPage_project_info__1MYUa",
	"project_type": "ProjectPage_project_type__3-Ecd",
	"project_data": "ProjectPage_project_data__riea2",
	"about": "ProjectPage_about__3zY1M",
	"tasks": "ProjectPage_tasks__RePMD",
	"results": "ProjectPage_results__3iwrP",
	"project_reference": "ProjectPage_project_reference__cRj1s",
	"iframe_container": "ProjectPage_iframe_container__1Lepx",
	"cta_section": "ProjectPage_cta_section__2_yMv",
	"cta_section_offer": "ProjectPage_cta_section_offer__3FTVg",
	"for_small_device": "ProjectPage_for_small_device__2hFvo",
	"for_big_device": "ProjectPage_for_big_device__3w4sJ"
};


/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "yi2M":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wings_bg-df29a682acd711f3b89cca8eeaa3c6d6.jpg";

/***/ })

/******/ });