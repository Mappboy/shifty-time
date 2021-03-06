const https = require('https');
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
// const redirectSSL = require('redirect-ssl');
const app = express();
const config = require('../nuxt.config.js');
const shifts = require('./routes/shifts');

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  // app.use(redirectSSL.create({ redirect: true, redirectPort: 8443 }));
  // Include shitfs router
  app.use(shifts);
  app.use(nuxt.render);

  // Listen the server
  // app.listen(port, host);
  https.createServer(nuxt.options.server.https, app).listen(port, host);

  consola.ready({
    message: `Server listening on https://${host}:${port}`,
    badge: true,
  });
}

start();
