import preLoader from './../../../assets/gif/loading.svg';
import style from './../../Users/Users.module.css';
import  React  from 'react';

let Preloader =()=>{
    return(
        <div >
            <img className={style.loader} src={preLoader} />
        </div>
    )
}

export default Preloader;