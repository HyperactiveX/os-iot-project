webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Template */ "./components/Template.js");




var _jsxFileName = "D:\\CSC217 Project\\os-iot-project\\my-app\\components\\Login.js",
    _s = $RefreshSig$();






function Login() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      errorState = _useState4[0],
      setErrorState = _useState4[1];

  var login = /*#__PURE__*/function () {
    var _ref = Object(D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return D_CSC217_Project_os_iot_project_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:8080/authenticate', {
                params: {
                  username: username,
                  password: password
                }
              });

            case 3:
              response = _context.sent;

              if (response.data) {
                router.push("/home");
              } else {
                setError("Incorrect username or password");
                setErrorState(true);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function login() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Template__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.signBox,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginInput,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              placeholder: "Username",
              type: "text",
              onChange: function onChange(e) {
                return setUsername(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              placeholder: "Password",
              type: "password",
              onChange: function onChange(e) {
                return setPassword(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: errorState ? "".concat(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorMessage, " ").concat(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.play) : _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorMessage,
              children: error
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonBox,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: login,
                className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginButton,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: login,
                className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.signUpButton,
                children: "Sign up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Login, "AKWtFmaFN3tiLE30hEfRf1Bc+ZA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JTdGF0ZSIsInNldEVycm9yU3RhdGUiLCJsb2dpbiIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwicmVzcG9uc2UiLCJkYXRhIiwicHVzaCIsImNvbnNvbGUiLCJ3YXJuIiwic3R5bGVzIiwic2lnbkJveCIsImxvZ2luSW5wdXQiLCJ0aXRsZSIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwicGxheSIsImJ1dHRvbkJveCIsImxvZ2luQnV0dG9uIiwic2lnblVwQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQ4QixrQkFFRUMsc0RBQVEsRUFGVjtBQUFBLE1BRXZCQyxRQUZ1QjtBQUFBLE1BRWJDLFdBRmE7O0FBQUEsbUJBR0VGLHNEQUFRLEVBSFY7QUFBQSxNQUd2QkcsUUFIdUI7QUFBQSxNQUdiQyxXQUhhOztBQUFBLG1CQUlKSixzREFBUSxDQUFDLEVBQUQsQ0FKSjtBQUFBLE1BSXZCSyxLQUp1QjtBQUFBLE1BSWhCQyxRQUpnQjs7QUFBQSxtQkFLTU4sc0RBQVEsQ0FBQyxLQUFELENBTGQ7QUFBQSxNQUt2Qk8sVUFMdUI7QUFBQSxNQUtYQyxhQUxXOztBQU05QixNQUFNQyxLQUFLO0FBQUEsc1NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVhQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsb0NBQVYsRUFBZ0Q7QUFBQ0Msc0JBQU0sRUFBRTtBQUFDWCwwQkFBUSxFQUFSQSxRQUFEO0FBQVdFLDBCQUFRLEVBQVJBO0FBQVg7QUFBVCxlQUFoRCxDQUZiOztBQUFBO0FBRUpVLHNCQUZJOztBQUdWLGtCQUFJQSxRQUFRLENBQUNDLElBQWIsRUFBbUI7QUFDakJoQixzQkFBTSxDQUFDaUIsSUFBUCxDQUFZLE9BQVo7QUFDRCxlQUZELE1BRU87QUFDTFQsd0JBQVEsQ0FBQyxnQ0FBRCxDQUFSO0FBQ0FFLDZCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0Q7O0FBUlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVVlEscUJBQU8sQ0FBQ0MsSUFBUjs7QUFWVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMUixLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBY0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRSxxRUFBQyxpREFBRDtBQUFBLDZCQUFXO0FBQUssaUJBQVMsRUFBRVMsK0RBQU0sQ0FBQ0MsT0FBdkI7QUFBQSwrQkFDSDtBQUFLLG1CQUFTLEVBQUVELCtEQUFNLENBQUNFLFVBQXZCO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUVGLCtEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyx1QkFBUyxFQUFFSCwrREFBTSxDQUFDSSxLQUF6QjtBQUFnQyx5QkFBVyxFQUFDLFVBQTVDO0FBQXVELGtCQUFJLEVBQUMsTUFBNUQ7QUFBbUUsc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPckIsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBTyx1QkFBUyxFQUFFUCwrREFBTSxDQUFDSSxLQUF6QjtBQUFnQyx5QkFBVyxFQUFDLFVBQTVDO0FBQXVELGtCQUFJLEVBQUMsVUFBNUQ7QUFBdUUsc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPbkIsV0FBVyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBSyx1QkFBUyxFQUFFbEIsVUFBVSxhQUFNVywrREFBTSxDQUFDUSxZQUFiLGNBQTZCUiwrREFBTSxDQUFDUyxJQUFwQyxJQUE2Q1QsK0RBQU0sQ0FBQ1EsWUFBOUU7QUFBQSx3QkFBNkZyQjtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBSyx1QkFBUyxFQUFFYSwrREFBTSxDQUFDVSxTQUF2QjtBQUFBLHNDQUNBO0FBQVEsdUJBQU8sRUFBRW5CLEtBQWpCO0FBQXdCLHlCQUFTLEVBQUVTLCtEQUFNLENBQUNXLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLGVBRUE7QUFBUSx1QkFBTyxFQUFFcEIsS0FBakI7QUFBd0IseUJBQVMsRUFBRVMsK0RBQU0sQ0FBQ1ksWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0F0Q3VCakMsSztVQUNQRSxxRDs7O0tBRE9GLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTM0YWNlMGM2ZTYzMzRjNDUzYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9UZW1wbGF0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtlcnJvclN0YXRlLCBzZXRFcnJvclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoZW50aWNhdGUnLCB7cGFyYW1zOiB7dXNlcm5hbWUsIHBhc3N3b3JkfX0pXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKFwiSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpXHJcbiAgICAgICAgc2V0RXJyb3JTdGF0ZSh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8VGVtcGxhdGU+ezxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkJveH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbklucHV0fT5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Vycm9yU3RhdGUgPyBgJHtzdHlsZXMuZXJyb3JNZXNzYWdlfSAke3N0eWxlcy5wbGF5fWAgOiBzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9naW59IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25VcEJ1dHRvbn0+U2lnbiB1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+fTwvVGVtcGxhdGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9