/*
 * This input type is not interface, because interfaces 
 * do not satisfy the constraint 'SerializableParam' of recoil
 */
export type ProductUpdateContent = {
    readonly name?: string;
    readonly quantity?: number;
    readonly price?: number;
    readonly type?: string;
}
