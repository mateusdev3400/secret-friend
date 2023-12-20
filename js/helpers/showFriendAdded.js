import { quantityFriends, elementListFriendsAdded } from "../variables/variable.js";
import { listSecretFriend } from "../mock/listSecretFriend.js";

export function showFriendsAdded() {
    let html = "";

    if (quantityFriends < 1) {
        html += `Nenhuma pessoa foi adicionada ao amigo secreto!`;
    } else {
        listSecretFriend.forEach(friend => {
            html += `${friend.nameFriend}, `;
        })
    }

    elementListFriendsAdded.innerHTML = html;
}