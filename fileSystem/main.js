const fs = require("fs");

// fs.writeFileSync('hello.txt', 'Hello World');

if (fs.existsSync("hello.txt")) {
  fs.appendFileSync("hello.txt", "Hola guacho");

  const data = fs.readFileSync("hello.txt", "utf8");
  console.log("🚀 ~ data:", data);
}
