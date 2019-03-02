import React from 'react';

const HomeBody = () => {
    <div className="container text-center">
        <h1>Hello Next.js,</h1>
        <h4>Thank you for giving us an SSR 👋</h4>
        <Link href='/about'><a>About</a></Link>
    </div>
}

export default React.memo(HomeBody);