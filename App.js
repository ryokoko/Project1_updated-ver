import React from 'react';

import Header from './app/Header/Header';
import MobileHeader from './app/Header/MobileHeader';
import Page from './app/Page/Page';
import Footer from './app/Footer/Footer';



//Arrow function, return Function Component
const App = () => (
    <div>
        <Header />
        <MobileHeader />
        <Page />
        <Footer />
    </div>
    )


export default App;  