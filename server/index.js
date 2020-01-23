// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const consola = require('consola');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Nuxt, Builder } = require('nuxt');
const app = express();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../nuxt.config.js');
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
  app.use(shifts);
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();