"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Predefined constants
 * @type {Object}
 */
var constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x'
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y'
    }
  }
};

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props, context) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleFormat", function (value) {
      var format = _this.props.format;
      return format ? format(value) : value;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdate", function () {
      if (!_this.slider) {
        // for shallow rendering
        return;
      }

      var orientation = _this.props.orientation;
      var dimension = (0, _utils.capitalize)(constants.orientation[orientation].dimension);

      var sliderPos = _this.slider["offset".concat(dimension)];

      var handlePos = _this.handle["offset".concat(dimension)];

      _this.setState({
        limit: sliderPos - handlePos,
        grab: handlePos / 2
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function (e) {
      var onChangeStart = _this.props.onChangeStart;

      _this.addListeners();

      _this.setState({
        active: true
      }, function () {
        onChangeStart && onChangeStart(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      e.stopPropagation();
      var onChange = _this.props.onChange;
      var _e$target = e.target,
          className = _e$target.className,
          classList = _e$target.classList,
          dataset = _e$target.dataset;
      if (!onChange || className === 'rangeslider__labels') return;

      var value = _this.position(e);

      if (classList && classList.contains('rangeslider__label-item') && dataset.value) {
        value = parseFloat(dataset.value);
      }

      onChange && onChange(value, e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function (e) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        active: false
      }, function () {
        onChangeComplete && onChangeComplete(e);
      });

      _this.removeListeners();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      e.preventDefault();
      var keyCode = e.keyCode;
      var _this$props = _this.props,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          onChange = _this$props.onChange;
      var sliderValue;

      switch (keyCode) {
        case 38:
        case 39:
          sliderValue = value + step > max ? max : value + step;
          onChange && onChange(sliderValue, e);
          break;

        case 37:
        case 40:
          sliderValue = value - step < min ? min : value - step;
          onChange && onChange(sliderValue, e);
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPositionFromValue", function (value) {
      var limit = _this.state.limit;
      var _this$props2 = _this.props,
          min = _this$props2.min,
          max = _this$props2.max;
      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;
      var pos = Math.round(percentage * limit);
      return pos;
    });

    _defineProperty(_assertThisInitialized(_this), "getValueFromPosition", function (pos) {
      var limit = _this.state.limit;
      var _this$props3 = _this.props,
          orientation = _this$props3.orientation,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step;
      var percentage = (0, _utils.clamp)(pos, 0, limit) / (limit || 1);
      var baseVal = step * Math.round(percentage * (max - min) / step);
      var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;
      return (0, _utils.clamp)(value, min, max);
    });

    _defineProperty(_assertThisInitialized(_this), "position", function (e) {
      var grab = _this.state.grab;
      var _this$props4 = _this.props,
          orientation = _this$props4.orientation,
          reverse = _this$props4.reverse;
      var node = _this.slider;
      var coordinateStyle = constants.orientation[orientation].coordinate;
      var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var clientCoordinateStyle = "client".concat((0, _utils.capitalize)(coordinateStyle));
      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
      var direction = node.getBoundingClientRect()[directionStyle];
      var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;

      var value = _this.getValueFromPosition(pos);

      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "coordinates", function (pos) {
      var _this$state = _this.state,
          limit = _this$state.limit,
          grab = _this$state.grab;
      var orientation = _this.props.orientation;

      var value = _this.getValueFromPosition(pos);

      var position = _this.getPositionFromValue(value);

      var handlePos = orientation === 'horizontal' ? position + grab : position;
      var fillPos = orientation === 'horizontal' ? handlePos : limit - handlePos;
      return {
        fill: fillPos,
        handle: handlePos,
        label: handlePos
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderLabels", function (labels) {
      return /*#__PURE__*/_react.default.createElement("ul", {
        ref: function ref(sl) {
          _this.labels = sl;
        },
        className: (0, _classnames.default)('rangeslider__labels')
      }, labels);
    });

    _this.state = {
      active: false,
      limit: 0,
      grab: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleUpdate();
      var resizeObserver = new _resizeObserverPolyfill.default(this.handleUpdate);
      resizeObserver.observe(this.slider);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      // To make sure that we never add more than one listener
      this.removeListeners();
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleEnd);
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleEnd);
    }
    /**
     * Format label/tooltip value
     * @param  {Number} - value
     * @return {Formatted Number}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          value = _this$props5.value,
          orientation = _this$props5.orientation,
          className = _this$props5.className,
          tooltip = _this$props5.tooltip,
          reverse = _this$props5.reverse,
          labels = _this$props5.labels,
          min = _this$props5.min,
          max = _this$props5.max,
          handleLabel = _this$props5.handleLabel;
      var active = this.state.active;
      var dimension = constants.orientation[orientation].dimension;
      var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
      var position = this.getPositionFromValue(value);
      var coords = this.coordinates(position);

      var fillStyle = _defineProperty({}, dimension, "".concat(coords.fill, "px"));

      var handleStyle = _defineProperty({}, direction, "".concat(coords.handle, "px"));

      var showTooltip = tooltip && active;
      var labelItems = [];
      var labelKeys = Object.keys(labels);

      if (labelKeys.length > 0) {
        labelKeys = labelKeys.sort(function (a, b) {
          return reverse ? a - b : b - a;
        });

        var _iterator = _createForOfIteratorHelper(labelKeys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            var labelPosition = this.getPositionFromValue(key);
            var labelCoords = this.coordinates(labelPosition);

            var labelStyle = _defineProperty({}, direction, "".concat(labelCoords.label, "px"));

            labelItems.push( /*#__PURE__*/_react.default.createElement("li", {
              key: key,
              className: (0, _classnames.default)('rangeslider__label-item'),
              "data-value": key,
              onMouseDown: this.handleDrag,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              style: labelStyle
            }, this.props.labels[key]));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(s) {
          _this2.slider = s;
        },
        className: (0, _classnames.default)('rangeslider', "rangeslider-".concat(orientation), {
          'rangeslider-reverse': reverse
        }, className),
        onMouseDown: this.handleDrag,
        onMouseUp: this.handleEnd,
        onTouchStart: this.handleStart,
        onTouchEnd: this.handleEnd,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-orientation": orientation
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rangeslider__fill",
        style: fillStyle
      }), /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(sh) {
          _this2.handle = sh;
        },
        className: "rangeslider__handle",
        onMouseDown: this.handleStart,
        onTouchMove: this.handleDrag,
        onTouchEnd: this.handleEnd,
        onKeyDown: this.handleKeyDown,
        style: handleStyle,
        tabIndex: 0
      }, showTooltip && /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(st) {
          _this2.tooltip = st;
        },
        className: "rangeslider__handle-tooltip"
      }, /*#__PURE__*/_react.default.createElement("span", null, this.handleFormat(value))), /*#__PURE__*/_react.default.createElement("div", {
        className: "rangeslider__handle-label"
      }, handleLabel)), labels && this.renderLabels(labelItems));
    }
  }]);

  return Slider;
}(_react.Component);

_defineProperty(Slider, "propTypes", {
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  step: _propTypes.default.number,
  value: _propTypes.default.number,
  orientation: _propTypes.default.string,
  tooltip: _propTypes.default.bool,
  reverse: _propTypes.default.bool,
  labels: _propTypes.default.object,
  handleLabel: _propTypes.default.string,
  format: _propTypes.default.func,
  onChangeStart: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onChangeComplete: _propTypes.default.func
});

_defineProperty(Slider, "defaultProps", {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: 'horizontal',
  tooltip: true,
  reverse: false,
  labels: {},
  handleLabel: ''
});

var _default = Slider;
exports.default = _default;