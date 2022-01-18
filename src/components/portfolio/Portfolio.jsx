import React from 'react'
import { useState, useEffect } from 'react';
import "./portfolio.scss"
import Portfoliolist from '../portfoliolist/Portfoliolist'
import { featuredPortfolio, 
    webPortfolio, 
    mobilePortfolio, 
    uiPortfolio, 
    brandingPortfolio } from '../../data';

export default function Portfolio() {


    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Application",
        },
        {
            id: "mobile",
            title: "Mobile Application",
        },
        {
            id: "ui",
            title: "UI/UX Design",
        },
        {
            id: "brand",
            title: "Branding",
        },
    ]

    useEffect(() => {
            switch(selected){
                case "featured":
                    setData(featuredPortfolio);
                    break;
                case "web":
                    setData(webPortfolio);
                    break;
                case "mobile":
                    setData(mobilePortfolio);
                    break;
                case "ui":
                    setData(uiPortfolio);
                    break;
                case "brand":
                    setData(brandingPortfolio);
                    break;
                default:
                    setData(featuredPortfolio);
            }
    }, [selected])

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <Portfoliolist 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                    {data.map ((d) =>(
                        <div className='item'>
                            <img
                                src={d.img}
                                alt=""
                            />
                             <h3>{d.title}</h3>
                        </div>
                    ))}                   
            </div>
        </div>
    )
}
