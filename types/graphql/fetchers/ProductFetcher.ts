import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';
import { node$ } from './NodeFetcher';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface ProductFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Product', T, TVariables> {

    on<XName extends ImplementationType<'Product'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): ProductFetcher<
        XName extends 'Product' ?
        T & X :
        WithTypeName<T, ImplementationType<'Product'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'Product'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): ProductFetcher<T, TVariables>;


    readonly __typename: ProductFetcher<T & {__typename: ImplementationType<'Product'>}, TVariables>;


    readonly id: ProductFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": ProductFetcher<Omit<T, 'id'>, TVariables>;


    readonly title: ProductFetcher<T & {readonly "title": string}, TVariables>;

    "title+"<
        XAlias extends string = "title", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"title", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~title": ProductFetcher<Omit<T, 'title'>, TVariables>;


    readonly url: ProductFetcher<T & {readonly "url"?: string}, TVariables>;

    "url+"<
        XAlias extends string = "url", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"url", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): ProductFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~url": ProductFetcher<Omit<T, 'url'>, TVariables>;
}

export const product$: ProductFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Product", 
            "OBJECT", 
            [node$.fetchableType], 
            [
                "title", 
                {
                    category: "SCALAR", 
                    name: "url", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const product$$ = 
    product$
        .id
        .title
        .url
;
