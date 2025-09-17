import React from "react";
import "./About.css";
function About() {
    return (
        <>
            <div className="back">
                <div className="about-section">
                    <h1 className="about-title">About me!</h1>

                    <p className="about-text">
                        A BCA graduate Student and a Fresher. and I enjoy building some websites.<br/> 
                        For this project I have used some public APIs to fetch verified and real-time currency rates data, crypto price rate data and a free Images APIs.
                        <br />
                        The technology that I used: React+Vite, basic HTML, CSS and JavaScript with some Public APIs.
                    </p>

                    <div className="profile">
                        <img src="/anup.jpg" alt="Anup Shahi" />
                        <h3>I'm Anup Shahi</h3>
                        <p>aspiring for Web Developer or software dev. also learning React and other technology to build my logical skill.</p>
                    </div>
                </div>
                <footer style={{
                    textAlign: "center",
                    padding: "16px 0",
                    width: "100%",
                    fontSize: "16px",
                    color: "white",
                    backgroundColor: "rgb(41, 41, 42)",
                }}>

                    <p>© 2025 All rights reserved.</p>
                    <p>contact +91 9258597234 ,  Links are added for source code <a href=" https://github.com/bhanu0221" target="_blank" rel="noopener noreferrer"
                        style={{ color: "#2980b9", marginLeft: "5px" }}>'GitHub link'</a>
                        and you can also visit my profile <a href="https://www.linkedin.com/in/anup-shahi-50486530a" target="_blank" rel="noopener noreferrer"
                            style={{ color: "#2980b9", marginLeft: "5px" }}>'LinkedIn link'</a></p>
                </footer>
            </div>
        </>
    )
}

export default About;
