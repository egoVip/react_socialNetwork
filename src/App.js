import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';


function App(props) {
   
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* <Route path='/profile/*' element={<ProfileContainer/>}/> */}
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/users" element={<UsersContainer/>} />
                        <Route path="/login" element={<Login/>} />
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
