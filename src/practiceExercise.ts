interface ServerInfo {
  hostname: string; // The server's name
  ip: string; // IP address of the server
  port: number; // Port number
  online: boolean; // Whether the server is online
  version: string; // Minecraft version
  players: {
    // Player count
    online: number;
    max: number;
  };
}

let serverInfoList: ServerInfo[] = [];

async function getServerInfo(url: string) {
  const response = await fetch(url);

  const data = await response.json();

  console.log("success!");

  const structuredData = mapServerDataToInfo(data);
  serverInfoList.push(structuredData);
}

async function getServerListInfo() {
  await getServerInfo("https://api.mcsrvstat.us/2/mc.hypixel.net");
  await getServerInfo("https://api.mcsrvstat.us/2/us.mineplex.com");
  await getServerInfo("https://api.mcsrvstat.us/2/play.manacube.net");
  console.log(serverInfoList);
}
getServerListInfo();

function mapServerDataToInfo(data: any): ServerInfo {
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
