var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavComponent = React.createClass({


  render: function(){
    return(
      // <div>This is nav component</div>
      <div className='top-bar'>

          <div className='top-bar-left'>
          <ul className='menu'>
          <li className = 'menu-text'>ReactTimer:App</li>
          <li>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}} >Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
          </li>
          </ul>

        </div>

        <div className = 'top-bar-right'>
          <ul className='menu'>
            <li className='menu-text'>Created By</li>
            <li>
              <a href="https://github.com/DivyanshPatel">Divyansh Patel</a>
            </li>

          </ul>

        </div>

      </div>
    );
  }

});

module.exports = NavComponent;
