import React from 'react';
import Header from './app/Header';
import MobileHeader from './app/MobileHeader';
import Page from './app/Page';
import Footer from './app/Footer';

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