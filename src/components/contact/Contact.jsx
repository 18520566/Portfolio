import React from 'react'
import "./contact.scss"
export default function Contact() {


    const data = [
        {
            id: 1,
            link: "https://www.facebook.com/dat.hoang.2000/",
            img: `${process.env.PUBLIC_URL}/assets/facebook.png`,
        },
        {
            id: 2,
            link: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-ho%C3%A0ng-119775212/",
            img: `${process.env.PUBLIC_URL}/assets/linkedin.png`,
        },
        {
            id: 3,
            link: "https://github.com/18520566",
            img: `${process.env.PUBLIC_URL}/assets/github.png`,
        },
    ];

    return (
        <div className="contact" id="contact">
            <h1>Contact me</h1>
            <div className="container">
            {data.map (d => (
                <div className='logo'>
                    <a href={d.link}>
                        <img src={d.img} alt=""/>
                    </a>
                </div>
            ))};
            </div>
            <h2>&#169; 2021 Copyright Hoang Dat </h2>
            <div className="top">
                <a href="#intro">
                    <img src={`${process.env.PUBLIC_URL}/assets/up-arrow.png`} alt="" />
                </a>
            </div>
            <h3>Back to top</h3>
        </div>
    )
}
