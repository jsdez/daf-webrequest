import { LitElement } from 'lit';
import { PluginContract } from '@nintex/form-plugin-contract';
export declare class DafWebRequestPlugin extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    description: string;
    readOnly: boolean;
    value: string;
    requestBody: string;
    apiUrl: string;
    requestHeaders: string;
    debugMode: boolean;
    method: string;
    private isLoading;
    private apiResponse;
    private responseType;
    static getMetaConfig(): PluginContract;
    render(): import("lit-html").TemplateResult<1>;
    private renderResponseAlert;
    updated(changedProperties: Map<string, any>): void;
    private static removeInstructionalPlaceholders;
    private handleApiCall;
    private determineResponseType;
}
