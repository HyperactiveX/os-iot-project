webpackHotUpdate_N_E("pages/register",{

/***/ "./components/RegisterComponent.js":
/*!*****************************************!*\
  !*** ./components/RegisterComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Template */ "./components/Template.js");
/* harmony import */ var _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/register.module.css */ "./styles/register.module.css");
/* harmony import */ var _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\CSC217 Project\\os-iot-project\\my-app\\components\\RegisterComponent.js",
    _s = $RefreshSig$();





function RegisterComponent() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      errorState = _useState3[0],
      setErrorState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      error = _useState5[0],
      setError = _useState5[1];

  var register = /*#__PURE__*/function () {
    var _ref = Object(D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              checkPassword;
              _context.next = 4;
              return axios.post('http://localhost:8080/register', {
                params: {
                  username: username,
                  password: password
                }
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.warn(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function register() {
      return _ref.apply(this, arguments);
    };
  }();

  var checkPassword = function checkPassword() {
    if (confirm != password) {
      setErrorState(true);
      setError("Password does not match");
      return false;
    }

    setErrorState(false);
    return true;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Template__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
          placeholder: "Username",
          type: "text",
          onChange: function onChange(e) {
            return setUsername(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
          placeholder: "Password",
          type: "password",
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
          placeholder: "Confirm password",
          type: "password",
          onChange: function onChange(e) {
            return setConfirm(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: errorState ? "".concat(_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.errorMessage, " ").concat(_styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.play) : _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.errorMessage,
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.buttonBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.registerButton,
            onClick: register,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: register,
            className: _styles_register_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.backButton,
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(RegisterComponent, "1As44zYxZiDscVMyxfdIDRp2aZw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = RegisterComponent;

var _c;

$RefreshReg$(_c, "RegisterComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlckNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvclN0YXRlIiwic2V0RXJyb3JTdGF0ZSIsImNvbmZpcm0iLCJzZXRDb25maXJtIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZ2lzdGVyIiwiY2hlY2tQYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInBhcmFtcyIsImNvbnNvbGUiLCJ3YXJuIiwic3R5bGVzIiwidGl0bGUiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsInBsYXkiLCJidXR0b25Cb3giLCJyZWdpc3RlckJ1dHRvbiIsImJhY2tCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHdDLGtCQUVSQyxzREFBUSxFQUZBO0FBQUEsTUFFakNDLFFBRmlDO0FBQUEsTUFFdkJDLFdBRnVCOztBQUFBLG1CQUdSRixzREFBUSxFQUhBO0FBQUEsTUFHakNHLFFBSGlDO0FBQUEsTUFHdkJDLFdBSHVCOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLENBQUQsQ0FKSjtBQUFBLE1BSWpDSyxVQUppQztBQUFBLE1BSXJCQyxhQUpxQjs7QUFBQSxtQkFLVk4sc0RBQVEsQ0FBQyxFQUFELENBTEU7QUFBQSxNQUtqQ08sT0FMaUM7QUFBQSxNQUt4QkMsVUFMd0I7O0FBQUEsbUJBTWRSLHNEQUFRLEVBTk07QUFBQSxNQU1qQ1MsS0FOaUM7QUFBQSxNQU0xQkMsUUFOMEI7O0FBUXhDLE1BQU1DLFFB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QixpQjtVQUNMRSxxRDs7O0tBREtGLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmIyMjBkY2FmZjY2NjMyZDYxMzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL1RlbXBsYXRlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9yZWdpc3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbZXJyb3JTdGF0ZSwgc2V0RXJyb3JTdGF0ZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NvbmZpcm0sIHNldENvbmZpcm1dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNoZWNrUGFzc3dvcmRcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdGVyJywge3BhcmFtczoge3VzZXJuYW1lLCBwYXNzd29yZH19KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0gIT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JTdGF0ZSh0cnVlKVxyXG4gICAgICAgICAgICBzZXRFcnJvcihcIlBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFcnJvclN0YXRlKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm0oZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvclN0YXRlID8gYCR7c3R5bGVzLmVycm9yTWVzc2FnZX0gJHtzdHlsZXMucGxheX1gIDogc3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0ZXJCdXR0b259IG9uQ2xpY2s9e3JlZ2lzdGVyfT5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZ2lzdGVyfSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrQnV0dG9ufT5CYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9UZW1wbGF0ZT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==