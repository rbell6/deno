import { serve } from 'server';

const port = parseInt(Deno.env.get("PORT") ?? "8000");
serve(
	() => new Response("hello world\n"),
	{ port }
);
