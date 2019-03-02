import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import store from '../redux/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { appActivate } from '../utils/constants';

import { faCheck, faHome } from '@fortawesome/free-solid-svg-icons';

library.add({ faCheck, faHome }); //add other font awesome icons here. Don't forget to import them first.

appActivate();

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Provider store={store}>
                <Container className="bg-white">
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}

export default MyApp