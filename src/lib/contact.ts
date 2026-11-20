// Web3Forms access keys are public by design; it only allows sending to the owner's inbox.
const WEB3FORMS_KEY = "66f652d8-da34-4141-b88f-ef07feffb0ef";

export async function sendMessage(form: FormData, doFetch: typeof fetch = fetch): Promise<void> {
  form.append("access_key", WEB3FORMS_KEY);
  const res = await doFetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.success) throw new Error(data?.message || `Request failed (${res.status})`);
}
