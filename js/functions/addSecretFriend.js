import { quantityFriends, nameFriendSecret, elementListFriendsAdded, buttonSort } from "../variables/variable.js";
import { listSecretFriend } from "../mock/listSecretFriend.js";
import { validationField } from "../validation/validationField.js";

export function addSecretFriend(event) {
    event.preventDefault();

    let html = "";

    listSecretFriend.push({
        idFriend: quantityFriends + 1,
        nameFriend: nameFriendSecret.value
    });
    nameFriendSecret.value = "";

    listSecretFriend.forEach(friend => {
        html += `${friend.nameFriend}, `;
    });

    validationField();

    elementListFriendsAdded.innerHTML = html;
}