/*import logo from './logo.svg';
import './App.css';


// App.js
import React from 'react';
import MyComponent from './MyComponent';


function App() {
  return (
    <div className="App">
      <MyComponent title="Example Title" description="Example Description" />
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
          Prashant
        </a>
      </header>
    </div>
  );
}*/



/*export default App;*/

/*import React from 'react';

// Child component
const Button = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <button onClick={handleClick}>
      {props.label}
    </button>
  );
};

// Parent component
class App extends React.Component {
  state = {
    message: ''
  };

  handleClick = () => {
    this.setState({ message: 'Button clicked!' });
  };

  render() {
    return (
      <div>
        <h1>Props and Event Handling in React</h1>
        <Button label="Click me" onClick={this.handleClick} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

/*export default App;*/


/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = `Hello, ${name}! Welcome to your React web app.`;
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Simple Web App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;*/


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
// export default FavoriteColor;


/*router*/

// App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';


import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" elememt={Home} />
        <Route path="/about" element={About} />
      </Switch>
    </Router>
  );
};

export default App;*/

import React, { useState } from 'react'
import Data from './Data';
import "./App.css"

const App = () => {
    const [data,setdata]=useState(Data);

  return (
    <div className='container'>
    <div className='background'>
        <div className='mobile_outer'>
            <div className='inner_'>
                <p>Today's Birthday {data.length}</p>
                {data && data.map((e)=>{
                    return(
                        <section key={e.id}>
                            <img src={e.Image} alt=""  height={'100px'} width={'100px'}/>
                            <h3>{e.name}</h3>
                        </section>
                    )
                })}
                <button className='clear' onClick={()=>{setdata([])}}>clear</button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default App



