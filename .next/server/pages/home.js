module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/bipin/projects/web/nextjs/learn/auth2/pages/home.js\";\n\n\n\n\nconst fetcher = (...args) => fetch(...args).then(res => res.json());\n\nfunction Home({\n  apidata\n}) {\n  const [session, loading] = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"useSession\"])();\n  const {\n    0: userInput,\n    1: setUserInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\");\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(\"https://next-js-try-bipin.herokuapp.com/posts\", fetcher, {\n    revalidateOnFocus: true\n  });\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"failed to load\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 21\n  }, this);\n  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 21\n  }, this);\n  console.log(data); //   const [pdata, setData] = useState(apidata);\n\n  const handlesubmit = async event => {\n    event.preventDefault();\n    const dataT = {\n      name: \"\",\n      body: \"\"\n    };\n    dataT.name = session.user.name;\n    dataT.body = userInput; // setData([...pdata, dataT]);\n\n    console.log(dataT);\n    Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"https://next-js-try-bipin.herokuapp.com/posts\", [...data, dataT]);\n    fetch(\"https://next-js-try-bipin.herokuapp.com/addpost\", {\n      method: \"POST\",\n      // or 'PUT',\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(dataT)\n    }).then(response => response.json()).then(dataT => {\n      console.log(\"Success:\", dataT);\n    }).catch(error => {\n      console.error(\"Error:\", error);\n    });\n    Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"trigger\"])(\"https://next-js-try-bipin.herokuapp.com/posts\");\n  };\n\n  const handleChange = e => {\n    setUserInput(e.currentTarget.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [!session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"You are not signed in to see this home page\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(),\n          children: \"Sign in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)\n    }, void 0, false), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"this is the secret , the protected route :)\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: handlesubmit,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: userInput,\n            type: \"text\",\n            onChange: handleChange,\n            placeholder: \"Whats on your mind\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onSubmit: handlesubmit,\n          children: \"submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"signOut\"])(),\n          children: \"Sign Out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, this), data.slice(0).reverse().map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: item.body,\n          children: [item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [\" \", item.body, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }, this)\n    }, void 0, false)]\n  }, void 0, true);\n}\nasync function getServerSideProps(context) {\n  const res = await fetch(`https://next-js-try-bipin.herokuapp.com/posts`);\n  const apidata = await res.json();\n  console.log(apidata);\n\n  if (!apidata) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      apidata\n    } // will be passed to the page component as props\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzA4N2QiXSwibmFtZXMiOlsiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsImFwaWRhdGEiLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVNlc3Npb24iLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ1c2VTdGF0ZSIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsInJldmFsaWRhdGVPbkZvY3VzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhVCIsIm5hbWUiLCJib2R5IiwidXNlciIsIm11dGF0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjYXRjaCIsInRyaWdnZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2lnbkluIiwic2lnbk91dCIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsIml0ZW0iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUMsR0FBR0MsSUFBSixLQUFhQyxLQUFLLENBQUMsR0FBR0QsSUFBSixDQUFMLENBQWVFLElBQWYsQ0FBcUJDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQTdCLENBQTdCOztBQUVlLFNBQVNDLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBMkI7QUFDeEMsUUFBTSxDQUFDQyxPQUFELEVBQVVDLE9BQVYsSUFBcUJDLG1FQUFVLEVBQXJDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUVD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QTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBLDRCQUFPb0IsSUFBSSxDQUFDbkIsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpILENBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQVhKO0FBQUEsa0JBREY7QUFrREQ7QUFFTSxlQUFlb0Isa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU0xQyxHQUFHLEdBQUcsTUFBTUYsS0FBSyxDQUFFLCtDQUFGLENBQXZCO0FBQ0EsUUFBTUssT0FBTyxHQUFHLE1BQU1ILEdBQUcsQ0FBQ0MsSUFBSixFQUF0QjtBQUNBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWVosT0FBWjs7QUFFQSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFdBQU87QUFDTHdDLGNBQVEsRUFBRTtBQURMLEtBQVA7QUFHRDs7QUFFRCxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUFFekM7QUFBRixLQURGLENBQ2U7O0FBRGYsR0FBUDtBQUdEIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSwgdHJpZ2dlciB9IGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYXBpZGF0YSB9KSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHQtanMtdHJ5LWJpcGluLmhlcm9rdWFwcC5jb20vcG9zdHNcIixcbiAgICBmZXRjaGVyLFxuICAgIHtcbiAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj47XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgY29uc3QgW3BkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGFwaWRhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZXN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhVCA9IHsgbmFtZTogXCJcIiwgYm9keTogXCJcIiB9O1xuICAgIGRhdGFULm5hbWUgPSBzZXNzaW9uLnVzZXIubmFtZTtcbiAgICBkYXRhVC5ib2R5ID0gdXNlcklucHV0O1xuICAgIC8vIHNldERhdGEoWy4uLnBkYXRhLCBkYXRhVF0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGFUKTtcbiAgICBtdXRhdGUoXCJodHRwczovL25leHQtanMtdHJ5LWJpcGluLmhlcm9rdWFwcC5jb20vcG9zdHNcIiwgWy4uLmRhdGEsIGRhdGFUXSk7XG5cbiAgICBmZXRjaChcImh0dHBzOi8vbmV4dC1qcy10cnktYmlwaW4uaGVyb2t1YXBwLmNvbS9hZGRwb3N0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnLFxuXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFUKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YVQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCBkYXRhVCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIHRyaWdnZXIoXCJodHRwczovL25leHQtanMtdHJ5LWJpcGluLmhlcm9rdWFwcC5jb20vcG9zdHNcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVc2VySW5wdXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBZb3UgYXJlIG5vdCBzaWduZWQgaW4gdG8gc2VlIHRoaXMgaG9tZSBwYWdlXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB0aGlzIGlzIHRoZSBzZWNyZXQgLCB0aGUgcHJvdGVjdGVkIHJvdXRlIDopXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlc3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXRzIG9uIHlvdXIgbWluZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uU3VibWl0PXtoYW5kbGVzdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gT3V0PC9idXR0b24+XG4gICAgICAgICAgICB7Lyoge2RhdGFcbiAgICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2l0ZW0uYm9keX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PiB7aXRlbS5ib2R5fSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICAgICAge2RhdGFcbiAgICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2l0ZW0uYm9keX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PiB7aXRlbS5ib2R5fSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL25leHQtanMtdHJ5LWJpcGluLmhlcm9rdWFwcC5jb20vcG9zdHNgKTtcbiAgY29uc3QgYXBpZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGFwaWRhdGEpO1xuXG4gIGlmICghYXBpZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhcGlkYXRhIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });