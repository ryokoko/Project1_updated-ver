import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //创建第一个component，通过命名一个arrow function返回一个片段，再import到index文件中



//reactdom把代码渲染到dom的#app上
//RMR - READABLE, MAINTAINABLE, REUSABLE
/* ReactDOM.render(
     React.createElement('div', 
    {id:'my-div'
    }, [
        React.createElement('p', {}, 'hELLO WORLD'),
        React.createElement('a', {
            href: 'https://google.com'}, 'Google'),

    ]), 
    document.querySelector('#app'), 

    //JSX -> JavaScript Extensible Language
    (<div id="my-div">
        <p>Hello World</p>
        <a href="https://google.com">Google</a>
    </div>
    ),
    document.querySelector('#app'),
    ); */

    //通过html调用App这个component
    ReactDOM.render((<App />), document.querySelector('#app'));