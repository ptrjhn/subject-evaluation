(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Students/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Students/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apiClient */ "./resources/js/apiClient.js");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Forms",
  components: {
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      curriculums: [],
      errors: {},
      isNew: true,
      paramId: this.$route.params.id,
      isLoading: false,
      bday: new Date(),
      form: {
        id: "",
        student_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        guardian_contact: "",
        contact_no: "",
        curriculum_year: "",
        birth_place: "",
        guardian_name: "",
        nationality: "",
        religion: "",
        curriculum_id: "",
        address: "",
        civil_status: "",
        course_id: "",
        birth_date: "",
        sex: ""
      },
      civilStatus: ["Single", "Married", "Widow"]
    };
  },
  computed: _objectSpread({
    titleStack: function titleStack() {
      return this.isNew ? ["Master Files", "Students", "New"] : ["Master Files", "Students", "Edit"];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("students", ["student"])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.fetchCourses();

              if (!(_this.$route.params.id !== undefined)) {
                _context.next = 8;
                break;
              }

              _this.isNew = false;
              _context.next = 5;
              return _this.fetchStudent(_this.$route.params.id);

            case 5:
              Object.assign(_this.form, _this.student);

              _this.getCurriculumsByCourse(_this.student.course_id);

              _this.options.course.searchText = _this.student.course.description;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("courses", ["fetchCourses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("students", ["updateStudent", "createStudent", "fetchStudent"])), {}, {
    getCurriculumsByCourse: function getCurriculumsByCourse(id) {
      var _this2 = this;

      this.form.course_id = id === null ? 0 : id;
      _apiClient__WEBPACK_IMPORTED_MODULE_3__["default"].get("/curriculums?course_id=".concat(id)).then(function (response) {
        _this2.curriculums = response.data.map(function (cur) {
          return cur;
        });
      });
    },
    onInput: function onInput(event) {
      this.form.student_id = event.target._vCleave.getFormattedValue();
    },
    onInputContactNumber: function onInputContactNumber(event) {
      this.form.contact_no = event.target._vCleave.getFormattedValue();
    },
    onInputGuardianContact: function onInputGuardianContact(event) {
      this.form.guardian_contact = event.target._vCleave.getFormattedValue();
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.errors = {};
                response = null;
                _this3.form.birth_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(_this3.bday).format("YYYY-MM-DD");

                if (!_this3.isNew) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return _this3.createStudent(_this3.form);

              case 6:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this3.showNotification("Successfully Saved.", "success");
                } else {
                  _this3.errors = response.errors;
                }

                _context2.next = 12;
                break;

              case 10:
                _context2.next = 12;
                return _this3.update();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    update: function update() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                response = null;
                _context3.next = 3;
                return _this4.updateStudent(_this4.form);

              case 3:
                response = _context3.sent;

                if (response == undefined || response == null) {
                  _this4.showNotification("Successfully updated", "success");
                } else {
                  _this4.errors = response.errors;
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    reset: function reset() {
      this.form = lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default()(this.form, function (item) {
        if (item && _typeof(item) === "object") {
          return [];
        }

        return null;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("title-bar", { attrs: { "title-stack": _vm.titleStack } }),
      _vm._v(" "),
      _c(
        "hero-bar",
        [
          _vm._v(
            "\n    " +
              _vm._s(_vm.isNew ? "New Student" : "Edit Student") +
              "\n    "
          ),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: { name: "students-list" } },
              slot: "right"
            },
            [_vm._v("List")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c("card-component", { attrs: { title: "Forms", icon: "ballot" } }, [
            _c("div", { staticClass: "container" }, [
              _c(
                "form",
                {
                  attrs: { novalidate: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c(
                    "b-field",
                    { attrs: { label: "ID Number", horizontal: "" } },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.student_id == null ? "" : "is-danger",
                            message:
                              _vm.errors.student_id == null
                                ? ""
                                : _vm.errors.student_id
                          }
                        },
                        [
                          _c("b-input", {
                            directives: [
                              {
                                name: "cleave",
                                rawName: "v-cleave",
                                value: _vm.masks.studentId,
                                expression: "masks.studentId"
                              }
                            ],
                            attrs: {
                              icon: "id-card",
                              value: _vm.form.student_id,
                              placeholder:
                                "Enter School ID Number | e.g 20-XXXXX",
                              required: ""
                            },
                            nativeOn: {
                              input: function($event) {
                                return _vm.onInput($event)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Student Name", horizontal: "" } },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.last_name == null ? "" : "is-danger",
                            message:
                              _vm.errors.last_name == null
                                ? ""
                                : _vm.errors.last_name
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "account",
                              placeholder: "Enter Last Name",
                              required: ""
                            },
                            model: {
                              value: _vm.form.last_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.first_name == null ? "" : "is-danger",
                            message:
                              _vm.errors.first_name == null
                                ? ""
                                : _vm.errors.first_name
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "account",
                              placeholder: "Enter First Name",
                              required: ""
                            },
                            model: {
                              value: _vm.form.first_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "first_name", $$v)
                              },
                              expression: "form.first_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.middle_name == null ? "" : "is-danger",
                            message:
                              _vm.errors.middle_name == null
                                ? ""
                                : _vm.errors.middle_name
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "account",
                              required: "",
                              placeholder: "Enter Middle Name"
                            },
                            model: {
                              value: _vm.form.middle_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "middle_name", $$v)
                              },
                              expression: "form.middle_name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Address",
                        type: _vm.errors.address == null ? "" : "is-danger",
                        message:
                          _vm.errors.address == null ? "" : _vm.errors.address,
                        horizontal: ""
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          icon: "map-marker",
                          placeholder: "Enter Permanent Address"
                        },
                        model: {
                          value: _vm.form.address,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "address", $$v)
                          },
                          expression: "form.address"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type: _vm.errors.sex == null ? "" : "is-danger",
                            message:
                              _vm.errors.sex == null ? "" : _vm.errors.sex,
                            horizontal: "",
                            label: "Gender"
                          }
                        },
                        [
                          _c(
                            "div",
                            {},
                            [
                              _c(
                                "b-radio",
                                {
                                  attrs: {
                                    name: "sex",
                                    "native-value": "Male"
                                  },
                                  model: {
                                    value: _vm.form.sex,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "sex", $$v)
                                    },
                                    expression: "form.sex"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Male\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-radio",
                                {
                                  attrs: {
                                    name: "sex",
                                    "native-value": "Female"
                                  },
                                  model: {
                                    value: _vm.form.sex,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "sex", $$v)
                                    },
                                    expression: "form.sex"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Female\n                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type:
                          _vm.errors.civil_status == null ? "" : "is-danger",
                        message:
                          _vm.errors.civil_status == null
                            ? ""
                            : _vm.errors.civil_status,
                        label: "Civil Status",
                        horizontal: ""
                      }
                    },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: {
                            icon: "clipboard-list",
                            expanded: "",
                            placeholder: "Select Course",
                            required: ""
                          },
                          model: {
                            value: _vm.form.civil_status,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "civil_status", $$v)
                            },
                            expression: "form.civil_status"
                          }
                        },
                        _vm._l(_vm.civilStatus, function(status, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: status } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(status) +
                                  "\n              "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Date of Birth",
                        type: _vm.errors.birth_date == null ? "" : "is-danger",
                        message:
                          _vm.errors.birth_date == null
                            ? ""
                            : _vm.errors.birth_date,
                        horizontal: ""
                      }
                    },
                    [
                      _c("b-datepicker", {
                        attrs: {
                          placeholder: "Type or select a date...",
                          icon: "calendar-today",
                          editable: ""
                        },
                        model: {
                          value: _vm.bday,
                          callback: function($$v) {
                            _vm.bday = $$v
                          },
                          expression: "bday"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "Contact Number",
                        type: _vm.errors.contact_no == null ? "" : "is-danger",
                        message:
                          _vm.errors.contact_no == null
                            ? ""
                            : _vm.errors.contact_no,
                        horizontal: ""
                      }
                    },
                    [
                      _c(
                        "b-field",
                        [
                          _c("b-input", {
                            directives: [
                              {
                                name: "cleave",
                                rawName: "v-cleave",
                                value: _vm.masks.cp_number,
                                expression: "masks.cp_number"
                              }
                            ],
                            attrs: {
                              icon: "contact-phone",
                              type: "text",
                              value: _vm.form.contact_no,
                              name: "phone",
                              expanded: ""
                            },
                            on: {
                              change: _vm.onInputContactNumber,
                              blur: _vm.onInputContactNumber
                            },
                            model: {
                              value: _vm.form.contact_no,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "contact_no", $$v)
                              },
                              expression: "form.contact_no"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Course/Curriculum", horizontal: "" } },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.course_id == null ? "" : "is-danger",
                            message:
                              _vm.errors.course_id == null
                                ? ""
                                : _vm.errors.course_id
                          }
                        },
                        [
                          _c("b-autocomplete", {
                            attrs: {
                              icon: "clipboard-list",
                              expanded: "",
                              required: "",
                              placeholder:
                                "e.g. Bachelor of Science in Information Technology",
                              data: _vm.getFilteredCourses,
                              field: "description",
                              "open-on-focus": true,
                              clearable: true
                            },
                            on: {
                              select: function(option) {
                                return _vm.getCurriculumsByCourse(option.id)
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c("div", { staticClass: "media" }, [
                                      _c(
                                        "div",
                                        { staticClass: "media-content" },
                                        [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(props.option.course_code)
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                      | " +
                                              _vm._s(props.option.description) +
                                              "\n                    "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.options.course.searchText,
                              callback: function($$v) {
                                _vm.$set(_vm.options.course, "searchText", $$v)
                              },
                              expression: "options.course.searchText"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.curriculum_id == null
                                ? ""
                                : "is-danger",
                            message:
                              _vm.errors.curriculum_id == null
                                ? ""
                                : _vm.errors.curriculum_id
                          }
                        },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: {
                                icon: "calendar-account",
                                expanded: "",
                                placeholder: "Select Curriculum Year",
                                required: ""
                              },
                              model: {
                                value: _vm.form.curriculum_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "curriculum_id", $$v)
                                },
                                expression: "form.curriculum_id"
                              }
                            },
                            _vm._l(_vm.curriculums, function(
                              curriculum,
                              index
                            ) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: curriculum.id }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(curriculum.curriculum_year) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { label: "Place of Birth", horizontal: "" } },
                    [
                      _c("b-input", {
                        attrs: {
                          icon: "map-marker",
                          placeholder: "Enter Place of Birth (Optional)"
                        },
                        model: {
                          value: _vm.form.birth_place,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "birth_place", $$v)
                          },
                          expression: "form.birth_place"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: { label: "Guardian Name/Contact", horizontal: "" }
                    },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.guardian_name == null
                                ? ""
                                : "is-danger",
                            message:
                              _vm.errors.guardian_name == null
                                ? ""
                                : _vm.errors.guardian_name
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "account",
                              placeholder: "Enter Guardian Name (Optional)"
                            },
                            model: {
                              value: _vm.form.guardian_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "guardian_name", $$v)
                              },
                              expression: "form.guardian_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            type:
                              _vm.errors.guardian_contact == null
                                ? ""
                                : "is-danger",
                            message:
                              _vm.errors.guardian_contact == null
                                ? ""
                                : _vm.errors.guardian_contact
                          }
                        },
                        [
                          _c("b-input", {
                            directives: [
                              {
                                name: "cleave",
                                rawName: "v-cleave",
                                value: _vm.masks.cp_number,
                                expression: "masks.cp_number"
                              }
                            ],
                            attrs: {
                              value: _vm.form.guardian_contact,
                              icon: "contact-phone",
                              placeholder:
                                "Enter Guardian Contact No. (Optional)"
                            },
                            on: {
                              change: _vm.onInputGuardianContact,
                              blur: _vm.onInputGuardianContact
                            },
                            model: {
                              value: _vm.form.guardian_contact,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "guardian_contact", $$v)
                              },
                              expression: "form.guardian_contact"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: { label: "Nationality/Religion", horizontal: "" }
                    },
                    [
                      _c(
                        "b-field",
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "translate",
                              placeholder: "Enter Nationality (Optional)"
                            },
                            model: {
                              value: _vm.form.nationality,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "nationality", $$v)
                              },
                              expression: "form.nationality"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        [
                          _c("b-input", {
                            attrs: {
                              icon: "christianity",
                              placeholder: "Enter Religion (Optional)"
                            },
                            model: {
                              value: _vm.form.religion,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "religion", $$v)
                              },
                              expression: "form.religion"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { horizontal: "" } },
                    [
                      _c("b-field", { attrs: { grouped: "" } }, [
                        _c(
                          "div",
                          { staticClass: "control" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  "native-type": "submit",
                                  type: "is-primary"
                                }
                              },
                              [_vm._v("Submit")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "control" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { type: "is-primary is-outlined" },
                                on: { click: _vm.reset }
                              },
                              [_vm._v("Reset")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Students/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Students/Form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=18ec12ec& */ "./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Students/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Students/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Students/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Students/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Students/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=18ec12ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Students/Form.vue?vue&type=template&id=18ec12ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_18ec12ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);