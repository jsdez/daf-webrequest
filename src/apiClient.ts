// src/apiClient.ts

export async function callApi({
  url,
  method = 'POST',
  headers = {},
  requestBody,
  setLoading,
  setResponse,
}: {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  requestBody?: any;
  setLoading: (loading: boolean) => void;
  setResponse: (response: string) => void;
}) {
  setLoading(true);
  setResponse('');
  try {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
        ? JSON.stringify(requestBody)
        : undefined,
    });
    const text = await res.text();
    setResponse(text);
  } catch (e: any) {
    setResponse('Error: ' + (e?.message || e));
  } finally {
    setLoading(false);
  }
}
