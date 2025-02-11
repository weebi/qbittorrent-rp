# qBittorrent Rich Presence

[![d-r-p](https://img.shields.io/github/package-json/dependency-version/weebi/qbittorrent-rp/discord-rpc)](https://www.npmjs.com/package/discord-rpc) [![qb-api-v2](https://img.shields.io/github/package-json/dependency-version/weebi/qbittorrent-rp/qbittorrent-api-v2)](https://www.npmjs.com/package/qbittorrent-api-v2)

[![GitHub stars](https://img.shields.io/github/stars/weebi/qbittorrent-rp.svg)](https://github.com/weebi/qbittorrent-rp/stargazers)

Discord Rich Presence for [qBittorrent](https://www.qbittorrent.org/)

![Rich Presence preview](/preview.png)

Note that you need qBittorrent already launched before starting the rich presence.

## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the qbittorrent-rp folder and do `npm install`

• Go to your qBittorrent settings and activate **WEB UI**

• Set the ip, port, username and password

• Edit the config :
```js
host: {
    ip:"127.0.0.1",
    port:"4000"
},
//ip and port for the web API
user: "username",
//username for the web API
password: "password",
//password for the web API
```

• Run it by doing `node index.js`


## Copyright

See the [license](/LICENSE).