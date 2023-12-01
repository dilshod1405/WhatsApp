import './App.scss';
import React from 'react';
import './App.css'
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import ThemeContext from './Components/Context/ThemeContext';
  
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      theme: "light",
    };
  }

  toggleMode = () => {
    this.setState((state)=> {
      return {
        theme: state.theme === "dark" ? "light": "dark"
      }
    })
  }
    render() {
      return <ThemeContext.Provider value={{theme: this.state.theme, toggleMode: this.toggleMode}}>
                <div className='App'>
                  <Header toggleMode={this.toggleMode}/>
                  <Body />
                </div>
            </ThemeContext.Provider>
    }
}

export default App;
