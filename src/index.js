import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


window.renderWoof = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountWoof = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Woof-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
