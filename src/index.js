import app from "./app";

(async function main() {
  await app.listen(3002);
  console.log("Server runs");
})();
