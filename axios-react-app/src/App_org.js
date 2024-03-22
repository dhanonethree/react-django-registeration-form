import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
 const testVar1  = "Hello World!"; 
 const testVar2  = "Hello Worldddddd!"; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
   {/* added buttons from antd */}
   <Button type="primary">Primary Button</Button>
     <Button>Default Button</Button>
     <Button type="dashed">Dashed Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button type="link">Link Button</Button>
      </header>
    </div>
  );
}

export default App;
