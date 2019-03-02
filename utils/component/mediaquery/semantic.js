import React from 'react';
import MobileDetect from 'mobile-detect';
import { Responsive } from 'semantic-ui-react';
import { mobileScreen, tabletScreen, mobileAndTablet, desktopScreen } from '../../constants';

export const getWidthFactory = ({ isPhoneFromSSR, isTabletFromSSR }) => () => {
    const ssrValue = isPhoneFromSSR ? Responsive.onlyMobile.maxWidth :
        isTabletFromSSR ? Response.onlyTablet.maxWidth :
            Responsive.onlyComputer.minWidth;
    return typeof window === "undefined" ? ssrValue : window.innerWidth;
};

export const responsivePropsInit = req => {
    const md = new MobileDetect(req.headers["user-agent"]);
    return {
        isPhoneFromSSR: !!md.phone(),
        isTabletFromSSR: !!md.tablet()
    };
}

const DesktopContainer = ({ children, getWidth }) => (
    <Responsive fireOnMount getWidth={getWidth}
        minWidth={Responsive.onlyComputer.minWidth} >
        {children}
    </Responsive>
);

const TabletContainer = ({ children, getWidth }) => (
    <Responsive fireOnMount getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth} >
        {children}
    </Responsive>
);

const MobileContainer = ({ children, getWidth }) => (
    <Responsive fireOnMount getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth} >
        {children}
    </Responsive>
);

const DesktopAndTabletContainer = ({ children, getWidth }) => (
    <Responsive fireOnMount getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyComputer.maxWidth} >
        {children}
    </Responsive>
);

const MobileAndTabletContainer = ({ children, getWidth }) => (
    <Responsive fireOnMount getWidth={getWidth}
        maxWidth={Responsive.onlyTablet.maxWidth} >
        {children}
    </Responsive>
);

export const MediaQuery = ({ type, children, getWidth }) => {
    const propsToPass = { children, getWidth };
    switch (type) {
        case mobileScreen: {
            return MobileContainer(propsToPass);
        }
        case tabletScreen: {
            return TabletContainer(propsToPass)
        }
        case mobileAndTablet: {
            return MobileAndTabletContainer(propsToPass)
        }
        case desktopScreen: {
            return DesktopContainer(propsToPass)
        }
        default: {
            return DesktopAndTabletContainer(propsToPass);
        }
    }
}

export default MediaQuery;