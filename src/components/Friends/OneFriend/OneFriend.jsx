import React from 'react';
import style from './OneFriend.module.css';





const OneFriend = (props) => {

    


    return (
        <div >
            <div >
                Name
                {props.nameFriend}
            </div>
        </div>
    )
}

export default OneFriend;