(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
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
  name: "CardToolbar",
  props: {
    isMobile: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GradeEntry.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apiClient */ "./resources/js/apiClient.js");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Registration",
  components: {
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      curriculums: [],
      grades: [],
      isAdding: false,
      isLoading: false,
      errors: {},
      isNew: true,
      paramId: this.$route.params.id
    }, _defineProperty(_ref, "isLoading", false), _defineProperty(_ref, "isEdit", false), _defineProperty(_ref, "currentTab", 0), _defineProperty(_ref, "searchStudent", ""), _defineProperty(_ref, "isComponentLoading", true), _defineProperty(_ref, "student", {
      student_id: "",
      course_id: "",
      curriculum_year: "",
      course: {}
    }), _defineProperty(_ref, "isEdit", false), _defineProperty(_ref, "gradings", ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "INC", "5.00", "DRP", "N/A"]), _ref;
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    titleStack: function titleStack() {
      return ["Transactions", "Subjects", "Grade Entry"];
    },
    sy: function sy() {
      return this.$store.state.currentSY.description;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("courseSubject", ["coursesSubjects"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("studentSubject", ["remainingSubjects", "studentSubjects"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("students", ["students"])), {}, {
    filteredStudents: function filteredStudents() {
      var _this = this;

      return this.students.filter(function (opt) {
        return opt.full_name.toString().toLowerCase().indexOf(_this.searchStudent.toLowerCase()) >= 0;
      });
    }
  }),
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.isComponentLoading = true;
              _context.next = 3;
              return _this2.fetchStudents();

            case 3:
              _this2.showEnrolledSubjects();

              setTimeout(function () {
                _this2.isComponentLoading = false;
              }, 500);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("studentSubject", ["getStudentSubjects", "updateStudentSubject"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("students", ["fetchStudents"])), {}, {
    saveGrades: function saveGrades() {
      var _this3 = this;

      if (this.isEdit) {
        this.updateStudentSubject(this.studentSubjects).then(function () {
          _this3.showNotification("Successfully updated", "success", "is-top-right");
        });
      }

      this.isEdit = !this.isEdit;
    },
    showEnrolledSubjects: function showEnrolledSubjects() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this4.getStudentSubjects({
                  id: _this4.student.id,
                  curriculum: _this4.student.curriculum_year,
                  sy: _this4.sy
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setSelectedStudent: function setSelectedStudent(data) {
      var _this5 = this;

      this.isLoading = true;

      if (data !== null) {
        this.student = data;
        this.student.curriculum_year = data.curriculum.curriculum_year;
      } else {
        this.reset();
        this.clearText();
      }

      this.showEnrolledSubjects();
      setTimeout(function () {
        _this5.isLoading = false;
      }, 500);
    },
    clearText: function clearText() {
      this.student = {
        student_id: "",
        course_id: "",
        curriculum_year: "",
        course: {}
      };
    },
    reset: function reset() {
      this.form = lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default()(this.form, function (item) {
        if (item && _typeof(item) === "object") {
          return [];
        }

        return null;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.input:-moz-read-only {\r\n  background: #f4f4f4 !important;\n}\n.input:read-only {\r\n  background: #f4f4f4 !important;\n}\r\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GradeEntry.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "notification is-card-toolbar" }, [
    _c("div", { staticClass: "level", class: { "is-mobile": _vm.isMobile } }, [
      _c("div", { staticClass: "level-left" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("left")], 2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("right")], 2)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("b-loading", {
        attrs: {
          "is-full-page": false,
          active: _vm.isComponentLoading,
          "can-cancel": false
        }
      }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "card-component",
            { attrs: { title: "Student Detail", icon: "ballot" } },
            [
              _c("div", { staticClass: "container-fluid" }, [
                _c("form", [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: { label: "Search Student", horizontal: "" }
                          },
                          [
                            _c("b-autocomplete", {
                              attrs: {
                                placeholder: "e.g Cruz, Juan Dela",
                                "open-on-focus": true,
                                data: _vm.filteredStudents,
                                field: "full_name",
                                clearable: true
                              },
                              on: {
                                select: function(option) {
                                  return _vm.setSelectedStudent(option)
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _c("div", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(props.option.student_id) +
                                            " |\n                      " +
                                            _vm._s(props.option.full_name) +
                                            "\n                    "
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.searchStudent,
                                callback: function($$v) {
                                  _vm.searchStudent = $$v
                                },
                                expression: "searchStudent"
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
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "ID Number", horizontal: "" } },
                          [
                            _c("b-input", {
                              staticClass: "bg-color",
                              attrs: {
                                readonly: "",
                                value: _vm.student.student_id
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Course", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: {
                                readonly: "",
                                value: _vm.student.course.description
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
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Curriculum", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: {
                                readonly: "",
                                value: _vm.student.curriculum_year
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "card-component",
            { attrs: { title: "Student Grades" } },
            [
              _c("card-toolbar", [
                _vm.studentSubjects.length > 0
                  ? _c(
                      "button",
                      {
                        class: _vm.isEdit
                          ? "button is-success"
                          : "button is-link",
                        attrs: { slot: "right", type: "button" },
                        on: { click: _vm.saveGrades },
                        slot: "right"
                      },
                      [
                        !_vm.isEdit
                          ? _c("b-icon", {
                              staticClass: "i",
                              attrs: {
                                icon: "pencil",
                                "custom-size": "default"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isEdit
                          ? _c("b-icon", {
                              staticClass: "i",
                              attrs: {
                                icon: "content-save-edit",
                                "custom-size": "default"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.isEdit ? "Submit Grades" : "Edit Grades")
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "container-fluid" }, [
                _c(
                  "div",
                  { staticClass: "columns" },
                  [
                    _c(
                      "b-table",
                      {
                        attrs: { data: _vm.studentSubjects },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _c(
                                  "b-table-column",
                                  {
                                    attrs: {
                                      searchable: "",
                                      width: "12%",
                                      label: "Subject Code",
                                      field: "subject_code",
                                      sortable: ""
                                    }
                                  },
                                  [_vm._v(_vm._s(props.row.subject_code))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-table-column",
                                  {
                                    attrs: {
                                      searchable: "",
                                      label: "Descriptive Title",
                                      field: "subject_description",
                                      width: "40%",
                                      sortable: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("truncate")(
                                          props.row.subject_description,
                                          60
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-table-column",
                                  {
                                    attrs: {
                                      searchable: "",
                                      width: "10%",
                                      label: "Units",
                                      field: "units",
                                      sortable: ""
                                    }
                                  },
                                  [_vm._v(_vm._s(props.row.units))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-table-column",
                                  {
                                    attrs: {
                                      searchable: "",
                                      width: "12%",
                                      label: "Year Level",
                                      field: "year_level",
                                      sortable: ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "searchable",
                                          fn: function(props) {
                                            return [
                                              _c(
                                                "b-select",
                                                {
                                                  staticStyle: {
                                                    width: "150px !important"
                                                  },
                                                  attrs: {
                                                    slot: "left",
                                                    expanded: true
                                                  },
                                                  slot: "left",
                                                  model: {
                                                    value:
                                                      props.filters[
                                                        "year_level"
                                                      ],
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        props.filters,
                                                        "year_level",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "props.filters['year_level']"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("All")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "First Year"
                                                      }
                                                    },
                                                    [_vm._v("First Year")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "Second Year"
                                                      }
                                                    },
                                                    [_vm._v("Second Year")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "Third Year"
                                                      }
                                                    },
                                                    [_vm._v("Third Year")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: { value: "Fourth" }
                                                    },
                                                    [_vm._v("Fourth")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "Fifth Year"
                                                      }
                                                    },
                                                    [_vm._v("Fifth Year")]
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(props.row.year_level) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-table-column",
                                  {
                                    attrs: {
                                      width: "15%",
                                      label: "Grade",
                                      field: "grade",
                                      sortable: ""
                                    }
                                  },
                                  [
                                    !_vm.isEdit
                                      ? _c("div", [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(props.row.grade) +
                                              "\n                "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.isEdit
                                      ? _c(
                                          "b-select",
                                          {
                                            staticStyle: {
                                              width: "150px !important"
                                            },
                                            attrs: {
                                              name: "grade",
                                              placeholder: "Enter Grade",
                                              expanded: true
                                            },
                                            on: {
                                              blur: function($event) {
                                                props.row.edit = ""
                                              },
                                              keyup: function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "enter",
                                                    13,
                                                    $event.key,
                                                    "Enter"
                                                  )
                                                ) {
                                                  return null
                                                }
                                                props.row.edit = ""
                                              }
                                            },
                                            model: {
                                              value: props.row.grade,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  props.row,
                                                  "grade",
                                                  $$v
                                                )
                                              },
                                              expression: "props.row.grade"
                                            }
                                          },
                                          _vm._l(_vm.gradings, function(
                                            grading,
                                            index
                                          ) {
                                            return _c(
                                              "option",
                                              {
                                                key: index,
                                                domProps: { value: grading }
                                              },
                                              [_vm._v(_vm._s(grading))]
                                            )
                                          }),
                                          0
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "section",
                          {
                            staticClass: "section",
                            attrs: { slot: "empty" },
                            slot: "empty"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "content has-text-grey has-text-centered"
                              },
                              [
                                _vm.isLoading
                                  ? [
                                      _c(
                                        "p",
                                        [
                                          _c("b-icon", {
                                            attrs: {
                                              icon: "dots-horizontal",
                                              size: "is-large"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Fetching data...")])
                                    ]
                                  : [_c("p", [_vm._v("No record found...")])]
                              ],
                              2
                            )
                          ]
                        )
                      ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CardToolbar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony import */ var _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/GradeEntry.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/GradeEntry.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeEntry.vue?vue&type=template&id=0c1d7fba& */ "./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba&");
/* harmony import */ var _GradeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeEntry.vue?vue&type=script&lang=js& */ "./resources/js/views/GradeEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeEntry.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/GradeEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/GradeEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/GradeEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GradeEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GradeEntry.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GradeEntry.vue?vue&type=template&id=0c1d7fba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GradeEntry.vue?vue&type=template&id=0c1d7fba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeEntry_vue_vue_type_template_id_0c1d7fba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);