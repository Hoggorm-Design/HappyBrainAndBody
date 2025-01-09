import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {SanityProvider} from "./providers/SanityProvider";


hydrateRoot(
    document.getElementById('root')!,
    <StrictMode>
        <Router>
            <SanityProvider>
                <App />
            </SanityProvider>
        </Router>
    </StrictMode>
);

