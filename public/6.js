(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Curriculums.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Curriculums.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_6__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isModalActive: false,
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      isNew: true,
      formData: {
        id: "",
        course_id: "",
        curriculum_year: "",
        is_active: true
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("curriculums", ["curriculums"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("courses", ["courses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("academicYears", ["academicYears"])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchCurriculums();

            case 2:
              _context.next = 4;
              return _this.fetchCourses();

            case 4:
              _context.next = 6;
              return _this.fetchAcademicYears();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("curriculums", ["fetchCurriculums", "createCurriculum", "updateCurriculum", "deleteCurriculum"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("courses", ["fetchCourses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("academicYears", ["fetchAcademicYears"])), {}, {
    edit: function edit(data) {
      this.clearForm();
      this.options.course.searchText = data.course.description;
      this.options.academicYear.searchText = data.curriculum_year;
      this.isNew = false;
      Object.assign(this.formData, data);
      this.isModalActive = true;
    },
    navigateToSubjects: function navigateToSubjects(params) {
      this.$router.push({
        path: "/courses/curriculums/".concat(params.id, "/subjects")
      });
    },
    deleteConfirmation: function deleteConfirmation() {
      var _this2 = this;

      var trashObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: "Are you sure you want to <b>delete</b>? This action cannot be undone.",
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: function onConfirm() {
            _this2.remove(_this2.trashObject);
          }
        });
      }
    },
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                response = null;

                if (!_this3.isNew) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return _this3.createCurriculum(_this3.formData);

              case 4:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this3.isModalActive = false;

                  _this3.showNotification("Successfully created", "success");
                } else {
                  _this3.showErrorMessage(response);
                }

                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _this3.updateCurriculum(_this3.formData);

              case 10:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this3.isModalActive = false;

                  _this3.showNotification("Successfully updated", "success");
                } else {
                  _this3.showErrorMessage(response);
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    remove: function remove(data) {
      this.deleteCurriculum(data);
      this.showNotification("Successfully deleted", "info");
    },
    cancel: function cancel() {
      this.isModalActive = false;
    },
    showModal: function showModal() {
      this.clearForm();
      this.isModalActive = true;
      this.isNew = true;
    },
    clearForm: function clearForm() {
      this.formData = {
        id: "",
        course_id: "",
        curriculum_year: ""
      };
      this.options.course.searchText = "";
      this.options.academicYear.searchText = "";
    }
  })
});

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _c("title-bar", {
          attrs: {
            "title-stack": ["Master Files", "Courses", "Curriculums", "List"]
          }
        }),
        _vm._v(" "),
        _c("hero-bar", [
          _vm._v("\n      Courses Curriculums\n      "),
          _c(
            "button",
            {
              staticClass: "button is-default",
              attrs: { slot: "right" },
              on: {
                click: function($event) {
                  return _vm.showModal()
                }
              },
              slot: "right"
            },
            [
              _c("b-icon", {
                staticClass: "i",
                attrs: { icon: "file-plus", "custom-size": "default" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("New")])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "section is-main-section" },
          [
            _c(
              "card-component",
              {
                staticClass: "has-table has-mobile-sort-spaced",
                attrs: { title: "Curriculums" }
              },
              [
                _c(
                  "card-toolbar",
                  [
                    _c(
                      "b-field",
                      { attrs: { slot: "right" }, slot: "right" },
                      [
                        _c("b-input", {
                          attrs: { placeholder: "Search...", expanded: "" }
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "control" }, [
                          _c("button", { staticClass: "button is-primary" }, [
                            _vm._v("Search")
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-select",
                      {
                        attrs: { slot: "left" },
                        slot: "left",
                        model: {
                          value: _vm.perPage,
                          callback: function($$v) {
                            _vm.perPage = $$v
                          },
                          expression: "perPage"
                        }
                      },
                      [
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("5 per page")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "10" } }, [
                          _vm._v("10 per page")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "15" } }, [
                          _vm._v("15 per page")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "20" } }, [
                          _vm._v("20 per page")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      active: _vm.isModalActive,
                      "has-modal-card": "",
                      "can-cancel": []
                    },
                    on: {
                      "update:active": function($event) {
                        _vm.isModalActive = $event
                      }
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        attrs: { novalidate: "" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.save()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "modal-card" }, [
                          _c("header", { staticClass: "modal-card-head" }, [
                            _c("h3", { staticClass: "modal-card-title" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.isNew ? "Creating" : "Editing") +
                                  "\n                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("button", {
                              staticClass: "delete",
                              attrs: { type: "button" },
                              on: { click: _vm.cancel }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "section",
                            { staticClass: "modal-card-body" },
                            [
                              _c(
                                "b-field",
                                [
                                  _c("template", { slot: "label" }, [
                                    _vm._v(
                                      "\n                    Course\n                    "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "has-text-danger" },
                                      [_vm._v("*")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-autocomplete", {
                                    attrs: {
                                      placeholder:
                                        "e.g. Bachelor of Science in Information Technology",
                                      data: _vm.getFilteredCourses,
                                      field: "description",
                                      clearable: true
                                    },
                                    on: {
                                      select: function(option) {
                                        return (this$1.formData.course_id =
                                          option === null ? "" : option.id)
                                      }
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(props) {
                                          return [
                                            _c(
                                              "div",
                                              { staticClass: "media" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "media-content"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.option
                                                            .course_code
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      "\n                          | " +
                                                        _vm._s(
                                                          props.option
                                                            .description
                                                        ) +
                                                        "\n                        "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.options.course.searchText,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.options.course,
                                          "searchText",
                                          $$v
                                        )
                                      },
                                      expression: "options.course.searchText"
                                    }
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "b-field",
                                { attrs: { label: "Academic Year" } },
                                [
                                  _c("template", { slot: "label" }, [
                                    _vm._v(
                                      "\n                    Curriculum Year\n                    "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "has-text-danger" },
                                      [_vm._v("*")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("b-autocomplete", {
                                    attrs: {
                                      placeholder: "e.g. S.Y 2013 - 2014",
                                      "open-on-focus": true,
                                      data: _vm.filteredYear,
                                      expanded: "",
                                      field: "description",
                                      clearable: true
                                    },
                                    on: {
                                      select: function(option) {
                                        return (this$1.formData.curriculum_year =
                                          option === null
                                            ? ""
                                            : option.description)
                                      }
                                    },
                                    model: {
                                      value:
                                        _vm.options.academicYear.searchText,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.options.academicYear,
                                          "searchText",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "options.academicYear.searchText"
                                    }
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "footer",
                            {
                              staticClass: "modal-card-foot",
                              attrs: { slot: "left" },
                              slot: "left"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "button is-success",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.isNew ? "Save" : "Update") +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "button",
                                  on: {
                                    click: function($event) {
                                      return _vm.cancel()
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      paginated: true,
                      "per-page": _vm.perPage,
                      hoverable: true,
                      data: _vm.curriculums,
                      narrowed: true,
                      bordered: true
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c(
                              "b-table-column",
                              {
                                staticClass: "wrap-text",
                                attrs: {
                                  searchable: "",
                                  label: "Course Code",
                                  field: "course_oode",
                                  sortable: "",
                                  width: "12%"
                                }
                              },
                              [_vm._v(_vm._s(props.row.course.course_code))]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "wrap-text",
                                attrs: {
                                  searchable: "",
                                  label: "Course Description",
                                  field: "description",
                                  sortable: "",
                                  width: "20%"
                                }
                              },
                              [_vm._v(_vm._s(props.row.course.description))]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  label: "Curriculum Year",
                                  field: "curriculum_year",
                                  width: "12%",
                                  sortable: ""
                                }
                              },
                              [_vm._v(_vm._s(props.row.curriculum_year))]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "is-actions-cell",
                                attrs: { "custom-key": "actions", width: "10%" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "buttons is-right" },
                                  [
                                    _c(
                                      "b-tooltip",
                                      {
                                        attrs: {
                                          label: "Print Subjects",
                                          position: "is-top"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "button is-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.navigateToSubjects(
                                                  props.row
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "printer",
                                                size: "is-small"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-tooltip",
                                      {
                                        attrs: {
                                          label: "Details",
                                          position: "is-top"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "button is-link",
                                            on: {
                                              click: function($event) {
                                                return _vm.navigateToSubjects(
                                                  props.row
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "view-headline",
                                                size: "is-small"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-tooltip",
                                      {
                                        attrs: {
                                          label: "Edit",
                                          position: "is-top"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "button is-link",
                                            on: {
                                              click: function($event) {
                                                return _vm.edit(props.row)
                                              }
                                            }
                                          },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "pencil",
                                                size: "is-small"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-tooltip",
                                      {
                                        attrs: {
                                          label: "Delete",
                                          position: "is-top"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "button is-danger",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.deleteConfirmation(
                                                  props.row
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "trash-can",
                                                size: "is-small"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "detail",
                        fn: function(props) {
                          return [
                            _c("div", { staticClass: "content" }, [
                              _c("p", [
                                _c("strong", [_vm._v("Descriptive Title:")]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.subject_description) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c("strong", [_vm._v("Number of Units:")]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.units) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c("strong", [_vm._v("Lecture Hours:")]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.lec) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c("strong", [_vm._v("Laboratory Hours:")]),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.lab) +
                                    "\n              "
                                )
                              ])
                            ])
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
                              : [_c("p", [_vm._v("Nothing's here…")])]
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
          ],
          1
        )
      ],
      1
    )
  ])
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

/***/ "./resources/js/views/Curriculums.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Curriculums.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Curriculums.vue?vue&type=template&id=49107f49& */ "./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49&");
/* harmony import */ var _Curriculums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Curriculums.vue?vue&type=script&lang=js& */ "./resources/js/views/Curriculums.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Curriculums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Curriculums.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Curriculums.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Curriculums.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Curriculums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Curriculums.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Curriculums.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Curriculums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Curriculums.vue?vue&type=template&id=49107f49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Curriculums.vue?vue&type=template&id=49107f49&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Curriculums_vue_vue_type_template_id_49107f49___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);