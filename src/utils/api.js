const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': `application/json`,
  },
};

// eslint-disable-next-line import/prefer-default-export
export async function post({ data, endpoint, options }) {
  const rawResponse = await fetch(endpoint, {
    ...DEFAULT_OPTIONS,
    ...options,
    method: `POST`,
    body: JSON.stringify(data),
  });

  if (!rawResponse.ok) {
    throw new Error(rawResponse.statusText);
  }

  return rawResponse.json();
}
