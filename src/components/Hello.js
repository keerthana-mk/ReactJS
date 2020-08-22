import React from 'react';

function Hello() {
    /** return (
        <div>
            <h1>using JSX</h1>
        </div>
    )*/

    return React.createElement(
        'div',
         {id:'hello',className:'helloClass'},
         React.createElement('h1', null, 'hi created without JSX'))
}
export default Hello