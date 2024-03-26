import express from 'express';

import { HTMX_KNOWLEDGE } from './data/htmx-info.js';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTMX Essentials</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
                <link rel="icon" href="/icon.png" />
                <script src="/htmx.js" defer></script>
                <link rel="stylesheet" href="/main.css" />
            </head>
            <body>
                <header id="main-header">
                    <img src="/htmx-logo.jpg" alt="HTMX Logo" />
                    <h1>Essentials</h1>
                </header>

                <main>
                    <p>HTMX is a JavaScript library that you use without writing JavaScript code.</p>
                    <button 
                        hx-get="/info"
                        hx-trigger="mouseenter[ctrlKey],click" 
                        hx-target="main" 
                        hx-swap="beforeend"
                    >
                        Learn More
                    </button>
                </main>
            </body>
        </html>
    `);
});

app.get('/info', (req, res) => {
    res.send(`
        <ul>
            ${HTMX_KNOWLEDGE.map(info => `<li>${info}</li>`).join('')}
        </ul>
    `);
});

app.listen(3000);
