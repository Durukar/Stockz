
/**
 * 
 * This 'ImplementationType' is used for inheritance, let's see an example, if graphql schema is:
 * 
 *     interface A {}
 *     interface B implements A {}
 *     type C implements B & A {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export ImplementationType<T extends string> =
 *         T extends 'A' ? 'A' | ImplementationType<'B'> :
 *         T extends 'B' ? 'B' | ImplementationType<'C'> :
 *         T
 *     ;
 * 
 * Let's see another example with abstract type, if the graphql schema is:
 * 
 *     union AbstractType = Impl1 | Imple2;
 *     type Impl1 {}
 *     type Impl2 {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export ImplementationType<T extends string> =
 *         T extends 'AbstractType' ? ImplemenationType<'Impl1'> | ImplementationType<'Impl2'> :
 *         T
 *     ;
 */
export type ImplementationType<T> = 
    T extends 'Node' ? 'Node' | ImplementationType<'User'> | ImplementationType<'Product'> :
    T
;
/**
 * 
 * This 'upcastTypes' is used for inheritance, let's see an example, if graphql schema is:
 * 
 *     interface A {}
 *     interface B implements A {}
 *     type C implements B & A {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export function upcastTypes(typeName: string): string[] {
 *         const typeNames: string[] = [];
 *         upcastTypes0(typeName, typeNames);
 *         return typeNames;
 *     }
 * 
 *     function upcastTypes0(typeName: string, output: string[]) {
 *         switch (typeName){
 *             case 'B':
 *                 output.push('B');
 *                 upcastTypes0('A', output);
 *                 break;
 *             case 'C':
 *                 output.push('C');
 *                 upcastTypes0('B', output);
 *                 break;
 *             default:
 *                 output.push(typeName);
 *                 break;
 *         }
 *     }    
 * 
 * Let's see another example with abstract type, if the graphql schema is:
 * 
 *     union AbstractType = Impl1 | Imple2;
 *     type Impl1 {}
 *     type Impl2 {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export function upcastTypes(typeName: string): string[] {
 *         const typeNames: string[] = [];
 *         upcastTypes0(typeName, typeNames);
 *         return typeNames;
 *     }
 * 
 *     function upcastTypes0(typeName: string, output: string[]) {
 *         switch (typeName){
 *             case 'Impl1':
 *                 output.push('Impl1');
 *                 upcastTypes0('AbstractType', output);
 *                 break;
 *             case 'Impl2':
 *                 output.push('Impl2');
 *                 upcastTypes0('AbstractType', output);
 *                 break;
 *             default:
 *                 output.push(typeName);
 *                 break;
 *         }
 *     }     
 */

export function upcastTypes(typeName: string): string[] {
    const typeNames: string[] = [];
    upcastTypes0(typeName, typeNames);
    return typeNames;
}

function upcastTypes0(typeName: string, output: string[]) {
    switch (typeName){
        case 'User':
            output.push('User');
            upcastTypes0('Node', output);
            break;
        case 'Product':
            output.push('Product');
            upcastTypes0('Node', output);
            break;
        default:
            output.push(typeName);
            break;
    }
}

/**
 * 
 * This 'downcastTypes' is used for inheritance, let's see an example, if graphql schema is:
 * 
 *     interface A {}
 *     interface B implements A {}
 *     type C implements B & A {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export function downcastTypes(typeName: string): string[] {
 *         const typeNames: string[] = [];
 *         downcastTypes0(typeName, typeNames);
 *         return typeNames;
 *     }
 * 
 *     function downcastTypes0(typeName: string, output: string[]) {
 *         switch (typeName){
 *             case 'A':
 *                 output.push('A');
 *                 downcastTypes0('B', output);
 *                 break;
 *             case 'B':
 *                 output.push('B');
 *                 downcastTypes0('C', output);
 *                 break;
 *             default:
 *                 output.push(typeName);
 *                 break;
 *         }
 *     }
 * 
 * Let's see another example with abstract type, if the graphql schema is:
 * 
 *     union AbstractType = Impl1 | Imple2;
 *     type Impl1 {}
 *     type Impl2 {}
 * 
 * Typescript code will be generated by like this:
 * 
 *     export function downcastTypes(typeName: string): string[] {
 *         const typeNames: string[] = [];
 *         downcastTypes0(typeName, typeNames);
 *         return typeNames;
 *     }
 * 
 *     function downcastTypes0(typeName: string, output: string[]) {
 *         switch (typeName){
 *             case 'AbstractType':
 *                 downcastTypes0('Impl1', output);
 *                 downcastTypes0('Impl2', output);
 *                 break;
 *             default:
 *                 output.push(typeName);
 *                 break;
 *         }
 *     }   
 */

export function downcastTypes(typeName: string): string[] {
    const typeNames: string[] = [];
    downcastTypes0(typeName, typeNames);
    return typeNames;
}

function downcastTypes0(typeName: string, output: string[]) {
    switch (typeName){
        case 'Node':
            output.push('Node');
            downcastTypes0('User', output);
            downcastTypes0('Product', output);
            break;
        default:
            output.push(typeName);
            break;
    }
}

export type WithTypeName<T, TypeName extends string> =
    T extends {readonly __typename: string} ?
    T :
    T & {readonly __typename: TypeName};
;

