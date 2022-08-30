#!/bin/sh
DEBUG='classvideo-server:* mediasoup:*'

if [ -f "server.js" ]
then
	node server.js --cert certs/rtc.jamie.com.pem --key certs/rtc.jamie.com.key;
elif [ -f "server.ts" ]
then
	ts-node server.ts --cert certs/rtc.jamie.com.pem --key certs/rtc.jamie.com.key
else
	echo
	echo "Do not find executable file"
fi
