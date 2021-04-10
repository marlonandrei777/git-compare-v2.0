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
            {/* o repository recebeu um parametro com o repository dentro
            o (+) indica q tudo q vem depois do primeiro /repository é esse parâmetro */}
            <Route path="/repository/:repository+" component={Repository} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
