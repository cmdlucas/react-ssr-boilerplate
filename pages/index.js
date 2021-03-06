import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../utils/component/general/layout';
import HomeBody from '../components/home';

class Home extends Component {
    render() {
        const { head } = this.props;
        return (
            <Layout head={head} >
                <HomeBody />
            </Layout>
        );
    }
}

Home.defaultProps = {
    head: {
        title: "React SSR Boilerplate",
        description: "This is a boilerplate to allow for quick boot of development. It's basically powered by NextJS and React ",
        keywords: "React, SSR, NextJS, Boilerplate, React SSR Boilerplate, NextJS Boilerplate",
        metatags: () => <></>
    }
}

//connect Home component to redux store
export default connect(() => ({}), null)(Home)