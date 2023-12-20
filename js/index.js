import { buttonAdd, buttonSort, buttonRestart } from "./variables/variable.js";

import { showFriendsAdded } from "./helpers/showFriendAdded.js";
import { addSecretFriend } from "./functions/addSecretFriend.js";
import { drawSecretFriend } from "./functions/drawSecretFriend.js";
import { showLuckyFriend } from "./helpers/showLuckyFriend.js";
import { restartSecretFriend } from "./functions/restartSecretFriend.js";
import { validationField } from "./validation/validationField.js";

showFriendsAdded();
showLuckyFriend();
validationField();

buttonAdd.onclick = addSecretFriend;
buttonSort.onclick = drawSecretFriend;
buttonRestart.onclick = restartSecretFriend;