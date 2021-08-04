import React, {Fragment} from 'react';
import { BrowserRouter , Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""} >
            
        </BrowserRouter>
    );
}