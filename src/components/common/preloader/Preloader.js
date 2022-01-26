import preLoader from './../../../assets/gif/loading.svg';
import style from './../../Users/Users.module.css';
import { React } from 'react';

let Preloader =(props)=>{
    return(
        <img className={style.loader} src={preLoader} />
    )
}

export default Preloader;