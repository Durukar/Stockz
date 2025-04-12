import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface PageInfoFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'PageInfo', T, TVariables> {

    on<XName extends ImplementationType<'PageInfo'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): PageInfoFetcher<
        XName extends 'PageInfo' ?
        T & X :
        WithTypeName<T, ImplementationType<'PageInfo'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'PageInfo'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): PageInfoFetcher<T, TVariables>;


    readonly __typename: PageInfoFetcher<T & {__typename: ImplementationType<'PageInfo'>}, TVariables>;


    readonly startCursor: PageInfoFetcher<T & {readonly "startCursor"?: string}, TVariables>;

    "startCursor+"<
        XAlias extends string = "startCursor", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"startCursor", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): PageInfoFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~startCursor": PageInfoFetcher<Omit<T, 'startCursor'>, TVariables>;


    readonly endCursor: PageInfoFetcher<T & {readonly "endCursor"?: string}, TVariables>;

    "endCursor+"<
        XAlias extends string = "endCursor", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"endCursor", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): PageInfoFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~endCursor": PageInfoFetcher<Omit<T, 'endCursor'>, TVariables>;


    readonly hasNextPage: PageInfoFetcher<T & {readonly "hasNextPage": boolean}, TVariables>;

    "hasNextPage+"<
        XAlias extends string = "hasNextPage", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"hasNextPage", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): PageInfoFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: boolean} : 
                {readonly [key in XAlias]: boolean}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~hasNextPage": PageInfoFetcher<Omit<T, 'hasNextPage'>, TVariables>;


    readonly hasPreviousPage: PageInfoFetcher<T & {readonly "hasPreviousPage": boolean}, TVariables>;

    "hasPreviousPage+"<
        XAlias extends string = "hasPreviousPage", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"hasPreviousPage", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): PageInfoFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: boolean} : 
                {readonly [key in XAlias]: boolean}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~hasPreviousPage": PageInfoFetcher<Omit<T, 'hasPreviousPage'>, TVariables>;
}

export const pageInfo$: PageInfoFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "PageInfo", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "SCALAR", 
                    name: "startCursor", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "endCursor", 
                    undefinable: true
                }, 
                "hasNextPage", 
                "hasPreviousPage"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const pageInfo$$ = 
    pageInfo$
        .startCursor
        .endCursor
        .hasNextPage
        .hasPreviousPage
;
