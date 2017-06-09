import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Form from './form.js';

const App = React.createClass({
    render: function () {
        return (
            <div>
                <Form />
            </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));
