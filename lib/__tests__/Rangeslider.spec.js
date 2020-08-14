"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Rangeslider = _interopRequireDefault(require("../Rangeslider"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('Rangeslider specs', function () {
  it('should render properly', function () {
    var slider = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Rangeslider.default, null));
    expect(slider.hasClass('rangeslider')).toBeTruthy();
    expect(slider.children().length).toEqual(3);
    expect(slider.find('.rangeslider__fill').length).toEqual(1);
    expect(slider.find('.rangeslider__handle').length).toEqual(1);
  });
  it('should have default props', function () {
    var slider = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Rangeslider.default, null));
    expect(slider.prop('min')).toEqual(0);
    expect(slider.prop('max')).toEqual(100);
    expect(slider.prop('step')).toEqual(1);
    expect(slider.prop('value')).toEqual(0);
    expect(slider.prop('orientation')).toEqual('horizontal');
    expect(slider.prop('reverse')).toEqual(false);
    expect(slider.prop('handleLabel')).toEqual('');
    expect(slider.prop('labels')).toEqual({});
  });
  it('should render basic slider with defaults', function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Rangeslider.default, null)).toJSON(); // console.log('tree: ', tree)


    expect(tree).toMatchSnapshot();
  });
  it('should render slider when props passed in', function () {
    var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Rangeslider.default, {
      min: 10,
      max: 50,
      value: 20
    })).toJSON(); // console.log('tree: ', tree)


    expect(tree).toMatchSnapshot();
  });
});