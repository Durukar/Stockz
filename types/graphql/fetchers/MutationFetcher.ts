import type { AcceptableVariables, UnresolvedVariables, FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { ENUM_INPUT_METADATA } from '../EnumInputMetadata';
import type { ObjectFetcher } from 'graphql-ts-client-api';
import { createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type {ProductCreateContent} from '../inputs';
import type {ProductUpdateContent} from '../inputs';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface MutationFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'Mutation', T, TVariables> {


    directive(name: string, args?: DirectiveArgs): MutationFetcher<T, TVariables>;


    userMeUpdate<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'User', X, XVariables>
    ): MutationFetcher<
        T & {readonly "userMeUpdate"?: X}, 
        TVariables & XVariables
    >;

    userMeUpdate<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "userMeUpdate", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'User', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"userMeUpdate", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & XDirectiveVariables
    >;


    productCreate<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productCreate"?: X}, 
        TVariables & XVariables & MutationArgs["productCreate"]
    >;

    productCreate<
        XArgs extends AcceptableVariables<MutationArgs['productCreate']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productCreate"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productCreate']>
    >;

    productCreate<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productCreate", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productCreate", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & MutationArgs["productCreate"] & XDirectiveVariables
    >;

    productCreate<
        XArgs extends AcceptableVariables<MutationArgs['productCreate']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productCreate", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productCreate", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productCreate']> & XDirectiveVariables
    >;


    productUpdate<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productUpdate"?: X}, 
        TVariables & XVariables & MutationArgs["productUpdate"]
    >;

    productUpdate<
        XArgs extends AcceptableVariables<MutationArgs['productUpdate']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productUpdate"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productUpdate']>
    >;

    productUpdate<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productUpdate", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productUpdate", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & MutationArgs["productUpdate"] & XDirectiveVariables
    >;

    productUpdate<
        XArgs extends AcceptableVariables<MutationArgs['productUpdate']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productUpdate", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productUpdate", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productUpdate']> & XDirectiveVariables
    >;


    productDelete<
        X extends object, 
        XVariables extends object
    >(
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productDelete"?: X}, 
        TVariables & XVariables & MutationArgs["productDelete"]
    >;

    productDelete<
        XArgs extends AcceptableVariables<MutationArgs['productDelete']>, 
        X extends object, 
        XVariables extends object
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>
    ): MutationFetcher<
        T & {readonly "productDelete"?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productDelete']>
    >;

    productDelete<
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productDelete", 
        XDirectiveVariables extends object = {}
    >(
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productDelete", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & MutationArgs["productDelete"] & XDirectiveVariables
    >;

    productDelete<
        XArgs extends AcceptableVariables<MutationArgs['productDelete']>, 
        X extends object, 
        XVariables extends object, 
        XAlias extends string = "productDelete", 
        XDirectiveVariables extends object = {}
    >(
        args: XArgs, 
        child: ObjectFetcher<'Product', X, XVariables>, 
        optionsConfigurer: (
            options: FieldOptions<"productDelete", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): MutationFetcher<
        T & {readonly [key in XAlias]?: X}, 
        TVariables & XVariables & UnresolvedVariables<XArgs, MutationArgs['productDelete']> & XDirectiveVariables
    >;
}

export const mutation$: MutationFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "Mutation", 
            "EMBEDDED", 
            [], 
            [
                {
                    category: "REFERENCE", 
                    name: "userMeUpdate", 
                    targetTypeName: "User", 
                    undefinable: true
                }, 
                {
                    category: "REFERENCE", 
                    name: "productCreate", 
                    argGraphQLTypeMap: {content: 'ProductCreateContent!'}, 
                    targetTypeName: "Product", 
                    undefinable: true
                }, 
                {
                    category: "REFERENCE", 
                    name: "productUpdate", 
                    argGraphQLTypeMap: {content: 'ProductUpdateContent!'}, 
                    targetTypeName: "Product", 
                    undefinable: true
                }, 
                {
                    category: "REFERENCE", 
                    name: "productDelete", 
                    argGraphQLTypeMap: {id: 'ID!'}, 
                    targetTypeName: "Product", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export interface MutationArgs {

    readonly productCreate: {
        readonly content: ProductCreateContent
    }, 

    readonly productUpdate: {
        readonly content: ProductUpdateContent
    }, 

    readonly productDelete: {
        readonly id: string
    }
}
