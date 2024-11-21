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
            const url = nameAndLink[userInput];
            yield getServerInfo(url, userInput);
        }
        else {
            console.log('invalid server name');
        }
        console.log(serverInfoList);
    });
}
console.log(getServerListInfo);
