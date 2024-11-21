var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapServerDataToInfo } from "./utils.js";
//* Building the function for the "Get server info" button
const userPlaceHolder = document.querySelector('.getInfoButton');
userPlaceHolder === null || userPlaceHolder === void 0 ? void 0 : userPlaceHolder.addEventListener('click', () => {
    getServerListInfo();
});
const validServerNames = ['hypixel.net', 'mineplex.com', 'manacube.net', 'mccentral.org', 'purpleprison.org', 'herobrine.org'];
let serverInfoList = [];
function getServerInfo(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log("success!");
        const structuredData = mapServerDataToInfo(data);
        serverInfoList.push(structuredData);
    });
}
function getServerListInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const inputElement = document.querySelector('.one');
        let userInput = '';
        if (inputElement) {
            userInput = inputElement.value;
        }
        else {
            console.error("Element with ID 'one' not found.");
            return;
        }
        if (validServerNames.includes(userInput)) {
            console.log('test1');
        }
        else {
            console.log('Test2');
        }
        yield getServerInfo("https://api.mcsrvstat.us/2/mc.hypixel.net");
        yield getServerInfo("https://api.mcsrvstat.us/2/us.mineplex.com");
        yield getServerInfo("https://api.mcsrvstat.us/2/play.manacube.net");
        console.log(serverInfoList);
    });
}
console.log(getServerListInfo);
