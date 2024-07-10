import {writable} from "svelte/store";
import {browser} from "$app/environment";

export const playerWidth = writable(
	(browser && parseFloat(localStorage.getItem("playerWidth") || "0.8")) || parseFloat("0.8")
);
export const playerHeight = writable(
	(browser && parseFloat(localStorage.getItem("playerHeight") || "0.8")) || parseFloat("0.8")
);
export const hideCoubBelowPercent = writable(
	(browser && parseFloat(localStorage.getItem("hideCoubBelowPercent") || "0")) || parseFloat("0")
);
export const hideCoubBelowViews = writable(
	(browser && parseInt(localStorage.getItem("hideCoubBelowViews") || "0")) || parseInt("0")
);

export const coubsPerPage = writable(
	(browser && parseInt(localStorage.getItem("coubsPerPage") || "10")) || parseInt("10")
);
export const hideCoubsWithTags = writable(
	(browser && localStorage.getItem("hideCoubsWithTags") || "") || ""
);
export const startPlaybackAtPercent = writable(
	(browser && parseFloat(localStorage.getItem("startPlaybackAtPercent") || "0.8")) || parseFloat("0.8")

);

playerWidth.subscribe((val) => browser && (localStorage.setItem("playerWidth", String(val))));
playerHeight.subscribe((val) => browser && (localStorage.setItem("playerHeight", String(val))));
hideCoubBelowPercent.subscribe((val) => browser && (localStorage.setItem("hideCoubBelowPercent", String(val))));
hideCoubBelowViews.subscribe((val) => browser && (localStorage.setItem("hideCoubBelowViews", String(val))));
coubsPerPage.subscribe((val) => browser && (localStorage.setItem("coubsPerPage", String(val))));
hideCoubsWithTags.subscribe((val) => browser && (localStorage.setItem("hideCoubsWithTags", String(val))));
startPlaybackAtPercent.subscribe((val) => browser && (localStorage.setItem("startPlaybackAtPercent", String(val))));
