import type { SetupWorkerApi, RequestHandler } from 'msw';
import type { SetupServerApi } from 'msw/node';
export declare type SetupApi = SetupWorkerApi | SetupServerApi;
export declare type InitializeOptions = Parameters<SetupWorkerApi['start']>[0] | Parameters<SetupServerApi['listen']>[0];
export declare type MswParameters = {
    msw?: RequestHandler[] | {
        handlers: RequestHandler[] | Record<string, RequestHandler>;
    };
};
declare type Context = {
    parameters: MswParameters;
};
export declare function initialize(options?: InitializeOptions, initialHandlers?: RequestHandler[]): SetupApi;
export declare function initializeWorker(options?: InitializeOptions): SetupApi;
export declare function getWorker(): SetupApi;
export declare const mswDecorator: <Story extends (...args: any[]) => any>(storyFn: Story, context: Context) => any;
export declare const mswLoader: (context: Context) => Promise<{}>;
export {};
