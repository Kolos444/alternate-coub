import type {PageServerLoad} from "./$types";
import type {Root} from "$lib/types";

export const load: PageServerLoad = async ({fetch, params, setHeaders, cookies}) => {

	const json: Root = await (
		await fetch(
			`https://coub.com/api/v2/timeline/subscriptions/half?per_page=25&page=${params.page}`, cookies.get("remember_token") ? {
				headers: {
					Cookie: `remember_token=${cookies.get("remember_token")}`
				}
			} : {}
		)
	).json();

	return {root: json, validToken: !!cookies.get("remember_token"),page: Number(params.page || 1)};
};