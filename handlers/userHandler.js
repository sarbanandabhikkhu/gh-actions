import fs from "fs";

function userHandler(requestProperties, res) {
  const { path, trimPath, method, queries, headers } = requestProperties;

  const options = {
    encoding: "utf8",
    flag: "w",
    mode: 0o666,
  };

  fs.writeFile(
    "./data/users.json",
    JSON.stringify(requestProperties, null, 4),
    options,
    (err) => {
      if (err) console.log(err.message);
      else {
        console.log("File written successfully");
        res.end(fs.readFileSync("./data/users.json", "utf8"));
      }
    }
  );
}

export default userHandler;
