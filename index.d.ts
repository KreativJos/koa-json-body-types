// Project: https://github.com/venables/koa-json-body
// Definitions by: Jos Wagenmakers <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as CoBody from 'co-body';
import * as Koa from 'koa';

/**
 * 
 */
declare namespace KoaJsonBody {
    /**
     * 
     * 
     * @export
     * @interface Options
     * @extends {CoBody.Options}
     */
    export interface Options extends CoBody.Options {
        /**
         * When set to true, ctx.request.body will always contain {} upon missing or invalid payloads.
         * 
         * @type {boolean}
         * @default false
         * @memberof Options
         */
        fallback?: boolean;
    }

    /**
     * 
     */
    export interface ParseMiddleware {
        (opts?: Options): Koa.Middleware
    }
}

declare var parse: KoaJsonBody.ParseMiddleware;
export = parse;