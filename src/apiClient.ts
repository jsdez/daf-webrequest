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
  setResponse: (response: string, statusCode?: number, success?: boolean) => void;
}) {
  setLoading(true);
  setResponse('', 0, false);
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
    setResponse(text, res.status, res.ok);
  } catch (e: any) {
    setResponse('Error: ' + (e?.message || e), 0, false);
  } finally {
    setLoading(false);
  }
}
