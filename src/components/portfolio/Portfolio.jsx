import React from 'react'
import { useState, useEffect } from 'react';
import "./portfolio.scss"
import Portfoliolist from '../portfoliolist/Portfoliolist'
import { featuredPortfolio, 
    hobbyPortfolio, 
    skillPortfolio, 
    strengthPortfolio } from '../../data';

export default function Portfolio() {


    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured Projects",
        },
        {
            id: "strength",
            title: "My Strengths",
        },
        {
            id: "hobby",
            title: "My Hobbies",
        },
        {
            id: "skill",
            title: "My Skills",
        },
    ]

    useEffect(() => {
            switch(selected){
                case "featured":
                    setData(featuredPortfolio);
                    break;
                case "strengh":
                    setData(strengthPortfolio);
                    break;
                case "hobby":
                    setData(hobbyPortfolio);
                    break;
                case "skill":
                    setData(skillPortfolio);
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
