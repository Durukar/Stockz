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
export interface UserFetcher<T extends object, TVariables extends object> extends ObjectFetcher<'User', T, TVariables> {

    on<XName extends ImplementationType<'User'>, X extends object, XVariables extends object>(
        child: ObjectFetcher<XName, X, XVariables>, 
        fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
    ): UserFetcher<
        XName extends 'User' ?
        T & X :
        WithTypeName<T, ImplementationType<'User'>> & (
            WithTypeName<X, ImplementationType<XName>> | 
            {__typename: Exclude<ImplementationType<'User'>, ImplementationType<XName>>}
        ), 
        TVariables & XVariables
    >;


    directive(name: string, args?: DirectiveArgs): UserFetcher<T, TVariables>;


    readonly __typename: UserFetcher<T & {__typename: ImplementationType<'User'>}, TVariables>;


    readonly id: UserFetcher<T & {readonly "id": string}, TVariables>;

    "id+"<
        XAlias extends string = "id", 
        XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"id", {}, {}>
        ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
    ): UserFetcher<
        T & (
            XDirectives extends { readonly include: any } | { readonly skip: any } ? 
                {readonly [key in XAlias]?: string} : 
                {readonly [key in XAlias]: string}
        ), 
        TVariables & XDirectiveVariables
    >;

    readonly "~id": UserFetcher<Omit<T, 'id'>, TVariables>;


    readonly name: UserFetcher<T & {readonly "name"?: string}, TVariables>;

    "name+"<
        XAlias extends string = "name", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"name", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): UserFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~name": UserFetcher<Omit<T, 'name'>, TVariables>;


    readonly lastName: UserFetcher<T & {readonly "lastName"?: string}, TVariables>;

    "lastName+"<
        XAlias extends string = "lastName", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"lastName", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): UserFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~lastName": UserFetcher<Omit<T, 'lastName'>, TVariables>;


    readonly fullName: UserFetcher<T & {readonly "fullName"?: string}, TVariables>;

    "fullName+"<
        XAlias extends string = "fullName", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"fullName", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): UserFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~fullName": UserFetcher<Omit<T, 'fullName'>, TVariables>;


    readonly email: UserFetcher<T & {readonly "email"?: string}, TVariables>;

    "email+"<
        XAlias extends string = "email", 
        XDirectiveVariables extends object = {}
    >(
        optionsConfigurer: (
            options: FieldOptions<"email", {}, {}>
        ) => FieldOptions<XAlias, {readonly [key: string]: DirectiveArgs}, XDirectiveVariables>
    ): UserFetcher<
        T & {readonly [key in XAlias]?: string}, 
        TVariables & XDirectiveVariables
    >;

    readonly "~email": UserFetcher<Omit<T, 'email'>, TVariables>;
}

export const user$: UserFetcher<{}, {}> = 
    createFetcher(
        createFetchableType(
            "User", 
            "OBJECT", 
            [node$.fetchableType], 
            [
                {
                    category: "SCALAR", 
                    name: "name", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "lastName", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "fullName", 
                    undefinable: true
                }, 
                {
                    category: "SCALAR", 
                    name: "email", 
                    undefinable: true
                }
            ]
        ), 
        ENUM_INPUT_METADATA, 
        undefined
    )
;

export const user$$ = 
    user$
        .id
        .name
        .lastName
        .fullName
        .email
;
