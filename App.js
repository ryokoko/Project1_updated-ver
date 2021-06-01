import React from 'react';

import Header from './app/Header/Header';
import MobileHeader from './app/Header/MobileHeader';
import Page from './app/Page/Page';
import Footer from './app/Footer/Footer';




//Arrow function, return Function Component
/* const App = () => {

    const page = 'HOME';

    return (
        <div>
        <Header activePage={page} />
        <MobileHeader  activePage={page} />
        <Page  activePage={page} />
        <Footer />
        </div>
    )


} */
//class可以持久化储存值
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { //初始化state.这里面的key value都是网站初始状态
            page: 'HOME',
            clicked: false,
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange (newPage) {
        this.setState({
            page: newPage,
        });
    }


    handleSidebarOpen = () => {
        /* return console.log('clicked'); */
        return this.setState({
            clicked: !this.state.clicked ,
        });
        
    }
 
    

    render() {
        const { page, clicked } = this.state;

        //this.state.page="RESUME"; 这种方法是简单的js赋值，没有react参与
        //setState:把this.state更新到最新值
        //执行reconciliation，更新内容

    

        return (
            <div>
                <Header onPageChange={this.handlePageChange} activePage={page} />
                <MobileHeader onSidebarOpen={this.handleSidebarOpen} clicked={clicked} onPageChange={this.handlePageChange} activePage={page} />
                <Page  activePage={page} />
                <Footer />
            </div>
        )
    }
}
//<button onClick={()=>this.handlePageChange('SERVICES')}> click to change to services</button>
    


export default App;  