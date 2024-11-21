"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let serverInfoList = [];
function getServerInfo(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        // console.log(data);
        serverInfoList.push(data);
        console.log('success!');
    });
}
function getServerListInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getServerInfo('https://api.mcsrvstat.us/2/mc.hypixel.net');
        yield getServerInfo('https://api.mcsrvstat.us/2/us.mineplex.com');
        yield getServerInfo('https://api.mcsrvstat.us/2/play.manacube.net');
        console.log(serverInfoList);
    });
}
getServerListInfo();
