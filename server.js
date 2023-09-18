import http from "http";
import url from "url";

import requestHandler from "./handlers/requestHandler.js";

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
  // console.log(requestProperties);
  res.end(JSON.stringify(requestProperties, null, 4));

  requestHandler(requestProperties, res);
};

app.createServer();
