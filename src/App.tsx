import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AskQuestion from './pages/askquestion';
import AppRouter from './config/router';
import BAHeader from './components/BAHeader';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <BAHeader/>
   <AppRouter />
    {/* <AskQuestion/> */}
    </header>
  </div>
  );
}

export default App;
