import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;