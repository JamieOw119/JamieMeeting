# singaling-server

- The webrtc signaling server implemented by Typescript + Express + socket.IO can be used as a template program
- Implement signaling client in `web` Directory
- It can support multiple webrtc call environments at the same time, that is, multiple rooms, and the rooms do not affect each other
- There is no limit to the number of participants in each room
- Good real-time performance
- Support reliable signaling transmission. It can accurately know whether the signaling is successfully sent. If the sending fails due to network failure, it can receive a notification and support retry.
- Good scalability. With the increase of application complexity, signaling service is very likely to be used for application data transmission in addition to signaling data transmission, which requires that the signaling service system should have good scalability to adapt to application changes.
- Good performance. The server can support as many rooms as possible with low resource overhead.

## install

```bash
sudo npm i
```

## run

```bash
sudo npm start
```

## open in browser

```bash
https://localhost:8080
```