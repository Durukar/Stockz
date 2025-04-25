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


    readonly name: ProductFetcher<T & {readonly "name": string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": ProductFetcher<Omit<T, 'name'>, TVariables>;


    readonly quantity: ProductFetcher<T & {readonly "quantity": number}, TVariables>;

    "quantity+"<
        XAlias extends string = "quantity", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"quantity", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: number} : 
                {readonly [key in XAlias]: number}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~quantity": ProductFetcher<Omit<T, 'quantity'>, TVariables>;


    readonly price: ProductFetcher<T & {readonly "price": number}, TVariables>;

    "price+"<
        XAlias extends string = "price", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"price", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: number} : 
                {readonly [key in XAlias]: number}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~price": ProductFetcher<Omit<T, 'price'>, TVariables>;


    readonly type: ProductFetcher<T & {readonly "type": string}, TVariables>;

    "type+"<
        XAlias extends string = "type", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"type", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~type": ProductFetcher<Omit<T, 'type'>, TVariables>;


    readonly status: ProductFetcher<T & {readonly "status": string}, TVariables>;

    "status+"<
        XAlias extends string = "status", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"status", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): ProductFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~status": ProductFetcher<Omit<T, 'status'>, TVariables>;
}

export const product$: ProductFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Product", 
            "OBJECT", 
            [node$.fetchableType], 
            [
                {
                    category: "SCALAR", 
                    name: "url", 
                    undefinable: true
                }, 
                "name", 
                "quantity", 
                "price", 
                "type", 
                "status"
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const product$$ = 
    product$
        .id
        .url
        .name
        .quantity
        .price
        .type
        .status
;
