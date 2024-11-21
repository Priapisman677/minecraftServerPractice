import { mapServerDataToInfo, nameAndLink, validServerNames, ServerInfo} from "./utils.js";

//* Building the function for the "Get server info" button
const userPlaceHolder: HTMLButtonElement | null = document.querySelector('.getInfoButton')

userPlaceHolder?.addEventListener('click', ()=>{
  getServerListInfo()
})






//$ Set a set interval that will be refreshing the information of servers every second
//$ Start by just adding a refresh button which I believe will be harder.



let serverInfoList: ServerInfo[] = [];

async function getServerInfo(url: string) {
  const response = await fetch(url);

  const data = await response.json();

  console.log("success!");

  const structuredData = mapServerDataToInfo(data);
  serverInfoList.push(structuredData);
}



async function getServerListInfo() {
  const inputElement = document.querySelector('.one') as HTMLInputElement;
  let userInput: string = ''
  if (inputElement) {
     userInput = inputElement.value;
  } else {
    console.error("Element with ID 'one' not found.");
    return
  }
  
  if(validServerNames.includes(userInput)){
    const url: string = nameAndLink[userInput] as string;
  } else{
    console.log('Test2')
  }

  await getServerInfo("https://api.mcsrvstat.us/2/mc.hypixel.net");

  console.log(serverInfoList);
}

console.log(getServerListInfo)