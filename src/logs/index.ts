import CryptoJS from "crypto-js";

var items: string[] = [];

function setItem(item: string) {
    let token = CryptoJS.SHA256(item + <string>process.env.ACCESS_TOKEN).toString();
    
    if (items.length > 100) {
        items = [];
    }

    items.push(token);
}

function getItem(item: string) {
    let index = items.findIndex(x => x === item);

    if (index < 0) {
        return false;
    }

    items.splice(index, 1);

    return true;
}

export default {
    setItem,
    getItem
}
