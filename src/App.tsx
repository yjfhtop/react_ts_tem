import React, { Suspense } from 'react';
import {Provider} from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routers from '@/routes'

import store from "@/stores";

// import Text from '@/components/test'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Suspense fallback={null}>
                        {renderRoutes(Routers)}
                    </Suspense>
                </BrowserRouter>
            </div>
        </Provider>
    );
}


export default App;
