import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Error from './components/Error';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import ThemeState from './context/ThemeState';


const App = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(5)

  return (
    <ThemeState>
      <Router>
        <Navbar />
        <LoadingBar
          color='red'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={20} country='in' category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={20} country='in' category="business" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={20} country='in' category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={20} country='in' category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={20} country='in' category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={20} country='in' category="technology" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={20} country='in' category="general" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={20} country='in' category="entertainment" />}></Route>
          <Route exact path="/error" element={<Error />}></Route>
        </Routes>
        

      </Router>
    </ThemeState>
  )

}

export default App