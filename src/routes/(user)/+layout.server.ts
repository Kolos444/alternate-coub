import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async ({fetch, params, setHeaders, cookies}) => {
	if (cookies.get("remember_token") && cookies.get("remember_token") != null) {

		if (cookies.get("channel_id") == undefined) {
			const channelRes = await (
				await fetch("https://coub.com", {
					headers: {
						Cookie: `remember_token=${cookies.get("remember_token")}`
					}
				})
			).text();

			const channelString = channelRes
				.split("current_channel_id=")
				.pop();

			if (channelString != undefined) {
				cookies.set("channelID", channelString.split(";")[0], {path: "/"});
			}
		}

		return {validToken: true};
	}

	return {validToken: false};
};
