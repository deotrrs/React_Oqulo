import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const element =  <div>
<h1>Hello, world!</h1>
<h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>;
// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }
    
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date: new Date()});
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is <FormattedDate date = {this.state.date}/>.</h2>
        </div>
      );
    }
  }
  function Hi() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
//   ReactDOM.render(
//     <Hi />,
//     document.getElementById('root')
//   );
//   class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(state => ({
//         isToggleOn: !state.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }
  ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
  );

  
  
//   setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
