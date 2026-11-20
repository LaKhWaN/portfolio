// Run: node scripts/contact.test.ts (Node 24 strips the types)
import assert from "node:assert/strict";
import { sendMessage } from "../src/lib/contact.ts";

const reply = (status: number, body: unknown) => (async () =>
  new Response(typeof body === "string" ? body : JSON.stringify(body), { status })) as typeof fetch;

await sendMessage(new FormData(), reply(200, { success: true }));
await assert.rejects(sendMessage(new FormData(), reply(200, { success: false, message: "bad key" })), /bad key/);
await assert.rejects(sendMessage(new FormData(), reply(502, "<html>gateway</html>")), /502/);
await assert.rejects(sendMessage(new FormData(), (async () => { throw new TypeError("Failed to fetch"); }) as typeof fetch), /Failed to fetch/);
console.log("contact: ok");
