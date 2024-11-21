import { mapServerDataToInfo, nameAndLink, validServerNames, ServerInfo} from "./utils.js";

//* Building the function for the "Get server info" button
const userPlaceHolder: HTMLButtonElement | null = document.querySelector('.getInfoButton')

userPlaceHolder?.addEventListener('click', ()=>{
  console.log('Test1');
  getServerListInfo()
})






//$ Set a set interval that will be refreshing the information of servers every second
//$ Start by just adding a refresh button which I believe will be harder.



let serverInfoList: ServerInfo[] = [];

async function getServerInfo(url: string, name: string) {
  const response = await fetch(url);

  const data = await response.json();

  console.log("success!");

  const structuredData = mapServerDataToInfo(data);
  console.log(`Name of the server: ${name}, Info of the server:`,structuredData);
  
  document.querySelector('.serverInfo')!.innerHTML = `
  <p class="serverInfoText">Is the server online? ${structuredData.online? "Yes" : "No"}</p>
  <p class="serverInfoText">online players: ${structuredData.players.online}</p>
  <p class="serverInfoText">Players cap at: ${structuredData.players.max}</p>
  <p class="serverInfoText">Server version: ${structuredData.version}</p>
  <p class="serverInfoText">Server name: ${structuredData.hostname}</p>
  <p class="serverInfoText">Server IP: ${structuredData.ip}</p>
  <p class="serverInfoText">Server port: ${structuredData.port}</p>
  
  `
  // serverInfoList.push(structuredData);
}



async function getServerListInfo() {
  const userInput = (document.querySelector('.textInput') as HTMLInputElement).value;

  if(validServerNames.includes(userInput)){
    const url: string = nameAndLink[userInput] as string;
    console.log('Test2');
    await getServerInfo(url, userInput);
    
    

  } else{
    //! I need to be careful with the exclamation mark below or at least understand why we use the exclation mark instead of the question mark...
    document.querySelector('.serverInfo')!.innerHTML = `<p class="serverInfoText">Invalid server name</p>`
  }
  //! What is below is not being used:
  console.log('ignore this: ',serverInfoList);
  
}

