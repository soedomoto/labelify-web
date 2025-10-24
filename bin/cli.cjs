#!/usr/bin/env node

const path = require("path");
const http = require("http");
const handler = require("serve-handler");
const args = require("minimist")(process.argv.slice(2));
const open = require("open");

// Default values for host and port
const host = args.host || "0.0.0.0";
const port = args.port || 8080;

// Path to the dist directory
const distPath = path.resolve(__dirname, "../dist");

// Create and start the server
const server = http.createServer((req, res) => {
  return handler(req, res, { public: distPath });
});

server.listen(port, host, () => {
  const address = `http://${host}:${port}`;
  console.log(`Serving static files from ${distPath} at ${address}`);

  // Open the default browser with the address
  open(address);
});