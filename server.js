const http = require("http");
const url = require("url");

const app = {};

app.config = {
  port: process.env.NODE_ENV === "development" ? 3000 : 5000,
};

app.createServer = () => {
  const server = http.createServer(app.handleRequest);

  server.listen(app.config.port, () => {
    console.log("listening to port " + app.config.port);
  });
};

app.handleRequest = (req, res) => {
  const perseUrl = url.parse(req.url, true);
  const requestProperties = {
    path: perseUrl.pathname,
    trimPath: perseUrl.pathname.replace(/^\/+|\/+$/g, ``),
    method: req.method.toLowerCase(),
    queries: perseUrl.query,
    headers: req.headers,
  };

  console.log(requestProperties);

  res.end("Hello World!");
};

app.createServer();
