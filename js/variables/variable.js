import { listSecretFriend } from "../mock/listSecretFriend.js";

export let nameFriendSecret = document.querySelector("input");

export let elementListFriendsAdded = document.querySelector("#added-friends-list");
export let elementFriendsListPeers = document.querySelector("#friends-list-peers");
export let elementAlertMensage = document.querySelector("#alert-mensage");

export let quantityFriends = listSecretFriend.length;

export let buttonAdd = document.querySelector("#button-add");
export let buttonSort = document.querySelector("#button-sort");
export let buttonRestart = document.querySelector("#button-restart");