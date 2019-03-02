import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../utils/components/general/layout';
import { responsivePropsInit, getWidthFactory } from '../utils/component/mediaquery/semantic';
import AboutBody from '../components/about';

class About extends Component {
    static async getInitialProps({ req }) {
        return responsivePropsInit(req);
    }

    render() {
        const { head, isPhoneFromSSR, isTabletFromSSR } = this.props;
        const getWidth = getWidthFactory({isPhoneFromSSR, isTabletFromSSR});
        return (
            <Layout head={head}
                getWidth={getWidth} >
                <AboutBody />
            </Layout>
        );
    }
}

About.defaultProps = {
    head: {
        title: "About - React SSR Boilerplate",
        description: "This is a boilerplate to allow for quick boot of development. It's basically powered by NextJS and React ",
        keywords: "React, SSR, NextJS, Boilerplate, React SSR Boilerplate, NextJS Boilerplate",
        metatags: () => <></>
    }
}

About.propTypes = {
    isPhoneFromSSR: PropTypes.bool,
    isTabletFromSSR: PropTypes.bool
}

//connect Home component to redux store
export default connect(() => ({}), null)(About)