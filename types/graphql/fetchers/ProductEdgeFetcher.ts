import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { EdgeFetcher, ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface ProductEdgeFetcher<T extends object, TVariables extends object> extends EdgeFetcher<'ProductEdge', T, TVariables> {

    on<XName extends ImplementationType<'ProductEdge'>, X extends object, XVariables extends object>(
        child: EdgeFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): ProductEdgeFetcher<
        XName extends 'ProductEdge' ?
        T & X :
        WithTypeName<T, ImplementationType<'ProductEdge'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'ProductEdge'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): ProductEdgeFetcher<T, TVariables>;


    readonly __typename: ProductEdgeFetcher<T & {__typename: ImplementationType<'ProductEdge'>}, TVariables>;


    readonly cursor: ProductEdgeFetcher<T & {readonly "cursor": string}, TVariables>;

    "cursor+"<
        XAlias extends string = "cursor", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"cursor", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductEdgeFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~cursor": ProductEdgeFetcher<Omit<T, 'cursor'>, TVariables>;


    node<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Product', X, XVariables>
    ): ProductEdgeFetcher<
        T & {readonly "node": X}, 
        TVariables & XVariables
    >;

    node<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "node", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"node", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductEdgeFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: X} : 
                {readonly [key in XAlias]: X}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const productEdge$: ProductEdgeFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "ProductEdge", 
            "EDGE", 
            [], 
            [
                "cursor", 
                {
                    category: "REFERENCE", 
                    name: "node", 
                    targetTypeName: "Product"
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const productEdge$$ = 
    productEdge$
        .cursor
;
