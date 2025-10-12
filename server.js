const express = require('express');
const next = require('next');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define un formato de log personalizado
  morgan.token('host', function(req, res) {
    return req.hostname;
  });

  const customFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

  // Filtrar solicitudes
  server.use(morgan(customFormat, {
    skip: function (req, res) {
      // Omitir archivos estáticos y solicitudes internas de Next.js
      return req.url.match(/\.(css|woff2|ico|js|png|jpg|jpeg|gif|svg)$/) || req.url.includes('_rsc=') || req.url.match(/^\/_next\//);
    }
  }));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
