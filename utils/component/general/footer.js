import React from 'react';

const Footer = (props) => (
    <footer>
        <div className="container text-center">
            <p> &copy; Copyright {new Date().getFullYear()}, Caleb Lucas </p>
        </div>
    </footer>
)

export default React.memo(Footer);