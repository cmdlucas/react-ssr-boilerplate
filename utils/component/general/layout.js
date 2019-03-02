import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteHead from './head';
import Footer from './footer';

import '../../../static/css/layout.css'

/**
 * Reusable component to add UI that will be visible on every page that uses this layout file.
 * A typical example is adding a <Footer /> component here to ensure it's visible on every page.
 * Or supplying title, meta description through the head prop.
 */
class Layout extends Component {
    render() {
        const { head, children } = this.props;
        return (
            <React.Fragment>
                <SiteHead {...head} />
                {children}
                <Footer />
            </React.Fragment>
        );
    }
}

Layout.propTypes = {
    head: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
        metatags: PropTypes.func
    }).isRequired
}

export default Layout;