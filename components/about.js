import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutBody = () => {
    <div className="container text-center">
        <h1>Howdy,</h1>
        <h4>Server side rendering was not really easy with React. Thanks to NextJS, this is history.</h4>
        <h5>This boilerplate includes relevant dependencies and project structure to quickly bootstrap your development</h5>
        <p>
            <Link href='/'><a> <FontAwesomeIcon icon="home" style={{width: "20px", fontSize: "20px"}} /> <span>Home</span></a></Link>
        </p>
    </div>
}

export default React.memo(AboutBody);