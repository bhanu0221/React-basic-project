import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer;
