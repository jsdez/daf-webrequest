import { LitElement } from 'lit';
import { PluginContract } from '@nintex/form-plugin-contract';
export declare class DafWebRequestPlugin extends LitElement {
    label: string;
    description: string;
    readOnly: boolean;
    value: string;
    openApiUrl: string;
    requestBody: string;
    private openApiSpec;
    static getMetaConfig(): PluginContract;
    updated(changedProps: Map<string, any>): void;
    fetchOpenApiSpec(url: string): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    private onInput;
}
