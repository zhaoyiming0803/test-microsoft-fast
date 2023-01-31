/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
  <div class="header" id="header">
    <slot name="header"></slot>
  </div>

  <div class="body">
    This is Body
  </div>

  <div class="footer">
    <slot name="footer"></slot>
  </div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
  .body {
    color: black;
    padding: 32px 8px;
    font-size: 42px;
    font-family: cursive;
  }
`;
let Layout = class Layout extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["FASTElement"] {
    constructor() {
        super();
        this.greeting = 'Hello';
        console.log('Runs when the element is created or upgraded. FASTElement will attach the shadow DOM at this time.');
    }
    greetingChanged() {
        console.log('greetingChanged: ', this.greeting);
        const bodyEl = this.shadowRoot.querySelector('.body');
        if (bodyEl) {
            bodyEl.innerHTML = this.greeting;
        }
    }
    connectedCallback() {
        // Runs when the element is inserted into the DOM. 
        // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
        super.connectedCallback();
        console.log('layout-tag is now connected to the DOM');
        this.shadowRoot.querySelector('.body').innerHTML = this.greeting;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["attr"],
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Layout.prototype, "greeting", void 0);
Layout = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])({
        name: 'layout-tag',
        template,
        styles
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Layout);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__esDecorate", function() { return __esDecorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__runInitializers", function() { return __runInitializers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__propKey", function() { return __propKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setFunctionName", function() { return __setFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.push(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.push(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$global", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_0__["$global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAST", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_0__["FAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_0__["emptyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMetadataLocator", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_0__["createMetadataLocator"]; });

/* harmony import */ var _templating_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewTemplate", function() { return _templating_template_js__WEBPACK_IMPORTED_MODULE_1__["ViewTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _templating_template_js__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony import */ var _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FASTElement", function() { return _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__["FASTElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _components_fast_element_js__WEBPACK_IMPORTED_MODULE_2__["customElement"]; });

/* harmony import */ var _components_fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FASTElementDefinition", function() { return _components_fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__["FASTElementDefinition"]; });

/* harmony import */ var _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeConfiguration", function() { return _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__["AttributeConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanConverter", function() { return _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__["booleanConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullableNumberConverter", function() { return _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__["nullableNumberConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeDefinition", function() { return _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__["AttributeDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _components_attributes_js__WEBPACK_IMPORTED_MODULE_4__["attr"]; });

/* harmony import */ var _components_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _components_controller_js__WEBPACK_IMPORTED_MODULE_5__["Controller"]; });

/* harmony import */ var _templating_compiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return _templating_compiler_js__WEBPACK_IMPORTED_MODULE_6__["compileTemplate"]; });

/* harmony import */ var _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementStyles", function() { return _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_7__["ElementStyles"]; });

/* harmony import */ var _styles_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _styles_css_js__WEBPACK_IMPORTED_MODULE_8__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssPartial", function() { return _styles_css_js__WEBPACK_IMPORTED_MODULE_8__["cssPartial"]; });

/* harmony import */ var _styles_css_directive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSDirective", function() { return _styles_css_directive_js__WEBPACK_IMPORTED_MODULE_9__["CSSDirective"]; });

/* harmony import */ var _templating_view_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return _templating_view_js__WEBPACK_IMPORTED_MODULE_10__["HTMLView"]; });

/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__["observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "volatile", function() { return _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__["volatile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__["ExecutionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultExecutionContext", function() { return _observation_observable_js__WEBPACK_IMPORTED_MODULE_11__["defaultExecutionContext"]; });

/* harmony import */ var _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriberSet", function() { return _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__["SubscriberSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyChangeNotifier", function() { return _observation_notifier_js__WEBPACK_IMPORTED_MODULE_12__["PropertyChangeNotifier"]; });

/* harmony import */ var _observation_array_change_records_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableArrayObservation", function() { return _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_14__["enableArrayObservation"]; });

/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return _dom_js__WEBPACK_IMPORTED_MODULE_15__["DOM"]; });

/* harmony import */ var _templating_binding_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLBindingDirective", function() { return _templating_binding_js__WEBPACK_IMPORTED_MODULE_16__["HTMLBindingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingBehavior", function() { return _templating_binding_js__WEBPACK_IMPORTED_MODULE_16__["BindingBehavior"]; });

/* harmony import */ var _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLDirective", function() { return _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_17__["HTMLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetedHTMLDirective", function() { return _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_17__["TargetedHTMLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachedBehaviorHTMLDirective", function() { return _templating_html_directive_js__WEBPACK_IMPORTED_MODULE_17__["AttachedBehaviorHTMLDirective"]; });

/* harmony import */ var _templating_ref_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefBehavior", function() { return _templating_ref_js__WEBPACK_IMPORTED_MODULE_18__["RefBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _templating_ref_js__WEBPACK_IMPORTED_MODULE_18__["ref"]; });

/* harmony import */ var _templating_when_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "when", function() { return _templating_when_js__WEBPACK_IMPORTED_MODULE_19__["when"]; });

/* harmony import */ var _templating_repeat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatBehavior", function() { return _templating_repeat_js__WEBPACK_IMPORTED_MODULE_20__["RepeatBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatDirective", function() { return _templating_repeat_js__WEBPACK_IMPORTED_MODULE_20__["RepeatDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _templating_repeat_js__WEBPACK_IMPORTED_MODULE_20__["repeat"]; });

/* harmony import */ var _templating_slotted_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlottedBehavior", function() { return _templating_slotted_js__WEBPACK_IMPORTED_MODULE_21__["SlottedBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slotted", function() { return _templating_slotted_js__WEBPACK_IMPORTED_MODULE_21__["slotted"]; });

/* harmony import */ var _templating_children_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenBehavior", function() { return _templating_children_js__WEBPACK_IMPORTED_MODULE_22__["ChildrenBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "children", function() { return _templating_children_js__WEBPACK_IMPORTED_MODULE_22__["children"]; });

/* harmony import */ var _templating_node_observation_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return _templating_node_observation_js__WEBPACK_IMPORTED_MODULE_23__["elements"]; });


























/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$global", function() { return $global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAST", function() { return FAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return emptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMetadataLocator", function() { return createMetadataLocator; });
/**
 * A reference to globalThis, with support
 * for browsers that don't yet support the spec.
 * @public
 */
const $global = function () {
  if (typeof globalThis !== "undefined") {
    // We're running in a modern environment.
    return globalThis;
  }
  if (typeof global !== "undefined") {
    // We're running in NodeJS
    return global;
  }
  if (typeof self !== "undefined") {
    // We're running in a worker.
    return self;
  }
  if (typeof window !== "undefined") {
    // We're running in the browser's main thread.
    return window;
  }
  try {
    // Hopefully we never get here...
    // Not all environments allow eval and Function. Use only as a last resort:
    // eslint-disable-next-line no-new-func
    return new Function("return this")();
  } catch (_a) {
    // If all fails, give up and create an object.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {};
  }
}();
// API-only Polyfill for trustedTypes
if ($global.trustedTypes === void 0) {
  $global.trustedTypes = {
    createPolicy: (n, r) => r
  };
}
const propConfig = {
  configurable: false,
  enumerable: false,
  writable: false
};
if ($global.FAST === void 0) {
  Reflect.defineProperty($global, "FAST", Object.assign({
    value: Object.create(null)
  }, propConfig));
}
/**
 * The FAST global.
 * @internal
 */
const FAST = $global.FAST;
if (FAST.getById === void 0) {
  const storage = Object.create(null);
  Reflect.defineProperty(FAST, "getById", Object.assign({
    value(id, initialize) {
      let found = storage[id];
      if (found === void 0) {
        found = initialize ? storage[id] = initialize() : null;
      }
      return found;
    }
  }, propConfig));
}
/**
 * A readonly, empty array.
 * @remarks
 * Typically returned by APIs that return arrays when there are
 * no actual items to return.
 * @internal
 */
const emptyArray = Object.freeze([]);
/**
 * Creates a function capable of locating metadata associated with a type.
 * @returns A metadata locator function.
 * @internal
 */
function createMetadataLocator() {
  const metadataLookup = new WeakMap();
  return function (target) {
    let metadata = metadataLookup.get(target);
    if (metadata === void 0) {
      let currentTarget = Reflect.getPrototypeOf(target);
      while (metadata === void 0 && currentTarget !== null) {
        metadata = metadataLookup.get(currentTarget);
        currentTarget = Reflect.getPrototypeOf(currentTarget);
      }
      metadata = metadata === void 0 ? [] : metadata.slice(0);
      metadataLookup.set(target, metadata);
    }
    return metadata;
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTemplate", function() { return ViewTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _compiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);






/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
class ViewTemplate {
  /**
   * Creates an instance of ViewTemplate.
   * @param html - The html representing what this template will instantiate, including placeholders for directives.
   * @param directives - The directives that will be connected to placeholders in the html.
   */
  constructor(html, directives) {
    this.behaviorCount = 0;
    this.hasHostBehaviors = false;
    this.fragment = null;
    this.targetOffset = 0;
    this.viewBehaviorFactories = null;
    this.hostBehaviorFactories = null;
    this.html = html;
    this.directives = directives;
  }
  /**
   * Creates an HTMLView instance based on this template definition.
   * @param hostBindingTarget - The element that host behaviors will be bound to.
   */
  create(hostBindingTarget) {
    if (this.fragment === null) {
      let template;
      const html = this.html;
      if (typeof html === "string") {
        template = document.createElement("template");
        template.innerHTML = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createHTML(html);
        const fec = template.content.firstElementChild;
        if (fec !== null && fec.tagName === "TEMPLATE") {
          template = fec;
        }
      } else {
        template = html;
      }
      const result = Object(_compiler_js__WEBPACK_IMPORTED_MODULE_2__["compileTemplate"])(template, this.directives);
      this.fragment = result.fragment;
      this.viewBehaviorFactories = result.viewBehaviorFactories;
      this.hostBehaviorFactories = result.hostBehaviorFactories;
      this.targetOffset = result.targetOffset;
      this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
      this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
    }
    const fragment = this.fragment.cloneNode(true);
    const viewFactories = this.viewBehaviorFactories;
    const behaviors = new Array(this.behaviorCount);
    const walker = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createTemplateWalker(fragment);
    let behaviorIndex = 0;
    let targetIndex = this.targetOffset;
    let node = walker.nextNode();
    for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
      const factory = viewFactories[behaviorIndex];
      const factoryIndex = factory.targetIndex;
      while (node !== null) {
        if (targetIndex === factoryIndex) {
          behaviors[behaviorIndex] = factory.createBehavior(node);
          break;
        } else {
          node = walker.nextNode();
          targetIndex++;
        }
      }
    }
    if (this.hasHostBehaviors) {
      const hostFactories = this.hostBehaviorFactories;
      for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
        behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
      }
    }
    return new _view_js__WEBPACK_IMPORTED_MODULE_3__["HTMLView"](fragment, behaviors);
  }
  /**
   * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
   * @param source - The data source to bind the template to.
   * @param host - The Element where the template will be rendered.
   * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
   * host that the template is being attached to.
   */
  render(source, host, hostBindingTarget) {
    if (typeof host === "string") {
      host = document.getElementById(host);
    }
    if (hostBindingTarget === void 0) {
      hostBindingTarget = host;
    }
    const view = this.create(hostBindingTarget);
    view.bind(source, _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["defaultExecutionContext"]);
    view.appendTo(host);
    return view;
  }
}
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = /* eslint-disable-next-line no-control-regex */
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * Transforms a template literal string into a renderable ViewTemplate.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The html helper supports interpolation of strings, numbers, binding expressions,
 * other template instances, and Directive instances.
 * @public
 */
function html(strings, ...values) {
  const directives = [];
  let html = "";
  for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
    const currentString = strings[i];
    let value = values[i];
    html += currentString;
    if (value instanceof ViewTemplate) {
      const template = value;
      value = () => template;
    }
    if (typeof value === "function") {
      value = new _binding_js__WEBPACK_IMPORTED_MODULE_5__["HTMLBindingDirective"](value);
    }
    if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_4__["TargetedHTMLDirective"]) {
      const match = lastAttributeNameRegex.exec(currentString);
      if (match !== null) {
        value.targetName = match[2];
      }
    }
    if (value instanceof _html_directive_js__WEBPACK_IMPORTED_MODULE_4__["HTMLDirective"]) {
      // Since not all values are directives, we can't use i
      // as the index for the placeholder. Instead, we need to
      // use directives.length to get the next index.
      html += value.createPlaceholder(directives.length);
      directives.push(value);
    } else {
      html += value;
    }
  }
  html += strings[strings.length - 1];
  return new ViewTemplate(html, directives);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interpolationStart", function() { return _interpolationStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interpolationEnd", function() { return _interpolationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const updateQueue = _platform_js__WEBPACK_IMPORTED_MODULE_0__["$global"].FAST.getById(1 /* updateQueue */, () => {
  const tasks = [];
  const pendingErrors = [];
  function throwFirstError() {
    if (pendingErrors.length) {
      throw pendingErrors.shift();
    }
  }
  function tryRunTask(task) {
    try {
      task.call();
    } catch (error) {
      pendingErrors.push(error);
      setTimeout(throwFirstError, 0);
    }
  }
  function process() {
    const capacity = 1024;
    let index = 0;
    while (index < tasks.length) {
      tryRunTask(tasks[index]);
      index++;
      // Prevent leaking memory for long chains of recursive calls to `DOM.queueUpdate`.
      // If we call `DOM.queueUpdate` within a task scheduled by `DOM.queueUpdate`, the queue will
      // grow, but to avoid an O(n) walk for every task we execute, we don't
      // shift tasks off the queue after they have been executed.
      // Instead, we periodically shift 1024 tasks off the queue.
      if (index > capacity) {
        // Manually shift all values starting at the index back to the
        // beginning of the queue.
        for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
          tasks[scan] = tasks[scan + index];
        }
        tasks.length -= index;
        index = 0;
      }
    }
    tasks.length = 0;
  }
  function enqueue(callable) {
    if (tasks.length < 1) {
      _platform_js__WEBPACK_IMPORTED_MODULE_0__["$global"].requestAnimationFrame(process);
    }
    tasks.push(callable);
  }
  return Object.freeze({
    enqueue,
    process
  });
});
/* eslint-disable */
const fastHTMLPolicy = _platform_js__WEBPACK_IMPORTED_MODULE_0__["$global"].trustedTypes.createPolicy("fast-html", {
  createHTML: html => html
});
/* eslint-enable */
let htmlPolicy = fastHTMLPolicy;
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
/** @internal */
const _interpolationStart = `${marker}{`;
/** @internal */
const _interpolationEnd = `}${marker}`;
/**
 * Common DOM APIs.
 * @public
 */
const DOM = Object.freeze({
  /**
   * Indicates whether the DOM supports the adoptedStyleSheets feature.
   */
  supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
  /**
   * Sets the HTML trusted types policy used by the templating engine.
   * @param policy - The policy to set for HTML.
   * @remarks
   * This API can only be called once, for security reasons. It should be
   * called by the application developer at the start of their program.
   */
  setHTMLPolicy(policy) {
    if (htmlPolicy !== fastHTMLPolicy) {
      throw new Error("The HTML policy can only be set once.");
    }
    htmlPolicy = policy;
  },
  /**
   * Turns a string into trusted HTML using the configured trusted types policy.
   * @param html - The string to turn into trusted HTML.
   * @remarks
   * Used internally by the template engine when creating templates
   * and setting innerHTML.
   */
  createHTML(html) {
    return htmlPolicy.createHTML(html);
  },
  /**
   * Determines if the provided node is a template marker used by the runtime.
   * @param node - The node to test.
   */
  isMarker(node) {
    return node && node.nodeType === 8 && node.data.startsWith(marker);
  },
  /**
   * Given a marker node, extract the {@link HTMLDirective} index from the placeholder.
   * @param node - The marker node to extract the index from.
   */
  extractDirectiveIndexFromMarker(node) {
    return parseInt(node.data.replace(`${marker}:`, ""));
  },
  /**
   * Creates a placeholder string suitable for marking out a location *within*
   * an attribute value or HTML content.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by binding directives.
   */
  createInterpolationPlaceholder(index) {
    return `${_interpolationStart}${index}${_interpolationEnd}`;
  },
  /**
   * Creates a placeholder that manifests itself as an attribute on an
   * element.
   * @param attributeName - The name of the custom attribute.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
   */
  createCustomAttributePlaceholder(attributeName, index) {
    return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
  },
  /**
   * Creates a placeholder that manifests itself as a marker within the DOM structure.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by structural directives such as `repeat`.
   */
  createBlockPlaceholder(index) {
    return `<!--${marker}:${index}-->`;
  },
  /**
   * Schedules DOM update work in the next async batch.
   * @param callable - The callable function or object to queue.
   */
  queueUpdate: updateQueue.enqueue,
  /**
   * Immediately processes all work previously scheduled
   * through queueUpdate.
   * @remarks
   * This also forces nextUpdate promises
   * to resolve.
   */
  processUpdates: updateQueue.process,
  /**
   * Resolves with the next DOM update.
   */
  nextUpdate() {
    return new Promise(updateQueue.enqueue);
  },
  /**
   * Sets an attribute value on an element.
   * @param element - The element to set the attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is `null` or `undefined`, the attribute is removed, otherwise
   * it is set to the provided value using the standard `setAttribute` API.
   */
  setAttribute(element, attributeName, value) {
    if (value === null || value === undefined) {
      element.removeAttribute(attributeName);
    } else {
      element.setAttribute(attributeName, value);
    }
  },
  /**
   * Sets a boolean attribute value.
   * @param element - The element to set the boolean attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is true, the attribute is added; otherwise it is removed.
   */
  setBooleanAttribute(element, attributeName, value) {
    value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
  },
  /**
   * Removes all the child nodes of the provided parent node.
   * @param parent - The node to remove the children from.
   */
  removeChildNodes(parent) {
    for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
      parent.removeChild(child);
    }
  },
  /**
   * Creates a TreeWalker configured to walk a template fragment.
   * @param fragment - The fragment to walk.
   */
  createTemplateWalker(fragment) {
    return document.createTreeWalker(fragment, 133,
    // element, text, comment
    null, false);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volatile", function() { return volatile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return ExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultExecutionContext", function() { return defaultExecutionContext; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _notifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



/**
 * Common Observable APIs.
 * @public
 */
const Observable = _platform_js__WEBPACK_IMPORTED_MODULE_1__["FAST"].getById(2 /* observable */, () => {
  const volatileRegex = /(:|&&|\|\||if)/;
  const notifierLookup = new WeakMap();
  const queueUpdate = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].queueUpdate;
  let watcher = void 0;
  let createArrayObserver = array => {
    throw new Error("Must call enableArrayObservation before observing arrays.");
  };
  function getNotifier(source) {
    let found = source.$fastController || notifierLookup.get(source);
    if (found === void 0) {
      if (Array.isArray(source)) {
        found = createArrayObserver(source);
      } else {
        notifierLookup.set(source, found = new _notifier_js__WEBPACK_IMPORTED_MODULE_2__["PropertyChangeNotifier"](source));
      }
    }
    return found;
  }
  const getAccessors = Object(_platform_js__WEBPACK_IMPORTED_MODULE_1__["createMetadataLocator"])();
  class DefaultObservableAccessor {
    constructor(name) {
      this.name = name;
      this.field = `_${name}`;
      this.callback = `${name}Changed`;
    }
    getValue(source) {
      if (watcher !== void 0) {
        watcher.watch(source, this.name);
      }
      return source[this.field];
    }
    setValue(source, newValue) {
      const field = this.field;
      const oldValue = source[field];
      if (oldValue !== newValue) {
        source[field] = newValue;
        const callback = source[this.callback];
        if (typeof callback === "function") {
          callback.call(source, oldValue, newValue);
        }
        getNotifier(source).notify(this.name);
      }
    }
  }
  class BindingObserverImplementation extends _notifier_js__WEBPACK_IMPORTED_MODULE_2__["SubscriberSet"] {
    constructor(binding, initialSubscriber, isVolatileBinding = false) {
      super(binding, initialSubscriber);
      this.binding = binding;
      this.isVolatileBinding = isVolatileBinding;
      this.needsRefresh = true;
      this.needsQueue = true;
      this.first = this;
      this.last = null;
      this.propertySource = void 0;
      this.propertyName = void 0;
      this.notifier = void 0;
      this.next = void 0;
    }
    observe(source, context) {
      if (this.needsRefresh && this.last !== null) {
        this.disconnect();
      }
      const previousWatcher = watcher;
      watcher = this.needsRefresh ? this : void 0;
      this.needsRefresh = this.isVolatileBinding;
      const result = this.binding(source, context);
      watcher = previousWatcher;
      return result;
    }
    disconnect() {
      if (this.last !== null) {
        let current = this.first;
        while (current !== void 0) {
          current.notifier.unsubscribe(this, current.propertyName);
          current = current.next;
        }
        this.last = null;
        this.needsRefresh = this.needsQueue = true;
      }
    }
    watch(propertySource, propertyName) {
      const prev = this.last;
      const notifier = getNotifier(propertySource);
      const current = prev === null ? this.first : {};
      current.propertySource = propertySource;
      current.propertyName = propertyName;
      current.notifier = notifier;
      notifier.subscribe(this, propertyName);
      if (prev !== null) {
        if (!this.needsRefresh) {
          // Declaring the variable prior to assignment below circumvents
          // a bug in Angular's optimization process causing infinite recursion
          // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
          let prevValue;
          watcher = void 0;
          /* eslint-disable-next-line */
          prevValue = prev.propertySource[prev.propertyName];
          /* eslint-disable-next-line @typescript-eslint/no-this-alias */
          watcher = this;
          if (propertySource === prevValue) {
            this.needsRefresh = true;
          }
        }
        prev.next = current;
      }
      this.last = current;
    }
    handleChange() {
      if (this.needsQueue) {
        this.needsQueue = false;
        queueUpdate(this);
      }
    }
    call() {
      if (this.last !== null) {
        this.needsQueue = true;
        this.notify(this);
      }
    }
    records() {
      let next = this.first;
      return {
        next: () => {
          const current = next;
          if (current === undefined) {
            return {
              value: void 0,
              done: true
            };
          } else {
            next = next.next;
            return {
              value: current,
              done: false
            };
          }
        },
        [Symbol.iterator]: function () {
          return this;
        }
      };
    }
  }
  return Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
      createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier,
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
      if (watcher !== void 0) {
        watcher.watch(source, propertyName);
      }
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
      if (watcher !== void 0) {
        watcher.needsRefresh = true;
      }
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
      getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
      if (typeof nameOrAccessor === "string") {
        nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
      }
      getAccessors(target).push(nameOrAccessor);
      Reflect.defineProperty(target, nameOrAccessor.name, {
        enumerable: true,
        get: function () {
          return nameOrAccessor.getValue(this);
        },
        set: function (newValue) {
          nameOrAccessor.setValue(this, newValue);
        }
      });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors,
    /**
     * Creates a {@link BindingObserver} that can watch the
     * provided {@link Binding} for changes.
     * @param binding - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
      return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param binding - The binding to inspect.
     */
    isVolatileBinding(binding) {
      return volatileRegex.test(binding.toString());
    }
  });
});
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */
function observable(target, nameOrAccessor) {
  Observable.defineProperty(target, nameOrAccessor);
}
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */
function volatile(target, name, descriptor) {
  return Object.assign({}, descriptor, {
    get: function () {
      Observable.trackVolatile();
      return descriptor.get.apply(this);
    }
  });
}
const contextEvent = _platform_js__WEBPACK_IMPORTED_MODULE_1__["FAST"].getById(3 /* contextEvent */, () => {
  let current = null;
  return {
    get() {
      return current;
    },
    set(event) {
      current = event;
    }
  };
});
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
class ExecutionContext {
  constructor() {
    /**
     * The index of the current item within a repeat context.
     */
    this.index = 0;
    /**
     * The length of the current collection within a repeat context.
     */
    this.length = 0;
    /**
     * The parent data object within a repeat context.
     */
    this.parent = null;
    /**
     * The parent execution context when in nested context scenarios.
     */
    this.parentContext = null;
  }
  /**
   * The current event within an event handler.
   */
  get event() {
    return contextEvent.get();
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an even index.
   */
  get isEven() {
    return this.index % 2 === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an odd index.
   */
  get isOdd() {
    return this.index % 2 !== 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the first item in the collection.
   */
  get isFirst() {
    return this.index === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is somewhere in the middle of the collection.
   */
  get isInMiddle() {
    return !this.isFirst && !this.isLast;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the last item in the collection.
   */
  get isLast() {
    return this.index === this.length - 1;
  }
  /**
   * Sets the event for the current execution context.
   * @param event - The event to set.
   * @internal
   */
  static setEvent(event) {
    contextEvent.set(event);
  }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
/**
 * The default execution context used in binding expressions.
 * @public
 */
const defaultExecutionContext = Object.seal(new ExecutionContext());

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberSet", function() { return SubscriberSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyChangeNotifier", function() { return PropertyChangeNotifier; });
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable source.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */
class SubscriberSet {
  /**
   * Creates an instance of SubscriberSet for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   * @param initialSubscriber - An initial subscriber to changes.
   */
  constructor(source, initialSubscriber) {
    this.sub1 = void 0;
    this.sub2 = void 0;
    this.spillover = void 0;
    this.source = source;
    this.sub1 = initialSubscriber;
  }
  /**
   * Checks whether the provided subscriber has been added to this set.
   * @param subscriber - The subscriber to test for inclusion in this set.
   */
  has(subscriber) {
    return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   */
  subscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.has(subscriber)) {
        return;
      }
      if (this.sub1 === void 0) {
        this.sub1 = subscriber;
        return;
      }
      if (this.sub2 === void 0) {
        this.sub2 = subscriber;
        return;
      }
      this.spillover = [this.sub1, this.sub2, subscriber];
      this.sub1 = void 0;
      this.sub2 = void 0;
    } else {
      const index = spillover.indexOf(subscriber);
      if (index === -1) {
        spillover.push(subscriber);
      }
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   */
  unsubscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.sub1 === subscriber) {
        this.sub1 = void 0;
      } else if (this.sub2 === subscriber) {
        this.sub2 = void 0;
      }
    } else {
      const index = spillover.indexOf(subscriber);
      if (index !== -1) {
        spillover.splice(index, 1);
      }
    }
  }
  /**
   * Notifies all subscribers.
   * @param args - Data passed along to subscribers during notification.
   */
  notify(args) {
    const spillover = this.spillover;
    const source = this.source;
    if (spillover === void 0) {
      const sub1 = this.sub1;
      const sub2 = this.sub2;
      if (sub1 !== void 0) {
        sub1.handleChange(source, args);
      }
      if (sub2 !== void 0) {
        sub2.handleChange(source, args);
      }
    } else {
      for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
      }
    }
  }
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
class PropertyChangeNotifier {
  /**
   * Creates an instance of PropertyChangeNotifier for the specified source.
   * @param source - The object source that subscribers will receive notifications from.
   */
  constructor(source) {
    this.subscribers = {};
    this.sourceSubscribers = null;
    this.source = source;
  }
  /**
   * Notifies all subscribers, based on the specified property.
   * @param propertyName - The property name, passed along to subscribers during notification.
   */
  notify(propertyName) {
    var _a;
    const subscribers = this.subscribers[propertyName];
    if (subscribers !== void 0) {
      subscribers.notify(propertyName);
    }
    (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
   */
  subscribe(subscriber, propertyToWatch) {
    var _a;
    if (propertyToWatch) {
      let subscribers = this.subscribers[propertyToWatch];
      if (subscribers === void 0) {
        this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
      }
      subscribers.subscribe(subscriber);
    } else {
      this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
      this.sourceSubscribers.subscribe(subscriber);
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
   */
  unsubscribe(subscriber, propertyToUnwatch) {
    var _a;
    if (propertyToUnwatch) {
      const subscribers = this.subscribers[propertyToUnwatch];
      if (subscribers !== void 0) {
        subscribers.unsubscribe(subscriber);
      }
    } else {
      (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
    }
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return compileTemplate; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _binding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


let sharedContext = null;
class CompilationContext {
  addFactory(factory) {
    factory.targetIndex = this.targetIndex;
    this.behaviorFactories.push(factory);
  }
  captureContentBinding(directive) {
    directive.targetAtContent();
    this.addFactory(directive);
  }
  reset() {
    this.behaviorFactories = [];
    this.targetIndex = -1;
  }
  release() {
    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    sharedContext = this;
  }
  static borrow(directives) {
    const shareable = sharedContext || new CompilationContext();
    shareable.directives = directives;
    shareable.reset();
    sharedContext = null;
    return shareable;
  }
}
function createAggregateBinding(parts) {
  if (parts.length === 1) {
    return parts[0];
  }
  let targetName;
  const partCount = parts.length;
  const finalParts = parts.map(x => {
    if (typeof x === "string") {
      return () => x;
    }
    targetName = x.targetName || targetName;
    return x.binding;
  });
  const binding = (scope, context) => {
    let output = "";
    for (let i = 0; i < partCount; ++i) {
      output += finalParts[i](scope, context);
    }
    return output;
  };
  const directive = new _binding_js__WEBPACK_IMPORTED_MODULE_1__["HTMLBindingDirective"](binding);
  directive.targetName = targetName;
  return directive;
}
const interpolationEndLength = _dom_js__WEBPACK_IMPORTED_MODULE_0__["_interpolationEnd"].length;
function parseContent(context, value) {
  const valueParts = value.split(_dom_js__WEBPACK_IMPORTED_MODULE_0__["_interpolationStart"]);
  if (valueParts.length === 1) {
    return null;
  }
  const bindingParts = [];
  for (let i = 0, ii = valueParts.length; i < ii; ++i) {
    const current = valueParts[i];
    const index = current.indexOf(_dom_js__WEBPACK_IMPORTED_MODULE_0__["_interpolationEnd"]);
    let literal;
    if (index === -1) {
      literal = current;
    } else {
      const directiveIndex = parseInt(current.substring(0, index));
      bindingParts.push(context.directives[directiveIndex]);
      literal = current.substring(index + interpolationEndLength);
    }
    if (literal !== "") {
      bindingParts.push(literal);
    }
  }
  return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
  const attributes = node.attributes;
  for (let i = 0, ii = attributes.length; i < ii; ++i) {
    const attr = attributes[i];
    const attrValue = attr.value;
    const parseResult = parseContent(context, attrValue);
    let result = null;
    if (parseResult === null) {
      if (includeBasicValues) {
        result = new _binding_js__WEBPACK_IMPORTED_MODULE_1__["HTMLBindingDirective"](() => attrValue);
        result.targetName = attr.name;
      }
    } else {
      result = createAggregateBinding(parseResult);
    }
    if (result !== null) {
      node.removeAttributeNode(attr);
      i--;
      ii--;
      context.addFactory(result);
    }
  }
}
function compileContent(context, node, walker) {
  const parseResult = parseContent(context, node.textContent);
  if (parseResult !== null) {
    let lastNode = node;
    for (let i = 0, ii = parseResult.length; i < ii; ++i) {
      const currentPart = parseResult[i];
      const currentNode = i === 0 ? node : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
      if (typeof currentPart === "string") {
        currentNode.textContent = currentPart;
      } else {
        currentNode.textContent = " ";
        context.captureContentBinding(currentPart);
      }
      lastNode = currentNode;
      context.targetIndex++;
      if (currentNode !== node) {
        walker.nextNode();
      }
    }
    context.targetIndex--;
  }
}
/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
function compileTemplate(template, directives) {
  const fragment = template.content;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
  document.adoptNode(fragment);
  const context = CompilationContext.borrow(directives);
  compileAttributes(context, template, true);
  const hostBehaviorFactories = context.behaviorFactories;
  context.reset();
  const walker = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createTemplateWalker(fragment);
  let node;
  while (node = walker.nextNode()) {
    context.targetIndex++;
    switch (node.nodeType) {
      case 1:
        // element node
        compileAttributes(context, node);
        break;
      case 3:
        // text node
        compileContent(context, node, walker);
        break;
      case 8:
        // comment
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].isMarker(node)) {
          context.addFactory(directives[_dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].extractDirectiveIndexFromMarker(node)]);
        }
    }
  }
  let targetOffset = 0;
  if (
  // If the first node in a fragment is a marker, that means it's an unstable first node,
  // because something like a when, repeat, etc. could add nodes before the marker.
  // To mitigate this, we insert a stable first node. However, if we insert a node,
  // that will alter the result of the TreeWalker. So, we also need to offset the target index.
  _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].isMarker(fragment.firstChild) ||
  // Or if there is only one node and a directive, it means the template's content
  // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
  // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
  fragment.childNodes.length === 1 && directives.length) {
    fragment.insertBefore(document.createComment(""), fragment.firstChild);
    targetOffset = -1;
  }
  const viewBehaviorFactories = context.behaviorFactories;
  context.release();
  return {
    fragment,
    viewBehaviorFactories,
    hostBehaviorFactories,
    targetOffset
  };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBindingDirective", function() { return HTMLBindingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingBehavior", function() { return BindingBehavior; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



function normalBind(source, context) {
  this.source = source;
  this.context = context;
  if (this.bindingObserver === null) {
    this.bindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].binding(this.binding, this, this.isBindingVolatile);
  }
  this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
  this.source = source;
  this.context = context;
  this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
}
function contentUnbind() {
  this.bindingObserver.disconnect();
  this.source = null;
  this.context = null;
  const view = this.target.$fastView;
  if (view !== void 0 && view.isComposed) {
    view.unbind();
    view.needsBindOnly = true;
  }
}
function triggerUnbind() {
  this.target.removeEventListener(this.targetName, this);
  this.source = null;
  this.context = null;
}
function updateAttributeTarget(value) {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
  // If there's no actual value, then this equates to the
  // empty string for the purposes of content bindings.
  if (value === null || value === undefined) {
    value = "";
  }
  // If the value has a "create" method, then it's a template-like.
  if (value.create) {
    this.target.textContent = "";
    let view = this.target.$fastView;
    // If there's no previous view that we might be able to
    // reuse then create a new view from the template.
    if (view === void 0) {
      view = value.create();
    } else {
      // If there is a previous view, but it wasn't created
      // from the same template as the new value, then we
      // need to remove the old view if it's still in the DOM
      // and create a new view from the template.
      if (this.target.$fastTemplate !== value) {
        if (view.isComposed) {
          view.remove();
          view.unbind();
        }
        view = value.create();
      }
    }
    // It's possible that the value is the same as the previous template
    // and that there's actually no need to compose it.
    if (!view.isComposed) {
      view.isComposed = true;
      view.bind(this.source, this.context);
      view.insertBefore(this.target);
      this.target.$fastView = view;
      this.target.$fastTemplate = value;
    } else if (view.needsBindOnly) {
      view.needsBindOnly = false;
      view.bind(this.source, this.context);
    }
  } else {
    const view = this.target.$fastView;
    // If there is a view and it's currently composed into
    // the DOM, then we need to remove it.
    if (view !== void 0 && view.isComposed) {
      view.isComposed = false;
      view.remove();
      if (view.needsBindOnly) {
        view.needsBindOnly = false;
      } else {
        view.unbind();
      }
    }
    this.target.textContent = value;
  }
}
function updatePropertyTarget(value) {
  this.target[this.targetName] = value;
}
function updateClassTarget(value) {
  const classVersions = this.classVersions || Object.create(null);
  const target = this.target;
  let version = this.version || 0;
  // Add the classes, tracking the version at which they were added.
  if (value !== null && value !== undefined && value.length) {
    const names = value.split(/\s+/);
    for (let i = 0, ii = names.length; i < ii; ++i) {
      const currentName = names[i];
      if (currentName === "") {
        continue;
      }
      classVersions[currentName] = version;
      target.classList.add(currentName);
    }
  }
  this.classVersions = classVersions;
  this.version = version + 1;
  // If this is the first call to add classes, there's no need to remove old ones.
  if (version === 0) {
    return;
  }
  // Remove classes from the previous version.
  version -= 1;
  for (const name in classVersions) {
    if (classVersions[name] === version) {
      target.classList.remove(name);
    }
  }
}
/**
 * A directive that configures data binding to element content and attributes.
 * @public
 */
class HTMLBindingDirective extends _html_directive_js__WEBPACK_IMPORTED_MODULE_2__["TargetedHTMLDirective"] {
  /**
   * Creates an instance of BindingDirective.
   * @param binding - A binding that returns the data used to update the DOM.
   */
  constructor(binding) {
    super();
    this.binding = binding;
    this.bind = normalBind;
    this.unbind = normalUnbind;
    this.updateTarget = updateAttributeTarget;
    this.isBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].isVolatileBinding(this.binding);
  }
  /**
   * Gets/sets the name of the attribute or property that this
   * binding is targeting.
   */
  get targetName() {
    return this.originalTargetName;
  }
  set targetName(value) {
    this.originalTargetName = value;
    if (value === void 0) {
      return;
    }
    switch (value[0]) {
      case ":":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updatePropertyTarget;
        if (this.cleanedTargetName === "innerHTML") {
          const binding = this.binding;
          this.binding = (s, c) => _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createHTML(binding(s, c));
        }
        break;
      case "?":
        this.cleanedTargetName = value.substr(1);
        this.updateTarget = updateBooleanAttributeTarget;
        break;
      case "@":
        this.cleanedTargetName = value.substr(1);
        this.bind = triggerBind;
        this.unbind = triggerUnbind;
        break;
      default:
        this.cleanedTargetName = value;
        if (value === "class") {
          this.updateTarget = updateClassTarget;
        }
        break;
    }
  }
  /**
   * Makes this binding target the content of an element rather than
   * a particular attribute or property.
   */
  targetAtContent() {
    this.updateTarget = updateContentTarget;
    this.unbind = contentUnbind;
  }
  /**
   * Creates the runtime BindingBehavior instance based on the configuration
   * information stored in the BindingDirective.
   * @param target - The target node that the binding behavior should attach to.
   */
  createBehavior(target) {
    /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
    return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
  }
}
/**
 * A behavior that updates content and attributes based on a configured
 * BindingDirective.
 * @public
 */
class BindingBehavior {
  /**
   * Creates an instance of BindingBehavior.
   * @param target - The target of the data updates.
   * @param binding - The binding that returns the latest value for an update.
   * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
   * @param bind - The operation to perform during binding.
   * @param unbind - The operation to perform during unbinding.
   * @param updateTarget - The operation to perform when updating.
   * @param targetName - The name of the target attribute or property to update.
   */
  constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
    /** @internal */
    this.source = null;
    /** @internal */
    this.context = null;
    /** @internal */
    this.bindingObserver = null;
    this.target = target;
    this.binding = binding;
    this.isBindingVolatile = isBindingVolatile;
    this.bind = bind;
    this.unbind = unbind;
    this.updateTarget = updateTarget;
    this.targetName = targetName;
  }
  /** @internal */
  handleChange() {
    this.updateTarget(this.bindingObserver.observe(this.source, this.context));
  }
  /** @internal */
  handleEvent(event) {
    _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["ExecutionContext"].setEvent(event);
    const result = this.binding(this.source, this.context);
    _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["ExecutionContext"].setEvent(null);
    if (result !== true) {
      event.preventDefault();
    }
  }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDirective", function() { return HTMLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetedHTMLDirective", function() { return TargetedHTMLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachedBehaviorHTMLDirective", function() { return AttachedBehaviorHTMLDirective; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/**
 * Instructs the template engine to apply behavior to a node.
 * @public
 */
class HTMLDirective {
  constructor() {
    /**
     * The index of the DOM node to which the created behavior will apply.
     */
    this.targetIndex = 0;
  }
}
/**
 * A {@link HTMLDirective} that targets a named attribute or property on a node.
 * @public
 */
class TargetedHTMLDirective extends HTMLDirective {
  constructor() {
    super(...arguments);
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     */
    this.createPlaceholder = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createInterpolationPlaceholder;
  }
}
/**
 * A directive that attaches special behavior to an element via a custom attribute.
 * @public
 */
class AttachedBehaviorHTMLDirective extends HTMLDirective {
  /**
   *
   * @param name - The name of the behavior; used as a custom attribute on the element.
   * @param behavior - The behavior to instantiate and attach to the element.
   * @param options - Options to pass to the behavior during creation.
   */
  constructor(name, behavior, options) {
    super();
    this.name = name;
    this.behavior = behavior;
    this.options = options;
  }
  /**
   * Creates a placeholder string based on the directive's index within the template.
   * @param index - The index of the directive within the template.
   * @remarks
   * Creates a custom attribute placeholder.
   */
  createPlaceholder(index) {
    return _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createCustomAttributePlaceholder(this.name, index);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   * @remarks
   * Creates an instance of the `behavior` type this directive was constructed with
   * and passes the target and options to that `behavior`'s constructor.
   */
  createBehavior(target) {
    return new this.behavior(target, this.options);
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return HTMLView; });
// A singleton Range instance used to efficiently remove ranges of DOM nodes.
// See the implementation of HTMLView below for further details.
const range = document.createRange();
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */
class HTMLView {
  /**
   * Constructs an instance of HTMLView.
   * @param fragment - The html fragment that contains the nodes for this view.
   * @param behaviors - The behaviors to be applied to this view.
   */
  constructor(fragment, behaviors) {
    this.fragment = fragment;
    this.behaviors = behaviors;
    /**
     * The data that the view is bound to.
     */
    this.source = null;
    /**
     * The execution context the view is running within.
     */
    this.context = null;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
  }
  /**
   * Appends the view's DOM nodes to the referenced node.
   * @param node - The parent node to append the view's DOM nodes to.
   */
  appendTo(node) {
    node.appendChild(this.fragment);
  }
  /**
   * Inserts the view's DOM nodes before the referenced node.
   * @param node - The node to insert the view's DOM before.
   */
  insertBefore(node) {
    if (this.fragment.hasChildNodes()) {
      node.parentNode.insertBefore(this.fragment, node);
    } else {
      const end = this.lastChild;
      if (node.previousSibling === end) return;
      const parentNode = node.parentNode;
      let current = this.firstChild;
      let next;
      while (current !== end) {
        next = current.nextSibling;
        parentNode.insertBefore(current, node);
        current = next;
      }
      parentNode.insertBefore(end, node);
    }
  }
  /**
   * Removes the view's DOM nodes.
   * The nodes are not disposed and the view can later be re-inserted.
   */
  remove() {
    const fragment = this.fragment;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      fragment.appendChild(current);
      current = next;
    }
    fragment.appendChild(end);
  }
  /**
   * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
   * Once a view has been disposed, it cannot be inserted or bound again.
   */
  dispose() {
    const parent = this.firstChild.parentNode;
    const end = this.lastChild;
    let current = this.firstChild;
    let next;
    while (current !== end) {
      next = current.nextSibling;
      parent.removeChild(current);
      current = next;
    }
    parent.removeChild(end);
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii = behaviors.length; i < ii; ++i) {
      behaviors[i].unbind(oldSource);
    }
  }
  /**
   * Binds a view's behaviors to its binding source.
   * @param source - The binding source for the view's binding behaviors.
   * @param context - The execution context to run the behaviors within.
   */
  bind(source, context) {
    const behaviors = this.behaviors;
    if (this.source === source) {
      return;
    } else if (this.source !== null) {
      const oldSource = this.source;
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        const current = behaviors[i];
        current.unbind(oldSource);
        current.bind(source, context);
      }
    } else {
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].bind(source, context);
      }
    }
  }
  /**
   * Unbinds a view's behaviors from its binding source.
   */
  unbind() {
    if (this.source === null) {
      return;
    }
    const behaviors = this.behaviors;
    const oldSource = this.source;
    for (let i = 0, ii = behaviors.length; i < ii; ++i) {
      behaviors[i].unbind(oldSource);
    }
    this.source = null;
  }
  /**
   * Efficiently disposes of a contiguous range of synthetic view instances.
   * @param views - A contiguous range of views to be disposed.
   */
  static disposeContiguousBatch(views) {
    if (views.length === 0) {
      return;
    }
    range.setStartBefore(views[0].firstChild);
    range.setEndAfter(views[views.length - 1].lastChild);
    range.deleteContents();
    for (let i = 0, ii = views.length; i < ii; ++i) {
      const view = views[i];
      const behaviors = view.behaviors;
      const oldSource = view.source;
      for (let j = 0, jj = behaviors.length; j < jj; ++j) {
        behaviors[j].unbind(oldSource);
      }
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FASTElement", function() { return FASTElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function createFASTElement(BaseType) {
  return class extends BaseType {
    constructor() {
      /* eslint-disable-next-line */
      super();
      _controller_js__WEBPACK_IMPORTED_MODULE_0__["Controller"].forCustomElement(this);
    }
    $emit(type, detail, options) {
      return this.$fastController.emit(type, detail, options);
    }
    connectedCallback() {
      this.$fastController.onConnectedCallback();
    }
    disconnectedCallback() {
      this.$fastController.onDisconnectedCallback();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
    }
  };
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
  /**
   * Creates a new FASTElement base class inherited from the
   * provided base type.
   * @param BaseType - The base element type to inherit from.
   */
  from(BaseType) {
    return createFASTElement(BaseType);
  },
  /**
   * Defines a platform custom element based on the provided type and definition.
   * @param type - The custom element type to define.
   * @param nameOrDef - The name of the element to define or a definition object
   * that describes the element to define.
   */
  define(type, nameOrDef) {
    return new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__["FASTElementDefinition"](type, nameOrDef).define().type;
  }
});
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */
function customElement(nameOrDef) {
  /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
  return function (type) {
    new _fast_definitions_js__WEBPACK_IMPORTED_MODULE_1__["FASTElementDefinition"](type, nameOrDef).define();
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _observation_notifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);




const shadowRoots = new WeakMap();
const defaultEventOptions = {
  bubbles: true,
  composed: true,
  cancelable: true
};
function getShadowRoot(element) {
  return element.shadowRoot || shadowRoots.get(element) || null;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
class Controller extends _observation_notifier_js__WEBPACK_IMPORTED_MODULE_1__["PropertyChangeNotifier"] {
  /**
   * Creates a Controller to control the specified element.
   * @param element - The element to be controlled by this controller.
   * @param definition - The element definition metadata that instructs this
   * controller in how to handle rendering and other platform integrations.
   * @internal
   */
  constructor(element, definition) {
    super(element);
    this.boundObservables = null;
    this.behaviors = null;
    this.needsInitialization = true;
    this._template = null;
    this._styles = null;
    this._isConnected = false;
    /**
     * This allows Observable.getNotifier(...) to return the Controller
     * when the notifier for the Controller itself is being requested. The
     * result is that the Observable system does not need to create a separate
     * instance of Notifier for observables on the Controller. The component and
     * the controller will now share the same notifier, removing one-object construct
     * per web component instance.
     */
    this.$fastController = this;
    /**
     * The view associated with the custom element.
     * @remarks
     * If `null` then the element is managing its own rendering.
     */
    this.view = null;
    this.element = element;
    this.definition = definition;
    const shadowOptions = definition.shadowOptions;
    if (shadowOptions !== void 0) {
      const shadowRoot = element.attachShadow(shadowOptions);
      if (shadowOptions.mode === "closed") {
        shadowRoots.set(element, shadowRoot);
      }
    }
    // Capture any observable values that were set by the binding engine before
    // the browser upgraded the element. Then delete the property since it will
    // shadow the getter/setter that is required to make the observable operate.
    // Later, in the connect callback, we'll re-apply the values.
    const accessors = _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].getAccessors(element);
    if (accessors.length > 0) {
      const boundObservables = this.boundObservables = Object.create(null);
      for (let i = 0, ii = accessors.length; i < ii; ++i) {
        const propertyName = accessors[i].name;
        const value = element[propertyName];
        if (value !== void 0) {
          delete element[propertyName];
          boundObservables[propertyName] = value;
        }
      }
    }
  }
  /**
   * Indicates whether or not the custom element has been
   * connected to the document.
   */
  get isConnected() {
    _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].track(this, "isConnected");
    return this._isConnected;
  }
  setIsConnected(value) {
    this._isConnected = value;
    _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].notify(this, "isConnected");
  }
  /**
   * Gets/sets the template used to render the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get template() {
    return this._template;
  }
  set template(value) {
    if (this._template === value) {
      return;
    }
    this._template = value;
    if (!this.needsInitialization) {
      this.renderTemplate(value);
    }
  }
  /**
   * Gets/sets the primary styles used for the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get styles() {
    return this._styles;
  }
  set styles(value) {
    if (this._styles === value) {
      return;
    }
    if (this._styles !== null) {
      this.removeStyles(this._styles);
    }
    this._styles = value;
    if (!this.needsInitialization && value !== null) {
      this.addStyles(value);
    }
  }
  /**
   * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
   * @param styles - The styles to add.
   */
  addStyles(styles) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles instanceof HTMLStyleElement) {
      target.append(styles);
    } else if (!styles.isAttachedTo(target)) {
      const sourceBehaviors = styles.behaviors;
      styles.addStylesTo(target);
      if (sourceBehaviors !== null) {
        this.addBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
   * @param styles - the styles to remove.
   */
  removeStyles(styles) {
    const target = getShadowRoot(this.element) || this.element.getRootNode();
    if (styles instanceof HTMLStyleElement) {
      target.removeChild(styles);
    } else if (styles.isAttachedTo(target)) {
      const sourceBehaviors = styles.behaviors;
      styles.removeStylesFrom(target);
      if (sourceBehaviors !== null) {
        this.removeBehaviors(sourceBehaviors);
      }
    }
  }
  /**
   * Adds behaviors to this element.
   * @param behaviors - The behaviors to add.
   */
  addBehaviors(behaviors) {
    const targetBehaviors = this.behaviors || (this.behaviors = new Map());
    const length = behaviors.length;
    const behaviorsToBind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
      } else {
        targetBehaviors.set(behavior, 1);
        behaviorsToBind.push(behavior);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToBind.length; ++i) {
        behaviorsToBind[i].bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["defaultExecutionContext"]);
      }
    }
  }
  /**
   * Removes behaviors from this element.
   * @param behaviors - The behaviors to remove.
   * @param force - Forces unbinding of behaviors.
   */
  removeBehaviors(behaviors, force = false) {
    const targetBehaviors = this.behaviors;
    if (targetBehaviors === null) {
      return;
    }
    const length = behaviors.length;
    const behaviorsToUnbind = [];
    for (let i = 0; i < length; ++i) {
      const behavior = behaviors[i];
      if (targetBehaviors.has(behavior)) {
        const count = targetBehaviors.get(behavior) - 1;
        count === 0 || force ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior) : targetBehaviors.set(behavior, count);
      }
    }
    if (this._isConnected) {
      const element = this.element;
      for (let i = 0; i < behaviorsToUnbind.length; ++i) {
        behaviorsToUnbind[i].unbind(element);
      }
    }
  }
  /**
   * Runs connected lifecycle behavior on the associated element.
   */
  onConnectedCallback() {
    if (this._isConnected) {
      return;
    }
    const element = this.element;
    if (this.needsInitialization) {
      this.finishInitialization();
    } else if (this.view !== null) {
      this.view.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["defaultExecutionContext"]);
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      for (const [behavior] of behaviors) {
        behavior.bind(element, _observation_observable_js__WEBPACK_IMPORTED_MODULE_2__["defaultExecutionContext"]);
      }
    }
    this.setIsConnected(true);
  }
  /**
   * Runs disconnected lifecycle behavior on the associated element.
   */
  onDisconnectedCallback() {
    if (!this._isConnected) {
      return;
    }
    this.setIsConnected(false);
    const view = this.view;
    if (view !== null) {
      view.unbind();
    }
    const behaviors = this.behaviors;
    if (behaviors !== null) {
      const element = this.element;
      for (const [behavior] of behaviors) {
        behavior.unbind(element);
      }
    }
  }
  /**
   * Runs the attribute changed callback for the associated element.
   * @param name - The name of the attribute that changed.
   * @param oldValue - The previous value of the attribute.
   * @param newValue - The new value of the attribute.
   */
  onAttributeChangedCallback(name, oldValue, newValue) {
    const attrDef = this.definition.attributeLookup[name];
    if (attrDef !== void 0) {
      attrDef.onAttributeChangedCallback(this.element, newValue);
    }
  }
  /**
   * Emits a custom HTML event.
   * @param type - The type name of the event.
   * @param detail - The event detail object to send with the event.
   * @param options - The event options. By default bubbles and composed.
   * @remarks
   * Only emits events if connected.
   */
  emit(type, detail, options) {
    if (this._isConnected) {
      return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({
        detail
      }, defaultEventOptions), options)));
    }
    return false;
  }
  finishInitialization() {
    const element = this.element;
    const boundObservables = this.boundObservables;
    // If we have any observables that were bound, re-apply their values.
    if (boundObservables !== null) {
      const propertyNames = Object.keys(boundObservables);
      for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
        const propertyName = propertyNames[i];
        element[propertyName] = boundObservables[propertyName];
      }
      this.boundObservables = null;
    }
    const definition = this.definition;
    // 1. Template overrides take top precedence.
    if (this._template === null) {
      if (this.element.resolveTemplate) {
        // 2. Allow for element instance overrides next.
        this._template = this.element.resolveTemplate();
      } else if (definition.template) {
        // 3. Default to the static definition.
        this._template = definition.template || null;
      }
    }
    // If we have a template after the above process, render it.
    // If there's no template, then the element author has opted into
    // custom rendering and they will managed the shadow root's content themselves.
    if (this._template !== null) {
      this.renderTemplate(this._template);
    }
    // 1. Styles overrides take top precedence.
    if (this._styles === null) {
      if (this.element.resolveStyles) {
        // 2. Allow for element instance overrides next.
        this._styles = this.element.resolveStyles();
      } else if (definition.styles) {
        // 3. Default to the static definition.
        this._styles = definition.styles || null;
      }
    }
    // If we have styles after the above process, add them.
    if (this._styles !== null) {
      this.addStyles(this._styles);
    }
    this.needsInitialization = false;
  }
  renderTemplate(template) {
    const element = this.element;
    // When getting the host to render to, we start by looking
    // up the shadow root. If there isn't one, then that means
    // we're doing a Light DOM render to the element's direct children.
    const host = getShadowRoot(element) || element;
    if (this.view !== null) {
      // If there's already a view, we need to unbind and remove through dispose.
      this.view.dispose();
      this.view = null;
    } else if (!this.needsInitialization) {
      // If there was previous custom rendering, we need to clear out the host.
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].removeChildNodes(host);
    }
    if (template) {
      // If a new template was provided, render it.
      this.view = template.render(element, host, element);
    }
  }
  /**
   * Locates or creates a controller for the specified element.
   * @param element - The element to return the controller for.
   * @remarks
   * The specified element must have a {@link FASTElementDefinition}
   * registered either through the use of the {@link customElement}
   * decorator or a call to `FASTElement.define`.
   */
  static forCustomElement(element) {
    const controller = element.$fastController;
    if (controller !== void 0) {
      return controller;
    }
    const definition = _fast_definitions_js__WEBPACK_IMPORTED_MODULE_3__["FASTElementDefinition"].forType(element.constructor);
    if (definition === void 0) {
      throw new Error("Missing FASTElement definition.");
    }
    return element.$fastController = new Controller(element, definition);
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FASTElementDefinition", function() { return FASTElementDefinition; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




const defaultShadowOptions = {
  mode: "open"
};
const defaultElementOptions = {};
const fastRegistry = _platform_js__WEBPACK_IMPORTED_MODULE_0__["FAST"].getById(4 /* elementRegistry */, () => {
  const typeToDefinition = new Map();
  return Object.freeze({
    register(definition) {
      if (typeToDefinition.has(definition.type)) {
        return false;
      }
      typeToDefinition.set(definition.type, definition);
      return true;
    },
    getByType(key) {
      return typeToDefinition.get(key);
    }
  });
});
/**
 * Defines metadata for a FASTElement.
 * @public
 */
class FASTElementDefinition {
  /**
   * Creates an instance of FASTElementDefinition.
   * @param type - The type this definition is being created for.
   * @param nameOrConfig - The name of the element to define or a config object
   * that describes the element to define.
   */
  constructor(type, nameOrConfig = type.definition) {
    if (typeof nameOrConfig === "string") {
      nameOrConfig = {
        name: nameOrConfig
      };
    }
    this.type = type;
    this.name = nameOrConfig.name;
    this.template = nameOrConfig.template;
    const attributes = _attributes_js__WEBPACK_IMPORTED_MODULE_3__["AttributeDefinition"].collect(type, nameOrConfig.attributes);
    const observedAttributes = new Array(attributes.length);
    const propertyLookup = {};
    const attributeLookup = {};
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
      const current = attributes[i];
      observedAttributes[i] = current.attribute;
      propertyLookup[current.name] = current;
      attributeLookup[current.attribute] = current;
    }
    this.attributes = attributes;
    this.observedAttributes = observedAttributes;
    this.propertyLookup = propertyLookup;
    this.attributeLookup = attributeLookup;
    this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
    this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
    this.styles = nameOrConfig.styles === void 0 ? void 0 : Array.isArray(nameOrConfig.styles) ? _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__["ElementStyles"].create(nameOrConfig.styles) : nameOrConfig.styles instanceof _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__["ElementStyles"] ? nameOrConfig.styles : _styles_element_styles_js__WEBPACK_IMPORTED_MODULE_2__["ElementStyles"].create([nameOrConfig.styles]);
  }
  /**
   * Indicates if this element has been defined in at least one registry.
   */
  get isDefined() {
    return !!fastRegistry.getByType(this.type);
  }
  /**
   * Defines a custom element based on this definition.
   * @param registry - The element registry to define the element in.
   */
  define(registry = customElements) {
    const type = this.type;
    if (fastRegistry.register(this)) {
      const attributes = this.attributes;
      const proto = type.prototype;
      for (let i = 0, ii = attributes.length; i < ii; ++i) {
        _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].defineProperty(proto, attributes[i]);
      }
      Reflect.defineProperty(type, "observedAttributes", {
        value: this.observedAttributes,
        enumerable: true
      });
    }
    if (!registry.get(this.name)) {
      registry.define(this.name, type, this.elementOptions);
    }
    return this;
  }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */
FASTElementDefinition.forType = fastRegistry.getByType;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementStyles", function() { return ElementStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptedStyleSheetsStyles", function() { return AdoptedStyleSheetsStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleElementStyles", function() { return StyleElementStyles; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
class ElementStyles {
  constructor() {
    this.targets = new WeakSet();
  }
  /** @internal */
  addStylesTo(target) {
    this.targets.add(target);
  }
  /** @internal */
  removeStylesFrom(target) {
    this.targets.delete(target);
  }
  /** @internal */
  isAttachedTo(target) {
    return this.targets.has(target);
  }
  /**
   * Associates behaviors with this set of styles.
   * @param behaviors - The behaviors to associate.
   */
  withBehaviors(...behaviors) {
    this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
    return this;
  }
}
/**
 * Create ElementStyles from ComposableStyles.
 */
ElementStyles.create = (() => {
  if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].supportsAdoptedStyleSheets) {
    const styleSheetCache = new Map();
    return styles =>
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    new AdoptedStyleSheetsStyles(styles, styleSheetCache);
  }
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return styles => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
  return styles.map(x => x instanceof ElementStyles ? reduceStyles(x.styles) : [x]).reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
  return styles.map(x => x instanceof ElementStyles ? x.behaviors : null).reduce((prev, curr) => {
    if (curr === null) {
      return prev;
    }
    if (prev === null) {
      prev = [];
    }
    return prev.concat(curr);
  }, null);
}
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */
class AdoptedStyleSheetsStyles extends ElementStyles {
  constructor(styles, styleSheetCache) {
    super();
    this.styles = styles;
    this.styleSheetCache = styleSheetCache;
    this._styleSheets = void 0;
    this.behaviors = reduceBehaviors(styles);
  }
  get styleSheets() {
    if (this._styleSheets === void 0) {
      const styles = this.styles;
      const styleSheetCache = this.styleSheetCache;
      this._styleSheets = reduceStyles(styles).map(x => {
        if (x instanceof CSSStyleSheet) {
          return x;
        }
        let sheet = styleSheetCache.get(x);
        if (sheet === void 0) {
          sheet = new CSSStyleSheet();
          sheet.replaceSync(x);
          styleSheetCache.set(x, sheet);
        }
        return sheet;
      });
    }
    return this._styleSheets;
  }
  addStylesTo(target) {
    target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...this.styleSheets];
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    const sourceSheets = this.styleSheets;
    target.adoptedStyleSheets = target.adoptedStyleSheets.filter(x => sourceSheets.indexOf(x) === -1);
    super.removeStylesFrom(target);
  }
}
let styleClassId = 0;
function getNextStyleClass() {
  return `fast-style-class-${++styleClassId}`;
}
/**
 * @internal
 */
class StyleElementStyles extends ElementStyles {
  constructor(styles) {
    super();
    this.styles = styles;
    this.behaviors = null;
    this.behaviors = reduceBehaviors(styles);
    this.styleSheets = reduceStyles(styles);
    this.styleClass = getNextStyleClass();
  }
  addStylesTo(target) {
    const styleSheets = this.styleSheets;
    const styleClass = this.styleClass;
    target = this.normalizeTarget(target);
    for (let i = 0; i < styleSheets.length; i++) {
      const element = document.createElement("style");
      element.innerHTML = styleSheets[i];
      element.className = styleClass;
      target.append(element);
    }
    super.addStylesTo(target);
  }
  removeStylesFrom(target) {
    target = this.normalizeTarget(target);
    const styles = target.querySelectorAll(`.${this.styleClass}`);
    for (let i = 0, ii = styles.length; i < ii; ++i) {
      target.removeChild(styles[i]);
    }
    super.removeStylesFrom(target);
  }
  isAttachedTo(target) {
    return super.isAttachedTo(this.normalizeTarget(target));
  }
  normalizeTarget(target) {
    return target === document ? document.body : target;
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeConfiguration", function() { return AttributeConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanConverter", function() { return booleanConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullableNumberConverter", function() { return nullableNumberConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeDefinition", function() { return AttributeDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



/**
 * Metadata used to configure a custom attribute's behavior.
 * @public
 */
const AttributeConfiguration = Object.freeze({
  /**
   * Locates all attribute configurations associated with a type.
   */
  locate: Object(_platform_js__WEBPACK_IMPORTED_MODULE_2__["createMetadataLocator"])()
});
/**
 * A {@link ValueConverter} that converts to and from `boolean` values.
 * @remarks
 * Used automatically when the `boolean` {@link AttributeMode} is selected.
 * @public
 */
const booleanConverter = {
  toView(value) {
    return value ? "true" : "false";
  },
  fromView(value) {
    if (value === null || value === void 0 || value === "false" || value === false || value === 0) {
      return false;
    }
    return true;
  }
};
/**
 * A {@link ValueConverter} that converts to and from `number` values.
 * @remarks
 * This converter allows for nullable numbers, returning `null` if the
 * input was `null`, `undefined`, or `NaN`.
 * @public
 */
const nullableNumberConverter = {
  toView(value) {
    if (value === null || value === undefined) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number.toString();
  },
  fromView(value) {
    if (value === null || value === undefined) {
      return null;
    }
    const number = value * 1;
    return isNaN(number) ? null : number;
  }
};
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
class AttributeDefinition {
  /**
   * Creates an instance of AttributeDefinition.
   * @param Owner - The class constructor that owns this attribute.
   * @param name - The name of the property associated with the attribute.
   * @param attribute - The name of the attribute in HTML.
   * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
   * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
   * to convert values to and from a DOM string.
   */
  constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
    this.guards = new Set();
    this.Owner = Owner;
    this.name = name;
    this.attribute = attribute;
    this.mode = mode;
    this.converter = converter;
    this.fieldName = `_${name}`;
    this.callbackName = `${name}Changed`;
    this.hasCallback = this.callbackName in Owner.prototype;
    if (mode === "boolean" && converter === void 0) {
      this.converter = booleanConverter;
    }
  }
  /**
   * Sets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   * @param value - The value to set the attribute/property to.
   */
  setValue(source, newValue) {
    const oldValue = source[this.fieldName];
    const converter = this.converter;
    if (converter !== void 0) {
      newValue = converter.fromView(newValue);
    }
    if (oldValue !== newValue) {
      source[this.fieldName] = newValue;
      this.tryReflectToAttribute(source);
      if (this.hasCallback) {
        source[this.callbackName](oldValue, newValue);
      }
      source.$fastController.notify(this.name);
    }
  }
  /**
   * Gets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   */
  getValue(source) {
    _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"].track(source, this.name);
    return source[this.fieldName];
  }
  /** @internal */
  onAttributeChangedCallback(element, value) {
    if (this.guards.has(element)) {
      return;
    }
    this.guards.add(element);
    this.setValue(element, value);
    this.guards.delete(element);
  }
  tryReflectToAttribute(element) {
    const mode = this.mode;
    const guards = this.guards;
    if (guards.has(element) || mode === "fromView") {
      return;
    }
    _dom_js__WEBPACK_IMPORTED_MODULE_1__["DOM"].queueUpdate(() => {
      guards.add(element);
      const latestValue = element[this.fieldName];
      switch (mode) {
        case "reflect":
          const converter = this.converter;
          _dom_js__WEBPACK_IMPORTED_MODULE_1__["DOM"].setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
          break;
        case "boolean":
          _dom_js__WEBPACK_IMPORTED_MODULE_1__["DOM"].setBooleanAttribute(element, this.attribute, latestValue);
          break;
      }
      guards.delete(element);
    });
  }
  /**
   * Collects all attribute definitions associated with the owner.
   * @param Owner - The class constructor to collect attribute for.
   * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
   * @internal
   */
  static collect(Owner, ...attributeLists) {
    const attributes = [];
    attributeLists.push(AttributeConfiguration.locate(Owner));
    for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
      const list = attributeLists[i];
      if (list === void 0) {
        continue;
      }
      for (let j = 0, jj = list.length; j < jj; ++j) {
        const config = list[j];
        if (typeof config === "string") {
          attributes.push(new AttributeDefinition(Owner, config));
        } else {
          attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
        }
      }
    }
    return attributes;
  }
}
function attr(configOrTarget, prop) {
  let config;
  function decorator($target, $prop) {
    if (arguments.length > 1) {
      // Non invocation:
      // - @attr
      // Invocation with or w/o opts:
      // - @attr()
      // - @attr({...opts})
      config.property = $prop;
    }
    AttributeConfiguration.locate($target.constructor).push(config);
  }
  if (arguments.length > 1) {
    // Non invocation:
    // - @attr
    config = {};
    decorator(configOrTarget, prop);
    return;
  }
  // Invocation with or w/o opts:
  // - @attr()
  // - @attr({...opts})
  config = configOrTarget === void 0 ? {} : configOrTarget;
  return decorator;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssPartial", function() { return cssPartial; });
/* harmony import */ var _css_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _element_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);


function collectStyles(strings, values) {
  const styles = [];
  let cssString = "";
  const behaviors = [];
  for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
    cssString += strings[i];
    let value = values[i];
    if (value instanceof _css_directive_js__WEBPACK_IMPORTED_MODULE_0__["CSSDirective"]) {
      const behavior = value.createBehavior();
      value = value.createCSS();
      if (behavior) {
        behaviors.push(behavior);
      }
    }
    if (value instanceof _element_styles_js__WEBPACK_IMPORTED_MODULE_1__["ElementStyles"] || value instanceof CSSStyleSheet) {
      if (cssString.trim() !== "") {
        styles.push(cssString);
        cssString = "";
      }
      styles.push(value);
    } else {
      cssString += value;
    }
  }
  cssString += strings[strings.length - 1];
  if (cssString.trim() !== "") {
    styles.push(cssString);
  }
  return {
    styles,
    behaviors
  };
}
/**
 * Transforms a template literal string into styles.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The css helper supports interpolation of strings and ElementStyle instances.
 * @public
 */
function css(strings, ...values) {
  const {
    styles,
    behaviors
  } = collectStyles(strings, values);
  const elementStyles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__["ElementStyles"].create(styles);
  if (behaviors.length) {
    elementStyles.withBehaviors(...behaviors);
  }
  return elementStyles;
}
class CSSPartial extends _css_directive_js__WEBPACK_IMPORTED_MODULE_0__["CSSDirective"] {
  constructor(styles, behaviors) {
    super();
    this.behaviors = behaviors;
    this.css = "";
    const stylesheets = styles.reduce((accumulated, current) => {
      if (typeof current === "string") {
        this.css += current;
      } else {
        accumulated.push(current);
      }
      return accumulated;
    }, []);
    if (stylesheets.length) {
      this.styles = _element_styles_js__WEBPACK_IMPORTED_MODULE_1__["ElementStyles"].create(stylesheets);
    }
  }
  createBehavior() {
    return this;
  }
  createCSS() {
    return this.css;
  }
  bind(el) {
    if (this.styles) {
      el.$fastController.addStyles(this.styles);
    }
    if (this.behaviors.length) {
      el.$fastController.addBehaviors(this.behaviors);
    }
  }
  unbind(el) {
    if (this.styles) {
      el.$fastController.removeStyles(this.styles);
    }
    if (this.behaviors.length) {
      el.$fastController.removeBehaviors(this.behaviors);
    }
  }
}
/**
 * Transforms a template literal string into partial CSS.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @public
 */
function cssPartial(strings, ...values) {
  const {
    styles,
    behaviors
  } = collectStyles(strings, values);
  return new CSSPartial(styles, behaviors);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSDirective", function() { return CSSDirective; });
/**
 * Directive for use in {@link css}.
 *
 * @public
 */
class CSSDirective {
  /**
   * Creates a CSS fragment to interpolate into the CSS document.
   * @returns - the string to interpolate into CSS
   */
  createCSS() {
    return "";
  }
  /**
   * Creates a behavior to bind to the host element.
   * @returns - the behavior to bind to the host element, or undefined.
   */
  createBehavior() {
    return undefined;
  }
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSplice", function() { return newSplice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSplices", function() { return calcSplices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectArraySplices", function() { return projectArraySplices; });
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/** @internal */
function newSplice(index, removed, addedCount) {
  return {
    index: index,
    removed: removed,
    addedCount: addedCount
  };
}
const EDIT_LEAVE = 0;
const EDIT_UPDATE = 1;
const EDIT_ADD = 2;
const EDIT_DELETE = 3;
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  // "Deletion" columns
  const rowCount = oldEnd - oldStart + 1;
  const columnCount = currentEnd - currentStart + 1;
  const distances = new Array(rowCount);
  let north;
  let west;
  // "Addition" rows. Initialize null column.
  for (let i = 0; i < rowCount; ++i) {
    distances[i] = new Array(columnCount);
    distances[i][0] = i;
  }
  // Initialize null row
  for (let j = 0; j < columnCount; ++j) {
    distances[0][j] = j;
  }
  for (let i = 1; i < rowCount; ++i) {
    for (let j = 1; j < columnCount; ++j) {
      if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
        distances[i][j] = distances[i - 1][j - 1];
      } else {
        north = distances[i - 1][j] + 1;
        west = distances[i][j - 1] + 1;
        distances[i][j] = north < west ? north : west;
      }
    }
  }
  return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
  let i = distances.length - 1;
  let j = distances[0].length - 1;
  let current = distances[i][j];
  const edits = [];
  while (i > 0 || j > 0) {
    if (i === 0) {
      edits.push(EDIT_ADD);
      j--;
      continue;
    }
    if (j === 0) {
      edits.push(EDIT_DELETE);
      i--;
      continue;
    }
    const northWest = distances[i - 1][j - 1];
    const west = distances[i - 1][j];
    const north = distances[i][j - 1];
    let min;
    if (west < north) {
      min = west < northWest ? west : northWest;
    } else {
      min = north < northWest ? north : northWest;
    }
    if (min === northWest) {
      if (northWest === current) {
        edits.push(EDIT_LEAVE);
      } else {
        edits.push(EDIT_UPDATE);
        current = northWest;
      }
      i--;
      j--;
    } else if (min === west) {
      edits.push(EDIT_DELETE);
      i--;
      current = west;
    } else {
      edits.push(EDIT_ADD);
      j--;
      current = north;
    }
  }
  edits.reverse();
  return edits;
}
function sharedPrefix(current, old, searchLength) {
  for (let i = 0; i < searchLength; ++i) {
    if (current[i] !== old[i]) {
      return i;
    }
  }
  return searchLength;
}
function sharedSuffix(current, old, searchLength) {
  let index1 = current.length;
  let index2 = old.length;
  let count = 0;
  while (count < searchLength && current[--index1] === old[--index2]) {
    count++;
  }
  return count;
}
function intersect(start1, end1, start2, end2) {
  // Disjoint
  if (end1 < start2 || end2 < start1) {
    return -1;
  }
  // Adjacent
  if (end1 === start2 || end2 === start1) {
    return 0;
  }
  // Non-zero intersect, span1 first
  if (start1 < start2) {
    if (end1 < end2) {
      return end1 - start2; // Overlap
    }

    return end2 - start2; // Contained
  }
  // Non-zero intersect, span2 first
  if (end2 < end1) {
    return end2 - start1; // Overlap
  }

  return end1 - start1; // Contained
}
/**
 * Splice Projection functions:
 *
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   <index, removed, addedCount>
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 */
/**
 * @internal
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  let prefixCount = 0;
  let suffixCount = 0;
  const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
  if (currentStart === 0 && oldStart === 0) {
    prefixCount = sharedPrefix(current, old, minLength);
  }
  if (currentEnd === current.length && oldEnd === old.length) {
    suffixCount = sharedSuffix(current, old, minLength - prefixCount);
  }
  currentStart += prefixCount;
  oldStart += prefixCount;
  currentEnd -= suffixCount;
  oldEnd -= suffixCount;
  if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
    return _platform_js__WEBPACK_IMPORTED_MODULE_0__["emptyArray"];
  }
  if (currentStart === currentEnd) {
    const splice = newSplice(currentStart, [], 0);
    while (oldStart < oldEnd) {
      splice.removed.push(old[oldStart++]);
    }
    return [splice];
  } else if (oldStart === oldEnd) {
    return [newSplice(currentStart, [], currentEnd - currentStart)];
  }
  const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
  const splices = [];
  let splice = void 0;
  let index = currentStart;
  let oldIndex = oldStart;
  for (let i = 0; i < ops.length; ++i) {
    switch (ops[i]) {
      case EDIT_LEAVE:
        if (splice !== void 0) {
          splices.push(splice);
          splice = void 0;
        }
        index++;
        oldIndex++;
        break;
      case EDIT_UPDATE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
      case EDIT_ADD:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.addedCount++;
        index++;
        break;
      case EDIT_DELETE:
        if (splice === void 0) {
          splice = newSplice(index, [], 0);
        }
        splice.removed.push(old[oldIndex]);
        oldIndex++;
        break;
      // no default
    }
  }

  if (splice !== void 0) {
    splices.push(splice);
  }
  return splices;
}
const $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
  const splice = newSplice(index, removed, addedCount);
  let inserted = false;
  let insertionOffset = 0;
  for (let i = 0; i < splices.length; i++) {
    const current = splices[i];
    current.index += insertionOffset;
    if (inserted) {
      continue;
    }
    const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
    if (intersectCount >= 0) {
      // Merge the two splices
      splices.splice(i, 1);
      i--;
      insertionOffset -= current.addedCount - current.removed.length;
      splice.addedCount += current.addedCount - intersectCount;
      const deleteCount = splice.removed.length + current.removed.length - intersectCount;
      if (!splice.addedCount && !deleteCount) {
        // merged splice is a noop. discard.
        inserted = true;
      } else {
        let currentRemoved = current.removed;
        if (splice.index < current.index) {
          // some prefix of splice.removed is prepended to current.removed.
          const prepend = splice.removed.slice(0, current.index - splice.index);
          $push.apply(prepend, currentRemoved);
          currentRemoved = prepend;
        }
        if (splice.index + splice.removed.length > current.index + current.addedCount) {
          // some suffix of splice.removed is appended to current.removed.
          const append = splice.removed.slice(current.index + current.addedCount - splice.index);
          $push.apply(currentRemoved, append);
        }
        splice.removed = currentRemoved;
        if (current.index < splice.index) {
          splice.index = current.index;
        }
      }
    } else if (splice.index < current.index) {
      // Insert splice here.
      inserted = true;
      splices.splice(i, 0, splice);
      i++;
      const offset = splice.addedCount - splice.removed.length;
      current.index += offset;
      insertionOffset += offset;
    }
  }
  if (!inserted) {
    splices.push(splice);
  }
}
function createInitialSplices(changeRecords) {
  const splices = [];
  for (let i = 0, ii = changeRecords.length; i < ii; i++) {
    const record = changeRecords[i];
    mergeSplice(splices, record.index, record.removed, record.addedCount);
  }
  return splices;
}
/** @internal */
function projectArraySplices(array, changeRecords) {
  let splices = [];
  const initialSplices = createInitialSplices(changeRecords);
  for (let i = 0, ii = initialSplices.length; i < ii; ++i) {
    const splice = initialSplices[i];
    if (splice.addedCount === 1 && splice.removed.length === 1) {
      if (splice.removed[0] !== array[splice.index]) {
        splices.push(splice);
      }
      continue;
    }
    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
  }
  return splices;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableArrayObservation", function() { return enableArrayObservation; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _array_change_records_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _notifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




let arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
  let index = changeRecord.index;
  const arrayLength = array.length;
  if (index > arrayLength) {
    index = arrayLength - changeRecord.addedCount;
  } else if (index < 0) {
    index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
  }
  if (index < 0) {
    index = 0;
  }
  changeRecord.index = index;
  return changeRecord;
}
class ArrayObserver extends _notifier_js__WEBPACK_IMPORTED_MODULE_2__["SubscriberSet"] {
  constructor(source) {
    super(source);
    this.oldCollection = void 0;
    this.splices = void 0;
    this.needsQueue = true;
    this.call = this.flush;
    Reflect.defineProperty(source, "$fastController", {
      value: this,
      enumerable: false
    });
  }
  subscribe(subscriber) {
    this.flush();
    super.subscribe(subscriber);
  }
  addSplice(splice) {
    if (this.splices === void 0) {
      this.splices = [splice];
    } else {
      this.splices.push(splice);
    }
    if (this.needsQueue) {
      this.needsQueue = false;
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].queueUpdate(this);
    }
  }
  reset(oldCollection) {
    this.oldCollection = oldCollection;
    if (this.needsQueue) {
      this.needsQueue = false;
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].queueUpdate(this);
    }
  }
  flush() {
    const splices = this.splices;
    const oldCollection = this.oldCollection;
    if (splices === void 0 && oldCollection === void 0) {
      return;
    }
    this.needsQueue = true;
    this.splices = void 0;
    this.oldCollection = void 0;
    const finalSplices = oldCollection === void 0 ? Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["projectArraySplices"])(this.source, splices) : Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["calcSplices"])(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
    this.notify(finalSplices);
  }
}
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Enables the array observation mechanism.
 * @remarks
 * Array observation is enabled automatically when using the
 * {@link RepeatDirective}, so calling this API manually is
 * not typically necessary.
 * @public
 */
function enableArrayObservation() {
  if (arrayObservationEnabled) {
    return;
  }
  arrayObservationEnabled = true;
  _observable_js__WEBPACK_IMPORTED_MODULE_3__["Observable"].setArrayObserverFactory(collection => {
    return new ArrayObserver(collection);
  });
  const proto = Array.prototype;
  // Don't patch Array if it has already been patched
  // by another copy of fast-element.
  if (proto.$fastPatch) {
    return;
  }
  Reflect.defineProperty(proto, "$fastPatch", {
    value: 1,
    enumerable: false
  });
  const pop = proto.pop;
  const push = proto.push;
  const reverse = proto.reverse;
  const shift = proto.shift;
  const sort = proto.sort;
  const splice = proto.splice;
  const unshift = proto.unshift;
  proto.pop = function () {
    const notEmpty = this.length > 0;
    const methodCallResult = pop.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["newSplice"])(this.length, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.push = function () {
    const methodCallResult = push.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["newSplice"])(this.length - arguments.length, [], arguments.length), this));
    }
    return methodCallResult;
  };
  proto.reverse = function () {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = reverse.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.shift = function () {
    const notEmpty = this.length > 0;
    const methodCallResult = shift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0 && notEmpty) {
      o.addSplice(Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["newSplice"])(0, [methodCallResult], 0));
    }
    return methodCallResult;
  };
  proto.sort = function () {
    let oldArray;
    const o = this.$fastController;
    if (o !== void 0) {
      o.flush();
      oldArray = this.slice();
    }
    const methodCallResult = sort.apply(this, arguments);
    if (o !== void 0) {
      o.reset(oldArray);
    }
    return methodCallResult;
  };
  proto.splice = function () {
    const methodCallResult = splice.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["newSplice"])(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
    }
    return methodCallResult;
  };
  proto.unshift = function () {
    const methodCallResult = unshift.apply(this, arguments);
    const o = this.$fastController;
    if (o !== void 0) {
      o.addSplice(adjustIndex(Object(_array_change_records_js__WEBPACK_IMPORTED_MODULE_1__["newSplice"])(0, [], arguments.length), this));
    }
    return methodCallResult;
  };
}
/* eslint-enable prefer-rest-params */
/* eslint-enable @typescript-eslint/explicit-function-return-type */

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefBehavior", function() { return RefBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/**
 * The runtime behavior for template references.
 * @public
 */
class RefBehavior {
  /**
   * Creates an instance of RefBehavior.
   * @param target - The element to reference.
   * @param propertyName - The name of the property to assign the reference to.
   */
  constructor(target, propertyName) {
    this.target = target;
    this.propertyName = propertyName;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    source[this.propertyName] = this.target;
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  unbind() {}
}
/**
 * A directive that observes the updates a property with a reference to the element.
 * @param propertyName - The name of the property to assign the reference to.
 * @public
 */
function ref(propertyName) {
  return new _html_directive_js__WEBPACK_IMPORTED_MODULE_0__["AttachedBehaviorHTMLDirective"]("fast-ref", RefBehavior, propertyName);
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/**
 * A directive that enables basic conditional rendering in a template.
 * @param binding - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @public
 */
function when(binding, templateOrTemplateBinding) {
  const getTemplate = typeof templateOrTemplateBinding === "function" ? templateOrTemplateBinding : () => templateOrTemplateBinding;
  return (source, context) => binding(source, context) ? getTemplate(source, context) : null;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatBehavior", function() { return RepeatBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatDirective", function() { return RepeatDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _observation_array_observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);






const defaultRepeatOptions = Object.freeze({
  positioning: false,
  recycle: true
});
function bindWithoutPositioning(view, items, index, context) {
  view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
  const childContext = Object.create(context);
  childContext.index = index;
  childContext.length = items.length;
  view.bind(items[index], childContext);
}
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */
class RepeatBehavior {
  /**
   * Creates an instance of RepeatBehavior.
   * @param location - The location in the DOM to render the repeat.
   * @param itemsBinding - The array to render.
   * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
   * @param templateBinding - The template to render for each item.
   * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
    this.location = location;
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    this.source = null;
    this.views = [];
    this.items = null;
    this.itemsObserver = null;
    this.originalContext = void 0;
    this.childContext = void 0;
    this.bindView = bindWithoutPositioning;
    this.itemsBindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].binding(itemsBinding, this, isItemsBindingVolatile);
    this.templateBindingObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].binding(templateBinding, this, isTemplateBindingVolatile);
    if (options.positioning) {
      this.bindView = bindWithPositioning;
    }
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source, context) {
    this.source = source;
    this.originalContext = context;
    this.childContext = Object.create(context);
    this.childContext.parent = source;
    this.childContext.parentContext = this.originalContext;
    this.items = this.itemsBindingObserver.observe(source, this.originalContext);
    this.template = this.templateBindingObserver.observe(source, this.originalContext);
    this.observeItems(true);
    this.refreshAllViews();
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.source = null;
    this.items = null;
    if (this.itemsObserver !== null) {
      this.itemsObserver.unsubscribe(this);
    }
    this.unbindAllViews();
    this.itemsBindingObserver.disconnect();
    this.templateBindingObserver.disconnect();
  }
  /** @internal */
  handleChange(source, args) {
    if (source === this.itemsBinding) {
      this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
      this.observeItems();
      this.refreshAllViews();
    } else if (source === this.templateBinding) {
      this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
      this.refreshAllViews(true);
    } else {
      this.updateViews(args);
    }
  }
  observeItems(force = false) {
    if (!this.items) {
      this.items = _platform_js__WEBPACK_IMPORTED_MODULE_3__["emptyArray"];
      return;
    }
    const oldObserver = this.itemsObserver;
    const newObserver = this.itemsObserver = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].getNotifier(this.items);
    const hasNewObserver = oldObserver !== newObserver;
    if (hasNewObserver && oldObserver !== null) {
      oldObserver.unsubscribe(this);
    }
    if (hasNewObserver || force) {
      newObserver.subscribe(this);
    }
  }
  updateViews(splices) {
    const childContext = this.childContext;
    const views = this.views;
    const bindView = this.bindView;
    const items = this.items;
    const template = this.template;
    const recycle = this.options.recycle;
    const leftoverViews = [];
    let leftoverIndex = 0;
    let availableViews = 0;
    for (let i = 0, ii = splices.length; i < ii; ++i) {
      const splice = splices[i];
      const removed = splice.removed;
      let removeIndex = 0;
      let addIndex = splice.index;
      const end = addIndex + splice.addedCount;
      const removedViews = views.splice(splice.index, removed.length);
      const totalAvailableViews = availableViews = leftoverViews.length + removedViews.length;
      for (; addIndex < end; ++addIndex) {
        const neighbor = views[addIndex];
        const location = neighbor ? neighbor.firstChild : this.location;
        let view;
        if (recycle && availableViews > 0) {
          if (removeIndex <= totalAvailableViews && removedViews.length > 0) {
            view = removedViews[removeIndex];
            removeIndex++;
          } else {
            view = leftoverViews[leftoverIndex];
            leftoverIndex++;
          }
          availableViews--;
        } else {
          view = template.create();
        }
        views.splice(addIndex, 0, view);
        bindView(view, items, addIndex, childContext);
        view.insertBefore(location);
      }
      if (removedViews[removeIndex]) {
        leftoverViews.push(...removedViews.slice(removeIndex));
      }
    }
    for (let i = leftoverIndex, ii = leftoverViews.length; i < ii; ++i) {
      leftoverViews[i].dispose();
    }
    if (this.options.positioning) {
      for (let i = 0, ii = views.length; i < ii; ++i) {
        const currentContext = views[i].context;
        currentContext.length = ii;
        currentContext.index = i;
      }
    }
  }
  refreshAllViews(templateChanged = false) {
    const items = this.items;
    const childContext = this.childContext;
    const template = this.template;
    const location = this.location;
    const bindView = this.bindView;
    let itemsLength = items.length;
    let views = this.views;
    let viewsLength = views.length;
    if (itemsLength === 0 || templateChanged || !this.options.recycle) {
      // all views need to be removed
      _view_js__WEBPACK_IMPORTED_MODULE_5__["HTMLView"].disposeContiguousBatch(views);
      viewsLength = 0;
    }
    if (viewsLength === 0) {
      // all views need to be created
      this.views = views = new Array(itemsLength);
      for (let i = 0; i < itemsLength; ++i) {
        const view = template.create();
        bindView(view, items, i, childContext);
        views[i] = view;
        view.insertBefore(location);
      }
    } else {
      // attempt to reuse existing views with new data
      let i = 0;
      for (; i < itemsLength; ++i) {
        if (i < viewsLength) {
          const view = views[i];
          bindView(view, items, i, childContext);
        } else {
          const view = template.create();
          bindView(view, items, i, childContext);
          views.push(view);
          view.insertBefore(location);
        }
      }
      const removed = views.splice(i, viewsLength - i);
      for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
        removed[i].dispose();
      }
    }
  }
  unbindAllViews() {
    const views = this.views;
    for (let i = 0, ii = views.length; i < ii; ++i) {
      views[i].unbind();
    }
  }
}
/**
 * A directive that configures list rendering.
 * @public
 */
class RepeatDirective extends _html_directive_js__WEBPACK_IMPORTED_MODULE_4__["HTMLDirective"] {
  /**
   * Creates an instance of RepeatDirective.
   * @param itemsBinding - The binding that provides the array to render.
   * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
   * @param options - Options used to turn on special repeat features.
   */
  constructor(itemsBinding, templateBinding, options) {
    super();
    this.itemsBinding = itemsBinding;
    this.templateBinding = templateBinding;
    this.options = options;
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     */
    this.createPlaceholder = _dom_js__WEBPACK_IMPORTED_MODULE_0__["DOM"].createBlockPlaceholder;
    Object(_observation_array_observer_js__WEBPACK_IMPORTED_MODULE_2__["enableArrayObservation"])();
    this.isItemsBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].isVolatileBinding(itemsBinding);
    this.isTemplateBindingVolatile = _observation_observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].isVolatileBinding(templateBinding);
  }
  /**
   * Creates a behavior for the provided target node.
   * @param target - The node instance to create the behavior for.
   */
  createBehavior(target) {
    return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
  }
}
/**
 * A directive that enables list rendering.
 * @param itemsBinding - The array to render.
 * @param templateOrTemplateBinding - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */
function repeat(itemsBinding, templateOrTemplateBinding, options = defaultRepeatOptions) {
  const templateBinding = typeof templateOrTemplateBinding === "function" ? templateOrTemplateBinding : () => templateOrTemplateBinding;
  return new RepeatDirective(itemsBinding, templateBinding, Object.assign(Object.assign({}, defaultRepeatOptions), options));
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlottedBehavior", function() { return SlottedBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slotted", function() { return slotted; });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_observation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * The runtime behavior for slotted node observation.
 * @public
 */
class SlottedBehavior extends _node_observation_js__WEBPACK_IMPORTED_MODULE_1__["NodeObservationBehavior"] {
  /**
   * Creates an instance of SlottedBehavior.
   * @param target - The slot element target to observe.
   * @param options - The options to use when observing the slot.
   */
  constructor(target, options) {
    super(target, options);
  }
  /**
   * Begins observation of the nodes.
   */
  observe() {
    this.target.addEventListener("slotchange", this);
  }
  /**
   * Disconnects observation of the nodes.
   */
  disconnect() {
    this.target.removeEventListener("slotchange", this);
  }
  /**
   * Retrieves the nodes that should be assigned to the target.
   */
  getNodes() {
    return this.target.assignedNodes(this.options);
  }
}
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */
function slotted(propertyOrOptions) {
  if (typeof propertyOrOptions === "string") {
    propertyOrOptions = {
      property: propertyOrOptions
    };
  }
  return new _html_directive_js__WEBPACK_IMPORTED_MODULE_0__["AttachedBehaviorHTMLDirective"]("fast-slotted", SlottedBehavior, propertyOrOptions);
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeObservationBehavior", function() { return NodeObservationBehavior; });
/* harmony import */ var _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


/**
 * Creates a function that can be used to filter a Node array, selecting only elements.
 * @param selector - An optional selector to restrict the filter to.
 * @public
 */
function elements(selector) {
  if (selector) {
    return function (value, index, array) {
      return value.nodeType === 1 && value.matches(selector);
    };
  }
  return function (value, index, array) {
    return value.nodeType === 1;
  };
}
/**
 * A base class for node observation.
 * @internal
 */
class NodeObservationBehavior {
  /**
   * Creates an instance of NodeObservationBehavior.
   * @param target - The target to assign the nodes property on.
   * @param options - The options to use in configuring node observation.
   */
  constructor(target, options) {
    this.target = target;
    this.options = options;
    this.source = null;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   */
  bind(source) {
    const name = this.options.property;
    this.shouldUpdate = _observation_observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"].getAccessors(source).some(x => x.name === name);
    this.source = source;
    this.updateTarget(this.computeNodes());
    if (this.shouldUpdate) {
      this.observe();
    }
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   */
  unbind() {
    this.updateTarget(_platform_js__WEBPACK_IMPORTED_MODULE_1__["emptyArray"]);
    this.source = null;
    if (this.shouldUpdate) {
      this.disconnect();
    }
  }
  /** @internal */
  handleEvent() {
    this.updateTarget(this.computeNodes());
  }
  computeNodes() {
    let nodes = this.getNodes();
    if (this.options.filter !== void 0) {
      nodes = nodes.filter(this.options.filter);
    }
    return nodes;
  }
  updateTarget(value) {
    this.source[this.options.property] = value;
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenBehavior", function() { return ChildrenBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony import */ var _html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_observation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * The runtime behavior for child node observation.
 * @public
 */
class ChildrenBehavior extends _node_observation_js__WEBPACK_IMPORTED_MODULE_1__["NodeObservationBehavior"] {
  /**
   * Creates an instance of ChildrenBehavior.
   * @param target - The element target to observe children on.
   * @param options - The options to use when observing the element children.
   */
  constructor(target, options) {
    super(target, options);
    this.observer = null;
    options.childList = true;
  }
  /**
   * Begins observation of the nodes.
   */
  observe() {
    if (this.observer === null) {
      this.observer = new MutationObserver(this.handleEvent.bind(this));
    }
    this.observer.observe(this.target, this.options);
  }
  /**
   * Disconnects observation of the nodes.
   */
  disconnect() {
    this.observer.disconnect();
  }
  /**
   * Retrieves the nodes that should be assigned to the target.
   */
  getNodes() {
    if ("subtree" in this.options) {
      return Array.from(this.target.querySelectorAll(this.options.selector));
    }
    return Array.from(this.target.childNodes);
  }
}
/**
 * A directive that observes the `childNodes` of an element and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure child node observation.
 * @public
 */
function children(propertyOrOptions) {
  if (typeof propertyOrOptions === "string") {
    propertyOrOptions = {
      property: propertyOrOptions
    };
  }
  return new _html_directive_js__WEBPACK_IMPORTED_MODULE_0__["AttachedBehaviorHTMLDirective"]("fast-children", ChildrenBehavior, propertyOrOptions);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
  <div class="header-container">This is Header</div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
  .header-container {
    color: red;
  }
`;
let Header = class Header extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["FASTElement"] {
    constructor() {
        super();
    }
    connectedCallback() {
        // Runs when the element is inserted into the DOM. 
        // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
        super.connectedCallback();
        console.log('header-tag is now connected to the DOM');
    }
};
Header = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])({
        name: 'header-tag',
        template,
        styles
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Header);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
  <div class="header-container">This is Footer</div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
  .header-container {
    color: blue;
  }
`;
let Footer = class Footer extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["FASTElement"] {
    constructor() {
        super();
    }
    connectedCallback() {
        // Runs when the element is inserted into the DOM. 
        // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
        super.connectedCallback();
        console.log('footer-tag is now connected to the DOM');
    }
};
Footer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])({
        name: 'footer-tag',
        template,
        styles
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Footer);



/***/ })
/******/ ]);