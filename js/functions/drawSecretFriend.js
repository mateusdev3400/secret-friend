import { listSecretFriend } from "../mock/listSecretFriend.js";
import { elementFriendsListPeers, quantityFriends } from "../variables/variable.js";

export function functionComparison() {
    return 0.5 - Math.random();
}

export function drawSecretFriend(event) {
    event.preventDefault();

    let html = "";
    let newPairsFriend = [];

    const copyListSecretNumber = listSecretFriend.slice();
    const pairs = [];

    copyListSecretNumber.sort(functionComparison);

    for (let counter = 0; counter < copyListSecretNumber.length; counter += 2) {
        pairs.push([copyListSecretNumber[counter], copyListSecretNumber[counter + 1]]);
    }

    for (let counter = 0; counter <= pairs.length; counter += 2) {
        pairs.forEach((pairsFriend) => {
            if (counter <= pairsFriend.length - 1) {
                const primaryElement = pairsFriend[counter];
                const secondaryElement = pairsFriend[counter + 1];
                const newPair = ` ${primaryElement.nameFriend} - ${secondaryElement.nameFriend}`;

                newPairsFriend.push({
                    id: pairsFriend[counter] + 1,
                    nameFriend: newPair
                });

                html += `<p>${newPair}</p>`;   
            }
        });

        elementFriendsListPeers.innerHTML = html;
    }

    return pairs;
}