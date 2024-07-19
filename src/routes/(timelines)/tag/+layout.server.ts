import type {LayoutServerLoad} from "./$types";

export const load = (async (event) => {
	return{
		path:event.url.pathname.slice(0,event.url.pathname.search(/\/(likes|popular|recent|views)/)),
	}
}) satisfies LayoutServerLoad;