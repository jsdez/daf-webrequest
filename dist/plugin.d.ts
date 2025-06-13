import { LitElement } from 'lit';
import { PluginContract } from '@nintex/form-plugin-contract';
export declare class DafWebRequestPlugin extends LitElement {
    label: string;
    description: string;
    readOnly: boolean;
    value: string;
    requestBody: string;
    apiUrl: string;
    requestHeaders: string;
    debugMode: boolean;
    private isLoading;
    private apiResponse;
    static getMetaConfig(): PluginContract;
    render(): import("lit-html").TemplateResult<1>;
    private onInput;
    private callApi;
}
