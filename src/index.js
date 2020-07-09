import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Begin() {
    return (
        <div className="begin">
            <img className="avatar" src="http://www.gravatar.com/avatar" alt="Name"/>
            <div className="begin-text">
                <p><strong>The Practical Dev</strong> <span
                    className="begin-span">@ThePracticalDev &middot; Sep 10</span></p>
                <p>Learning React? Start Small.</p>
                <p>author:
                    <a href="#"> @dceddia</a>
                </p>
            </div>
        </div>
    )
}

function Middle() {
    return (
        <div className="middle">
            <div className="first-level">
                <div className="logo-box">
                    <p><strong>DEV</strong></p>
                </div>

                <h1 className="center-title">Learning React ? Start Small.</h1>

                <div className="name-box">
                    <p><strong>Patryk Kwasek</strong></p>
                </div>

                <div className="second-level">
                    <div className="move-second-level">
                        <p><strong>Learning React ? Start Small.</strong></p>
                        <p className="para-text-move">Can't try yourself away from the tutorials? The cure is to
                            make tiny little experiment apps.</p>
                        <a href="#">dev.to</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Finish() {
    return (
        <div className="end">
            <ul className="actions">
                <li>
                    <button className="reply">
                        <i className="fas fa-reply" aria-hidden="true"/>
                        <span className="sr-only">Reply</span>
                    </button>
                </li>
                <li>
                    <button className="retweet">
                        <i className="fas fa-retweet" aria-hidden="true"/>
                        <span className="sr-only">Retweet</span>
                    </button>
                </li>
                <li>
                    <button className="like">
                        <i className="fas fa-heart" aria-hidden="true"/>
                        <span className="sr-only">Like</span>
                    </button>
                </li>
                <li>
                    <button>
                        <span aria-hidden="true">...</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

function SocialCard() {
    return (
        <div className={'outer'}>
            <Begin />
            <Middle />
            <Finish />
        </div>
    )
}

ReactDOM.render(
    <SocialCard />,
    document.getElementById('root')
);