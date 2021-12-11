import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

function App () {
    return (
      <>
        <BrowserRouter>
          <Switch> 
            <Route path="/" exact component={HomePage} />
            <Route path="/video-upload" component={VideoUploadPage}/>
            <Route path="/videos/:videoId" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }


export default App;

