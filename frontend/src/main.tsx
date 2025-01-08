import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';


hydrateRoot(
    document.getElementById('root')!,
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);

