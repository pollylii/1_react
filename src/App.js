import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Hello from './component/Hello'
import Welcome from './component/Welcome'

// 类组件
class App extends Component {
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
// 函数组件
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//  暴露App组件
export default App;
