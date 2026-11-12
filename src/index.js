const APP_ORIGIN = "https://ecobarangay.netlify.app";

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
    const upstreamUrl = new URL(incomingUrl.pathname + incomingUrl.search, APP_ORIGIN);
    const upstreamResponse = await fetch(new Request(upstreamUrl, request));

    const location = upstreamResponse.headers.get("Location");
    if (location?.startsWith(APP_ORIGIN)) {
      const headers = new Headers(upstreamResponse.headers);
      headers.set("Location", incomingUrl.origin + location.slice(APP_ORIGIN.length));
      return new Response(upstreamResponse.body, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers,
      });
    }

    return upstreamResponse;
  },
};
