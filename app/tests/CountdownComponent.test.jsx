var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var CountdownComponent = require('CountdownComponent');

describe('Countdown Component', () => {
  it('should exists' , () => {
    expect(CountdownComponent).toExist();
  });

  describe('handleCountdown' , () => {
    it('should set state to start and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountdownComponent/>);
      countdown.handleCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countDownStatus).toBe('Started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('should never set count less than zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountdownComponent/>);
      countdown.handleCountdown(1);

      // expect(countdown.state.count).toBe(1);
      // expect(countdown.state.countDownStatus).toBe('Started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });
  });
});
