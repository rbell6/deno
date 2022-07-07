import { serve } from "https://deno.land/std@0.147.0/http/server.ts";

const port = parseInt(Deno.env.get("PORT") ?? "8000");
serve(
	() => new Response("hello world\n"),
	{ port }
);
