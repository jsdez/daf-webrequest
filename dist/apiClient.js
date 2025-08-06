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
    return __awaiter(this, arguments, void 0, function* ({ url, method = 'POST', headers = {}, requestBody, setLoading, setResponse, }) {
        setLoading(true);
        setResponse('');
        try {
            const res = yield fetch(url, {
                method,
                headers: Object.assign({ 'Content-Type': 'application/json', Accept: 'application/json' }, headers),
                body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
                    ? JSON.stringify(requestBody)
                    : undefined,
            });
            const text = yield res.text();
            setResponse(text);
        }
        catch (e) {
            setResponse('Error: ' + ((e === null || e === void 0 ? void 0 : e.message) || e));
        }
        finally {
            setLoading(false);
        }
    });
}
