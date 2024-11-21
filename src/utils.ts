// import {} from './practiceExercise.js'

export interface ServerInfo {
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



interface NameAndLinkMap {
  [key: string]: string; // This allows any string to be used as an index to retrieve a string value.
}

export function mapServerDataToInfo(data: any): ServerInfo {
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

export const nameAndLink : NameAndLinkMap = {
  "hypixel.net": "https://api.mcsrvstat.us/2/mc.hypixel.net",
  "mineplex.com": "https://api.mcsrvstat.us/2/us.mineplex.com",
  "manacube.net": "https://api.mcsrvstat.us/2/play.manacube.net",
  "mccentral.org": "https://api.mcsrvstat.us/2/play.mccentral.org",
  "purpleprison.org": "https://api.mcsrvstat.us/2/purpleprison.org",
  "herobrine.org": "https://api.mcsrvstat.us/2/herobrine.org",
};

export const validServerNames: string[] = ['hypixel.net', 'mineplex.com' , 'manacube.net' , 'mccentral.org', 'purpleprison.org', 'herobrine.org']