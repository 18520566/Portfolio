import React from 'react'
import "./intro.scss"
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
            init(textRef.current,{
                showCursor: true,
                backDelay:  2500,
                strings: ["Developer", "Designer", "Engineer"],
            });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/CV_ava-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, thanks for visiting!</h2>
                    <h1>I am Hoang Tien Dat</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down_icon.png" alt="" />
                </a>
            </div>
        </div>
    )
}
