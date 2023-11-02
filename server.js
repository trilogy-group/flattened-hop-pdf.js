const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

// Helper function to serve files
const serveFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
    return;
  }

  // Parse URL to get path and parameters
  const parsedUrl = url.parse(req.url, true);
  const reqPath = decodeURI(parsedUrl.pathname);
  const params = parsedUrl.query;

  // Use the parameters as needed
  console.log(params);

  if (reqPath.includes("..")) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
    return;
  }

  const filePath = path.join(
    __dirname,
    reqPath === "/" ? "index.html" : reqPath
  );
  const extname = String(path.extname(filePath)).toLowerCase();

  // Mapping supported file extensions to MIME types
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".mjs": "text/javascript",
    ".css": "text/css",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".pdf": "application/pdf",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  serveFile(res, filePath, contentType);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
