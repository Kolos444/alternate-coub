import type {Actions} from "@sveltejs/kit";

export const actions = {
	token: async ({cookies, request}) => {
		const formData = await request.formData();
		cookies.set(
			"remember_token",
			String(formData.get("rememberTokenInput")),
			{path: "/"});
	},
	like: async ({cookies, request}) => {
		const formData = await request.formData();

		const coubID = String(formData.get("coubID"));
		const liked = formData.get("liked") && formData.get("liked") == "true";
		const channelID = String(cookies.get("channelID"));

		if (coubID && channelID) {
			const res = await fetch("https://coub.com/api/v2/likes", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Cookie: `remember_token=${cookies.get("remember_token")}`
				},
				body: `id=${coubID}&type=coub&channel_id=${channelID}`,
				method: liked ? "DELETE" : "POST",
			});

			return await res.json();
		}
	},
	bookmark: async ({cookies, request}) => {
		const formData = await request.formData();

		const coubID = String(formData.get("coubID"));
		const bookmarked = formData.get("bookmarked") && formData.get("bookmarked") == "true";
		const channelID = String(cookies.get("channelID"));

		if (coubID && channelID) {
			const res = await fetch("https://coub.com/api/v2/favourites", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Cookie: `remember_token=${cookies.get("remember_token")}`
				},
				body: `id=${coubID}&type=coub&channel_id=${channelID}`,
				method: bookmarked ? "DELETE" : "POST",
			});
			return await res.json();
		}
	},
	dislike: async ({cookies, request}) => {
		const formData = await request.formData();

		const coubID = String(formData.get("coubID"));
		const disliked = formData.get("disliked") && formData.get("disliked") == "true";
		const channelID = String(cookies.get("channelID"));

		if (coubID && channelID) {
			const res = await fetch("https://coub.com/api/v2/dislikes", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Cookie: `remember_token=${cookies.get("remember_token")}`
				},
				body: `id=${coubID}&type=coub&channel_id=${channelID}`,
				method: disliked ? "DELETE" : "POST",
			});
			return await res.json();
		}
	},
} satisfies Actions;