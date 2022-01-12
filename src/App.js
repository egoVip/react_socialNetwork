import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
   
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile store={props.store}/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
                        <Route path="/users" element={<UsersContainer/>} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/setting" element={<Setting />} />
                        
                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
