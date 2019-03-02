import React from 'react';

const AboutBody = () => {
    return (
        <div className="container text-center mt-5">
            <h1>About</h1><br />
            <h5>Server side rendering was not really easy with React. Thanks to NextJS, this is history.</h5><br />
            <h5>This boilerplate includes relevant dependencies and project structure to quickly bootstrap for development. For example, </h5>
            <ol>
                <li>The font-awesome icons used below</li>
                <li>The Responsive component from semantic-ui-react</li>
                <li>Express, Redux, Saga, Axios, PropTypes, etc. See project's package.json for more.</li>                
            </ol>
            <br /><br />
        </div>
    )
}

export default React.memo(AboutBody);