var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('TimerComponent');

describe('Timer', ()=>{
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer when status is set to started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    expect(timer.state.count).toBe(0);
    timer.handleStatusChange('started')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });

  it('should pasue timer when status is set to paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10})
    timer.handleStatusChange('started')
    timer.handleStatusChange('paused')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    },1001);
  });
  it('should reset timer when status is set to stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');  

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    },1001);
  });
});
