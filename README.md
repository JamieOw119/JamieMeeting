# Jamie Meeting

Jamie Meeting is an open source and free online learning conference system. Jamie Meeting uses WebRTC technology.
The server side uses TypeScript + Node.js + MediaSoup and client side uses Angular + Ionic.
Jamie Meeting has the following features:

* Multi-person video conference - real-time audio, video and chat with multiple people
* Shared desktop - support shared desktop, support switching between shared desktop and courseware
* Shared media - share local audio or video, local audio and video can be dragged and synchronized in real time
* Courseware & Whiteboard - upload local courseware, the files are automatically transcoded on the client side, and uploaded to the server side, and automatically synchronized on multiple terminals
* Live Brushes - Live brushes, courseware annotations, and shared with other participants. Real-time display of brushes, delay less than 200ms
* Courseware Preview - Preview the courseware and display the brushes and annotations on the courseware in real time on the preview page
* Courseware/Whiteboard Export - Export courseware/whiteboard including brushes and annotations to pdf documents
* Moderator management functions such as private chat and all bans
* Classroom information, network information and other tips
* Support multiple rooms at the same time - can support as many rooms as you want, the number of participants in each room is not limited, and ultimately depends on the hardware conditions
* Chinese and English switching - automatically select the language according to the browser settings, you can also switch manually
* Full terminal support - supports Windows/Mac/Android/IOS platforms, supports Chrome/Firfox/Safari browsers, and automatically adapts to the terminal environment
* Support use in WeChat (Android)

## Project Dictionary

```
./meeting
```

other sub-project:

- chrome-keying: [README](chroma-keying/README.md)
- rtpmedia: [README](rtpmedia/README.md)
- peer-connection: [README](peer-connection/README.md)
- signaling: [README](signaling/README.md)
- data-channel: [README](data-channel/README.md)

## Install

> Node.js version > 12

```
# build all
./build.sh all

# build subsystem
./build.sh [server/app/admin]

# build result locate in 'dist' dictionary
```

## Run

> The sample SSL certificate is provided in the code. 
> Please provide your own certificate when it is actually running.
> The certificate must be consistent with the domain name you visit.

1. enter the dist dictionary
```
cd dist
```

2. method 1: run server.js

```
node server.js --cert ../certs/rtc.jamie.com.pem --key ../certs/rtc.jamie.com.key
```

2. method 2: get your public IP from `https://api.ipify.org` 

```
node server.js --cert ../certs/rtc.jamie.com.pem --key ../certs/rtc.jamie.com.key --publicIp x.x.x.x
```

2. method 3: `eth0` is used as default interface name. If you have a different interface name, you must specify it using `--eth`

```
node server.js --cert ../certs/rtc.liweix.com.pem --key ../certs/rtc.liweix.com.key --eth <ifname>
```

2. method 4: run start.sh with default SSL certificate

```
./start.sh
```

2. method 5: run with pm2

```
npx pm2 start start.sh
```

## enable google bbr

run the follow command line in server console(linux kernel > 4.9):

```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

## Access

Access WiLearning admin use in browser:

```
https://[your public ip]/admin/
```

* Create room in Admin, open the `Link` of room
* Now it has two roler, `Speaker` and `Attendee`, `Speaker` act as the adminstrator of room.
* Login the same room , choose your roler, begin your conference.