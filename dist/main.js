var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapServerDataToInfo, nameAndLink, validServerNames } from "./utils.js";
//* Building the function for the "Get server info" button
const userPlaceHolder = document.querySelector('.getInfoButton');
userPlaceHolder === null || userPlaceHolder === void 0 ? void 0 : userPlaceHolder.addEventListener('click', () => {
    console.log('Test1');
    getServerListInfo();
});
//$ Set a set interval that will be refreshing the information of servers every second
//$ Start by just adding a refresh button which I believe will be harder.
let serverInfoList = [];
function getServerInfo(url, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log("success!");
        const structuredData = mapServerDataToInfo(data);
        console.log(`Name of the server: ${name}, Info of the server:`, structuredData);
        document.querySelector('.serverInfo').innerHTML = `
  <p class="serverInfoText">Is the server online? ${structuredData.online ? "Yes" : "No"}</p>
  <p class="serverInfoText">online players: ${structuredData.players.online}</p>
  <p class="serverInfoText">Players cap at: ${structuredData.players.max}</p>
  <p class="serverInfoText">Server version: ${structuredData.version}</p>
  <p class="serverInfoText">Server name: ${structuredData.hostname}</p>
  <p class="serverInfoText">Server IP: ${structuredData.ip}</p>
  <p class="serverInfoText">Server port: ${structuredData.port}</p>
  
  `;
        // serverInfoList.push(structuredData);
    });
}
function getServerListInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const userInput = document.querySelector('.textInput').value;
        if (validServerNames.includes(userInput)) {
            const url = nameAndLink[userInput];
            console.log('Test2');
            yield getServerInfo(url, userInput);
        }
        else {
            //! I need to be careful with the exclamation mark below or at least understand why we use the exclation mark instead of the question mark...
            document.querySelector('.serverInfo').innerHTML = `<p class="serverInfoText">Invalid server name</p>`;
        }
        //! What is below is not being used:
        console.log('ignore this: ', serverInfoList);
    });
}
