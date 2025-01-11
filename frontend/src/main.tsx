import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {SanityProvider} from "./providers/SanityProvider";


hydrateRoot(
    document.getElementById('root')!,
    <StrictMode>
        <BrowserRouter>
            <SanityProvider>
                <App />
            </SanityProvider>
        </BrowserRouter>
    </StrictMode>
);

