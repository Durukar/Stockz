import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher, ConnectionFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface QueryFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Query', T, TVariables> {


    directive(name: string, args?: DirectiveArgs): QueryFetcher<T, TVariables>;


    userMe<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'User', X, XVariables>
    ): QueryFetcher<
        T & {readonly "userMe"?: X}, 
        TVariables & XVariables
    >;

    userMe<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "userMe", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'User', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"userMe", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    user<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'User', X, XVariables>
    ): QueryFetcher<
        T & {readonly "user"?: X}, 
        TVariables & XVariables
    >;

    user<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "user", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'User', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"user", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    users<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'User', X, XVariables>
    ): QueryFetcher<
        T & {readonly "users": ReadonlyArray<X>}, 
        TVariables & XVariables
    >;

    users<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "users", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'User', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"users", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): QueryFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: ReadonlyArray<X>} : 
                {readonly [key in XAlias]: ReadonlyArray<X>}
        ), 
        TVariables & XVariables & XDirectiveVariables
    >;


    product<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Product', X, XVariables>
    ): QueryFetcher<
        T & {readonly "product"?: X}, 
        TVariables & XVariables & QueryArgs["product"]
    >;

    product<
        XArgs extends AcceptableVariables<QueryArgs['product']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>
    ): QueryFetcher<
        T & {readonly "product"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['product']>
    >;

    product<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "product", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"product", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & QueryArgs["product"] & XDirectiveVariables
    >;

    product<
        XArgs extends AcceptableVariables<QueryArgs['product']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "product", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"product", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, QueryArgs['product']> & XDirectiveVariables
    >;


    products<
        X extends object, 
        XVariables extends object
    >(
        child: ConnectionFetcher<'ProductConnection', X, XVariables>
    ): QueryFetcher<
        T & {readonly "products"?: X}, 
        TVariables & XVariables
    >;

    products<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "products", 
        XDirectiveVariables extends object = {}
    >(
        child: ConnectionFetcher<'ProductConnection', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"products", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): QueryFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;
}

export const query$: QueryFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Query", 
            "OBJECT", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "userMe", 
                    targetTypeName: "User", 
                    undefinable: true
                }, 
                {
                    category: "REFERENCE", 
                    name: "user", 
                    targetTypeName: "User", 
                    undefinable: true
                }, 
                {
                    category: "LIST", 
                    name: "users", 
                    targetTypeName: "User"
                }, 
                {
                    category: "REFERENCE", 
                    name: "product", 
                    argGraphQLTypeMap: {id: 'ID!'}, 
                    targetTypeName: "Product", 
                    undefinable: true
                }, 
                {
                    category: "CONNECTION", 
                    name: "products", 
                    connectionTypeName: "ProductConnection", 
                    edgeTypeName: "ProductEdge", 
                    targetTypeName: "Product", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export interface QueryArgs {

    readonly product: {
        readonly id: string
    }
}
