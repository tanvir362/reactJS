import React from 'react'

const Hello = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'myclass'},
        React.createElement('h1',null, 'Hello, Tanvir!')
    );
}

export default Hello;