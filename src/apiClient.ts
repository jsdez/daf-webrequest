// src/apiClient.ts

export async function callApi({
  url,
  method = 'POST',
  headers = {},
  requestBody,
  contentType = 'application/json',
  setLoading,
  setResponse,
}: {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  requestBody?: any;
  contentType?: string;
  setLoading: (loading: boolean) => void;
  setResponse: (response: string, statusCode?: number, success?: boolean) => void;
}) {
  setLoading(true);
  setResponse('', 0, false);
  try {
    // Prepare the body based on content type
    let body: string | undefined;
    const requestHeaders: Record<string, string> = {
      Accept: 'application/json',
      ...headers,
    };

    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
      if (contentType === 'application/json') {
        // JSON body - stringify the object
        requestHeaders['Content-Type'] = 'application/json';
        body = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
      } else if (contentType === 'application/x-www-form-urlencoded') {
        // URL-encoded body - expect a string or convert object to URL params
        requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
        if (typeof requestBody === 'string') {
          body = requestBody;
        } else if (typeof requestBody === 'object' && requestBody !== null) {
          // Convert object to URL-encoded string
          body = Object.keys(requestBody)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(requestBody[key])}`)
            .join('&');
        }
      } else {
        // Plain text or other
        requestHeaders['Content-Type'] = contentType;
        body = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
      }
    }

    const res = await fetch(url, {
      method,
      headers: requestHeaders,
      body,
    });
    
    const text = await res.text();
    setResponse(text, res.status, res.ok);
  } catch (e: any) {
    setResponse('Error: ' + (e?.message || e), 0, false);
  } finally {
    setLoading(false);
  }
}
