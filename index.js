const qbit = require("qbittorrent-api-v2")
const discord = require("discord-rpc")

const config = require("./config")
const clientId = "877963304813867068"
const startTimestamp = new Date()

const client = new discord.Client({ transport: 'ipc' });

const bytesToSize = (bytes) => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 B'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

const averageRatio = (torrents) => {
    var ratio = 0
    var c = 0

    for (var t in torrents) {
        ratio += torrents[t].ratio
        c += 1
    }

    return (ratio/c).toFixed(2)
}

const discordRPC = async () => {
    const api = await qbit.connect(`http://${config.host.ip}:${config.host.port}`, config.user, config.password)
    var torrents, speeds, version

    torrents = await api.torrents()
    speeds = await api.transferInfo()
    version = await api.appVersion()
    ratio = averageRatio(torrents)

    client.setActivity({
        details: `${torrents.length} active torrents | Average ratio: ${ratio}`,
            state: `↑: ${bytesToSize(speeds.up_info_speed)}/s | ↓: ${bytesToSize(speeds.dl_info_speed)}/s`,
            startTimestamp,
            largeImageKey: "qbittorrent-logo",
            largeImageText: `qBittorrent ${version}`
    })
}

client.on("connected", async () => {
    console.log("Connected to Discord!")

	setInterval(() => { discordRPC() }, 10000) // update every 10 seconds
})

process.on("unhandledRejection", console.error)

client.login({ clientId });