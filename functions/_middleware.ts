// functions/_middleware.ts
export const onRequest: PagesFunction = async ({ request, env, next }) => {
  const header = request.headers.get("Authorization");
  const need = "Basic " + btoa(`${env.BASIC_AUTH_USER}:${env.BASIC_AUTH_PASS}`);

  if (header === need) {
    return next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
  });
};

