import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer>
        <div className="container text-center mt-3">
            <p>
                <Link href='/'><a> <FontAwesomeIcon icon="home" style={{ width: "20px", fontSize: "20px" }} /> <span> Home </span></a></Link>
                ||
                <Link href='/about'><a><FontAwesomeIcon icon="hashtag" style={{ width: "20px", fontSize: "20px" }} /><span> About </span></a></Link>
                ||                 
                <Link href='https://github.com/cmdlucas/react-ssr-boilerplate'><a target="_new"> <span> See github page </span></a></Link>
            </p><br />
            <h6> <small> Credit: Caleb I. Lucas </small></h6>
        </div>
    </footer>
)

export default React.memo(Footer);