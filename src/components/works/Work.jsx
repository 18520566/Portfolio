import React from 'react'
import { useState } from 'react';
import "./work.scss"

export default function Work() {


    const [curerentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: `${process.env.PUBLIC_URL}/assets/mobile_icon.png`,
            title: "Mobile Application",
            desc: "Design and create mobile application using Android Studio & Java language, and Firebase as database",
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/271656220_645202606920434_1772155150781984185_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=h9dME6pVFv0AX8TTtCQ&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVKwh2GqdK6sgay1pSm54PtKo5Fq-vIO8EEZnhJubvSukA&oe=620E28A5",
        },
        {
            id: "2",
            icon: `${process.env.PUBLIC_URL}/assets/globe_icon.png`,
            title: "Web Application",
            desc: "Design and create E-commerce web application for shoes products using NodeJS, HTML, SCSS and MongoDB",
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/271713617_235692382062972_2473422479593336242_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=wLiD19Zv3cMAX8ORsRg&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVJc3sevJraIUGKzeAW_3nAipxh6jti-GsTgLk9qdTa9Pw&oe=620B8DAD",
        },
        {
            id: "3",
            icon: `${process.env.PUBLIC_URL}/assets/globe_icon.png`,
            title: "Web Application",
            desc: "Create internal E-comeerce web application using ReactJS for GEEK Up Technology SJC",
            img: "https://static.ybox.vn/2021/1/3/1611759868124-1607009413197-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20-%202020-12-03T222722.108.png",
        },
        {
            id: "4",
            icon: `${process.env.PUBLIC_URL}/assets/seo_icon.png`,
            title: "E-commerce Website SEO",
            desc: "SEO E-commerce website to reach top 25 of Google Analytics Research",
            img: "https://woovina.com/images/2020/04/10/sneaker-cover-min.png",
        },
        {
            id: "5",
            icon: `${process.env.PUBLIC_URL}/assets/design_icon.png`,
            title: "Web Application UI/UX Design",
            desc: "Design UI/UX for Music Streaming web application using Figma",
            img: "data:image/png;base64,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",
        },
    ]


    const handleClick = (way) => {
        way === "left"? setCurrentSlide(curerentSlide > 0 ? curerentSlide - 1 : 2) 
        :
        setCurrentSlide(curerentSlide< data.length -1 ? curerentSlide + 1 : 0)
    }

    return (
        <div className='work' id="work">
        <h1>My Projects</h1>
            <div className="slider" style={{transform: `translateX(-${curerentSlide *100}vw)`}}>
            {data.map((d) =>   ( <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} 
                                            alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                                <span>
                                    <a href="https://github.com/18520566">Projects</a>
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))  }
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/arrow_icon.png`} 
            className='arrow left' 
            alt="" 
            onClick={() =>handleClick("left")}/>
            <img 
            src={`${process.env.PUBLIC_URL}/assets/arrow_icon.png`} 
            className='arrow right' 
            alt="" 
            onClick={() =>handleClick()}/>
        </div>
    )
}
