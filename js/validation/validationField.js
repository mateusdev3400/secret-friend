import { listSecretFriend } from "../mock/listSecretFriend.js";
import { buttonAdd, buttonRestart, buttonSort, elementAlertMensage, nameFriendSecret } from "../variables/variable.js";

export function validationField() {

    let updatedListSecretFriendLength = listSecretFriend.length;
    let checkListFriendsLimit = updatedListSecretFriendLength <= 3 ? 4 : updatedListSecretFriendLength + 1;

    if (nameFriendSecret.value === "") {
        buttonAdd.setAttribute("disabled", true);
    } else {
        buttonAdd.removeAttribute("disabled");
    }

    if (updatedListSecretFriendLength % 2 == 0 && updatedListSecretFriendLength != 0 && updatedListSecretFriendLength > 3) {
        buttonSort.removeAttribute("disabled");
        buttonRestart.removeAttribute("disabled");

        elementAlertMensage.innerHTML = "";
    } else {
        buttonSort.setAttribute("disabled", true);
        buttonRestart.setAttribute("disabled", true);

        elementAlertMensage.innerHTML = `
            Adicionado: ${updatedListSecretFriendLength} / 
            Necessário: ${checkListFriendsLimit}`;
    }
}

nameFriendSecret.addEventListener("input", validationField);