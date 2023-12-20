import { elementFriendsListPeers } from "../variables/variable.js";

export function showLuckyFriend() {
    let html = "";

    html += `
        Nenhum amigo foi sorteado!
    `;

    elementFriendsListPeers.innerHTML = html;
}