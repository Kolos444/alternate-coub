import type {Coub} from "$lib/types";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({fetch, params, setHeaders, cookies}) => {

	const rq = await fetch(`https://coub.com/view/${params.permalink}`, cookies.get("remember_token") ? {
		headers: {
			Cookie: `remember_token=${cookies.get("remember_token")}`
		}
	} : {});
	const txt = await rq.text();

	const jsonText = txt
		.split("<script id='coubPageCoubJson' type='text/json'>")
		.pop()
		?.split("</script>")[0];

	if (jsonText)
		return {coub: JSON.parse(jsonText) as Coub, validToken: !!cookies.get("remember_token")};

	return {coub: undefined, validToken: !!cookies.get("remember_token")};
};