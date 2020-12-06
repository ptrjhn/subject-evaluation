(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sections.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sections.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CourseIndex",
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
      errors: {},
      isNew: true,
      formData: {
        id: "",
        course_id: "",
        section_name: ""
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])("sections", ["sections"])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchSections();

            case 2:
              _context.next = 4;
              return _this.fetchCourses();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("sections", ["fetchSections", "updateSection", "deleteSection", "createSection"])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])("courses", ["fetchCourses"])), {}, {
    edit: function edit(data) {
      this.isModalActive = true;
      this.isNew = false;
      console.log(data);
      this.options.course.searchText = data.course.description;
      Object.assign(this.formData, data);
    },
    deleteConfirmation: function deleteConfirmation() {
      var _this2 = this;

      var trashObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: "Are you sure you want to <b>delete</b> this? This action cannot be undone.",
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: function onConfirm() {
            _this2.removeSection(_this2.trashObject);
          }
        });
      }
    },
    showNotification: function showNotification(message, type) {
      this.$buefy.notification.open({
        duration: 4000,
        message: message,
        position: "is-bottom-right",
        type: "is-".concat(type),
        hasIcon: true,
        closable: true,
        queue: false
      });
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
                return _this3.createSection(_this3.formData);

              case 4:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this3.showNotification("Successfully created", "success");

                  _this3.isModalActive = false;
                } else {
                  _this3.showErrorMessage(response);
                }

                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _this3.updateSection(_this3.formData);

              case 10:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this3.showNotification("Successfully created", "success");

                  _this3.isModalActive = false;
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
    removeSection: function removeSection(data) {
      this.deleteSection(data);
      this.showNotification("Successfully deleted", "info");
    },
    setSelected: function setSelected(data) {
      this.formData.course_id = data === null || data === void 0 ? void 0 : data.id;
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
        section_name: ""
      };
      this.options.course.searchText = "";
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d& ***!
  \******************************************************************************************************************************************************************************************************/
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
      _c("title-bar", {
        attrs: { "title-stack": ["Master Files", "Sections", "List"] }
      }),
      _vm._v(" "),
      _c("hero-bar", [
        _vm._v("\n    Sections\n    "),
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
          [_vm._v("\n      New Section\n    ")]
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
              attrs: { title: "Sections" }
            },
            [
              _c(
                "card-toolbar",
                [
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
                  attrs: { active: _vm.isModalActive, "has-modal-card": "" },
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
                          _c("p", { staticClass: "modal-card-title" }, [
                            _vm._v(
                              _vm._s(
                                _vm.isNew ? "Create Section" : "Update Section"
                              )
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
                              { attrs: { label: "Course Code" } },
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
                                      return _vm.setSelected(option)
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
                                                    _vm._s(
                                                      props.option.course_code
                                                    )
                                                  )
                                                ]),
                                                _vm._v(
                                                  "\n                      | " +
                                                    _vm._s(
                                                      props.option.description
                                                    ) +
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
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              {
                                attrs: {
                                  label: "Section",
                                  type:
                                    _vm.errors.section_name == null
                                      ? ""
                                      : "is-danger",
                                  message:
                                    _vm.errors.section_name == null
                                      ? ""
                                      : _vm.errors.section_name
                                }
                              },
                              [
                                _c("b-input", {
                                  attrs: {
                                    placeholder: "E.g BSIT-1A",
                                    type: "text",
                                    required: "",
                                    p: ""
                                  },
                                  model: {
                                    value: _vm.formData.section_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "section_name",
                                        $$v
                                      )
                                    },
                                    expression: "formData.section_name"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("footer", { staticClass: "modal-card-foot" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button is-success",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    _vm.isNew
                                      ? "Save Section"
                                      : "Update Section"
                                  ) +
                                  "\n              "
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
                        ])
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
                    loading: _vm.isLoading,
                    paginated: true,
                    "per-page": _vm.perPage,
                    narrowed: true,
                    hoverable: true,
                    data: _vm.sections
                  },
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
                                label: "Course",
                                field: "course_code",
                                sortable: ""
                              }
                            },
                            [_vm._v(_vm._s(props.row.course.course_code))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                searchable: "",
                                label: "Section",
                                field: "section_name",
                                sortable: ""
                              }
                            },
                            [_vm._v(_vm._s(props.row.section_name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              staticClass: "is-actions-cell",
                              attrs: { "custom-key": "actions" }
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
                                        label: "Click to edit",
                                        position: "is-left"
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
                                        label: "Click to Delete",
                                        position: "is-left"
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
                          staticClass: "content has-text-grey has-text-centered"
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

/***/ "./resources/js/views/Sections.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Sections.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sections.vue?vue&type=template&id=72e99b4d& */ "./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d&");
/* harmony import */ var _Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sections.vue?vue&type=script&lang=js& */ "./resources/js/views/Sections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sections.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Sections.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=template&id=72e99b4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sections.vue?vue&type=template&id=72e99b4d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_72e99b4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);