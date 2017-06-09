import React, { PropTypes } from 'react';
import { appContainer } from '../styles/appContainer.scss';

const App = ({ children }) =>
    <div className={appContainer}>
        <h1>Jorge Ortega Movie Collection</h1>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
