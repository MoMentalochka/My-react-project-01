import React from 'react';
import styles from './Profile.module.css';
import Posts from '../Profile/Posts/Posts';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';

const Profile = () =>{
    return <div className={styles.profile}>
    <Avatar/>
    <Info name="Вася" second_name="Пупкин"/>
    <Posts/>
    </div>
    
}
export default Profile;