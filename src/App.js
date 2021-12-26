import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 5
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        color='red'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact apiKey={this.apiKey} path="/" element={<News setProgress={this.setProgress} key="general" pageSize={20} country='in' category="general"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={20} country='in' category="business"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={20} country='in' category="health"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={20} country='in' category="science"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={20} country='in' category="sports"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={20} country='in' category="technology"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={20} country='in' category="general"/>}></Route>
          <Route exact apiKey={this.apiKey} path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={20} country='in' category="entertainment"/>}></Route>
        </Routes>
      </Router>
      
    )
  }
}
