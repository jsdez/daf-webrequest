export declare function callApi({ url, method, headers, requestBody, setLoading, setResponse, }: {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    requestBody?: any;
    setLoading: (loading: boolean) => void;
    setResponse: (response: string) => void;
}): Promise<void>;
