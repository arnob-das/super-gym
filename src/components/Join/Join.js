import React, { useRef } from 'react';
import './Join.css'
import emailjs from '@emailjs/browser';


const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.React_App_YOUR_SERVICE_ID, process.env.React_App_YOUR_TEMPLATE_ID, form.current, process.env.React_App_YOUR_PUBLIC_KEY)

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user-email" id="" placeholder="Enter your Email Address" />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    );
};

export default Join;