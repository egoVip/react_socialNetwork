import React from 'react';
import style from './Friends.module.css';
import OneFriend from './OneFriend/OneFriend';




const Friends = (props) => {
    
        let cook = props.state.friends.map(phrase => <OneFriend nameFriend={phrase.nameFriend} />)

    return (
        <div >
            <div >
                {cook}
            </div>
        </div>
    )
}

export default Friends;