import React from 'react';
import { MediaQuery, desktopScreen, mobileScreen, tabletScreen } from '@cmdlucas/react-mediaquery';

const MobileDetector = () => {
    return (
        <MediaQuery type={mobileScreen}>
            mobile screen
        </MediaQuery>
    )
}

const TabletDetector = () => {
    return (
        <MediaQuery type={tabletScreen}>
            tablet screen
        </MediaQuery>
    )
}

const DesktopDetector = () => {
    return (
        <MediaQuery type={desktopScreen}>
            desktop screen
        </MediaQuery>
    )
}

const HomeBody = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Hello Next.js,</h1><br />
            <h4>Thanks for giving us an easy SSR framework 👋</h4><br />
            <h5>This boilerplate is responsive, it identifies that you're on a <MobileDetector /> <TabletDetector /> <DesktopDetector /> </h5><br /><br />
        </div>
    )
}

/**
 * NOTE: the take-away from the implementation of this detector is the way the MediaQuery component can (should) be used. Basically, the getWidth is available in globally in as much as you are using <Layout /> as your root component for every page to be rendered.
 */

export default React.memo(HomeBody);