import express from 'express';

import { F1_KNOWLEDGE } from './data/formula1-data.js';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Formula 1 Champions</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="icon" href="/icon.png" />
        <script src="/htmx.js" defer></script>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <header id="main-header">
          <img src="/mclaren.jpg" alt="mclaren" />
          <h1>Champions</h1>
        </header>

        <main>
          <p>Formula 1 Multiple Championship Winning Drivers.</p>
          <button>Discover More</button>
        </main>
        
      </body>
    </html>
  `);
});

app.listen(3000);
