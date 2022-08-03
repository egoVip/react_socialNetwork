import React, { Suspense } from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeThunkCreator } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import Welcome from './components/Profile/Welcome';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeThunkCreator();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (<HashRouter>
            <div className="app-wrapper" >
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/' element={<Welcome />} />
                            <Route path='/profile/:userId' element={<ProfileContainer />} />
                            <Route path="/dialogs/*" element={<DialogsContainer />} />
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/setting" element={<Setting />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </HashRouter >)
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeThunkCreator })(App);
