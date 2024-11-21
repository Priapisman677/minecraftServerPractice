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
console.log('Test');
