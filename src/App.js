import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
// import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';

function App(props) {
   
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Routes>
                        {/* <Route path="/profile" element={<Profile />} /> */}
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                         dispatch={props.dispatch}/>}/>
<<<<<<< HEAD
                        <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
=======
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
>>>>>>> master
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/setting" element={<Setting />} />
                        
                        
                    </Routes>
                    {/* <Friends state = {props.state.sideBar}/> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;