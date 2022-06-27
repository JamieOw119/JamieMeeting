This instance runs in the nodejs environment and can run normally under windows/mac/linux systems. It implements the following functions：

- Transfer the virtual background video implemented by chroma keying to the peer

## Install dependencies under project root dictionary

```bash
# this command installs dependencies: http-serve / websocket / yargs
npm i
```

## Start signaling service

```bash
# certificates are not recommended if running on this machine:
node peerserver.js
# if running on a server, it is recommended to use an HTTPS certificate:
node peerserver.js --cert <certification file path> --key <key file path>
```

## Open a new terminal to start HTTP server

```bash
# http-serve is a simple HTTP server, which is not recommended for use in production environments
# http-serve default startup port 8080. You can use the -p parameter to modify the port
npx http-serve .
```

## Open two browser and input respectively

```bash
http://localhost:8080/
```