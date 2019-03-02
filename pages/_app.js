import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import store from '../redux/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { appActivate } from '../utils/constants';
import { WindowContext } from '../utils/constants';

import { faCheck, faHome, faHashtag } from '@fortawesome/free-solid-svg-icons';

//add other font awesome icons here. Don't forget to import them first.
library.add({ faCheck, faHome, faHashtag }); 

//Activate whatever function that is needed to be available globally
appActivate();

/**
 * Do not edit this class unless you know what you're doing
 */
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, getWidth } = this.props;
        return (
            <Provider store={store}>
                <Container>
                    <WindowContext.Provider value={{ getWidth: getWidth }}>
                        <Component {...pageProps} />
                    </WindowContext.Provider>
                </Container>
            </Provider>
        )
    }
}

export default MyApp