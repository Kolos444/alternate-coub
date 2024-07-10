import type {Root} from "$lib/types";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({fetch, params, setHeaders, cookies}) => {

	if (cookies.get("remember_token")) {
		const json: Root = await (
			await fetch(
				`https://coub.com/api/v2/timeline/favourites?order_by=date&page=${params.page ? params.page : 1}&per_page=25`, {
					headers: {
						Cookie: `remember_token=${cookies.get("remember_token")}`
					}
				}
			)
		).json();

		return {root: json, validToken: true, page: Number(params.page || 1)};
	}

	return {root: undefined, validToken: false, page: Number(params.page || 1)};
};