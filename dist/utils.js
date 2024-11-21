export function mapServerDataToInfo(data) {
    return {
        hostname: data.hostname || "unknown", // The server's name
        ip: data.ip || "unknown", // IP address of the server
        port: data.port || "Unknown", // Port number
        online: data.online || false, // Whether the server is online
        version: data.version || "unknown", // Minecraft version
        players: {
            // Player count
            online: data.players.online,
            max: data.players.max,
        },
    };
}
export const nameAndLink = {
    "hypixel.net": "https://api.mcsrvstat.us/2/mc.hypixel.net",
    "mineplex.com": "https://api.mcsrvstat.us/2/us.mineplex.com",
    "manacube.net": "https://api.mcsrvstat.us/2/play.manacube.net",
    "mccentral.org": "https://api.mcsrvstat.us/2/play.mccentral.org",
    "purpleprison.org": "https://api.mcsrvstat.us/2/purpleprison.org",
    "herobrine.org": "https://api.mcsrvstat.us/2/herobrine.org",
};
