import React from 'react'
import "./contact.scss"
import { useState } from 'react';

export default function Contact() {

    const [message,setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        setTimeout(()=>{setMessage(false)},2000);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake_icon.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Many thanks! I'll respond as soon as possible</span>}
                </form>
            </div>
        </div>
    )
}
