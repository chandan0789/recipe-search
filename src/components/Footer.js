import React from 'react'

const getYear = (d) => {
    return d.getFullYear();
}

function Footer() {
    return (
        <div className="footer">
            Made by Abhi copyright &copy; {getYear(new Date())}
        </div>
    )
}

export default Footer
