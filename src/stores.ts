import {writable} from "svelte/store";
import {browser} from "$app/environment";

//Client Volume level
export const volume = writable(
	(browser && parseFloat(localStorage.getItem("volume") || "0.1")) || parseFloat("0.1")
);
volume.subscribe((val) => browser && (localStorage.setItem("volume", String(val))));
