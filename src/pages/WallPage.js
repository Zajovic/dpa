
import React from 'react';

import Post from '../components/Post';
import Comment from '../components/Comment';
import SearchBar from '../components/SearchBar';
import AccountInfo from '../components/AccountInfo';
import AccountButton from '../components/AccountButton';
import PostField from '../components/PostField';

import '../css/scss/pages/_wall-page.scss';


const WallPage = () => {
    return (
        <main>
            <nav>
                <div className="nav_first-row">
                    <SearchBar />
                    <AccountButton />
                </div>
                <div className="nav_second-row">
                    <AccountInfo img={require("../images/ProfilePhoto.jpg")} name="Milis Zajovic" bday="Birthday: 10.10.2010" gender="Gender: Male" />
                </div>
                <PostField />
            </nav>
            <div className="past-container">
                <div className="post-wrapper">
                    <Post />
                    <Comment />
                </div>
            </div>
        </main >
    )
}

export default WallPage;