// src/apiClient.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function callApi(_a) {
    return __awaiter(this, arguments, void 0, function* ({ url, method = 'POST', headers = {}, requestBody, contentType = 'application/json', setLoading, setResponse, }) {
        setLoading(true);
        setResponse('', 0, false);
        try {
            // Prepare the body based on content type
            let body;
            const requestHeaders = Object.assign({ Accept: 'application/json' }, headers);
            if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())) {
                if (contentType === 'application/json') {
                    // JSON body - stringify the object
                    requestHeaders['Content-Type'] = 'application/json';
                    body = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
                }
                else if (contentType === 'application/x-www-form-urlencoded') {
                    // URL-encoded body - expect a string or convert object to URL params
                    requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
                    if (typeof requestBody === 'string') {
                        body = requestBody;
                    }
                    else if (typeof requestBody === 'object' && requestBody !== null) {
                        // Convert object to URL-encoded string
                        body = Object.keys(requestBody)
                            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(requestBody[key])}`)
                            .join('&');
                    }
                }
                else {
                    // Plain text or other
                    requestHeaders['Content-Type'] = contentType;
                    body = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
                }
            }
            const res = yield fetch(url, {
                method,
                headers: requestHeaders,
                body,
            });
            const text = yield res.text();
            setResponse(text, res.status, res.ok);
        }
        catch (e) {
            setResponse('Error: ' + ((e === null || e === void 0 ? void 0 : e.message) || e), 0, false);
        }
        finally {
            setLoading(false);
        }
    });
}
