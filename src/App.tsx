import React from 'react';
import {Provider} from "react-redux";
import store from "@/stores";


import Text from '@/components/test'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Text></Text>
            </div>
        </Provider>
    );
}


export default App;
