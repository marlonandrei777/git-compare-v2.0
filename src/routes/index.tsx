import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/* com o corpo da função com parenteses já retorna
o conteúdo de forma automática. (isso se n tivermos nem um outro conteúdo antes
desse return) */
const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/repository" component={Repository} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
