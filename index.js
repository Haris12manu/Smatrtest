const http = require("http");
const RED = require("node-red");

const server = http.createServer();
const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/ui",
    userDir: "./.nodered",
    functionGlobalContext: {}
};

RED.init(server, settings);

server.listen(3000, () => {
    console.log("Node-RED server started on port 3000");
});

RED.start();

