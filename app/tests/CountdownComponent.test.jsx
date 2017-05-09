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
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('should never set count less than zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountdownComponent/>);
      countdown.handleSetCountdown(1);

      // expect(countdown.state.count).toBe(1);
      // expect(countdown.state.countDownStatus).toBe('Started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });

    it('should pause countdown on paused status' , (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountdownComponent/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setInterval(() =>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001 );
    });

    it('should reset count on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountdownComponent />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setInterval(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      },1001);
    });
  });
});
