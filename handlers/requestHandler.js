import userHandler from "./userHandler.js";

function requestHandler(requestProperties, res) {
  const { path, trimPath, method, queries, headers } = requestProperties;

  if (path === "/user") {
    userHandler(requestProperties, res);
  }
}

export default requestHandler;
