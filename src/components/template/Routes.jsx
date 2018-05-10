import React from 'react'
import { Route } from "react-router-dom";

import Home from '../home/Home';
import Realty from '../realty/Realty';

export default route => (

    <div>
        <Route exact path="/" component={Home} />
        <Route path="/realty" component={Realty} />
    </div>

);