import { listSecretFriend } from "../mock/listSecretFriend.js";
import { buttonRestart, buttonSort, elementFriendsListPeers, elementListFriendsAdded } from "../variables/variable.js";

export function restartSecretFriend(event) {
    event.preventDefault();

    listSecretFriend.length = 0;

    buttonSort.setAttribute("disabled", true);
    buttonRestart.setAttribute("disabled", true);

    elementFriendsListPeers.innerHTML = `Nenhum amigo foi sorteado!`;
    elementListFriendsAdded.innerHTML = `Nenhuma pessoa foi adicionada ao amigo secreto!`;
}