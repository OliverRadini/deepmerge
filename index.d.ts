declare function deepmerge<T>(x: Partial<T>, y: Partial<T>, options?: deepmerge.Options<T>): T;
declare function deepmerge<T1, T2>(x: Partial<T1>, y: Partial<T2>, options?: deepmerge.Options<T1>): T1 & T2;

type Merger<T, K extends keyof T> = (a: T[K], b: T[K]) => T[K];
type Mergers<T> = {
  [P in keyof T]: Merger<T, P>
}

declare namespace deepmerge {
	export interface Options<T> {
		arrayMerge?(target: any[], source: any[], options?: Options<T>): any[];
		clone?: boolean;
		customMergeFunctions?: Mergers<T>
		isMergeableObject?(value: object): boolean;
	}

	export function all<T> (objects: object[], options?: Options<T>): object;
}

export = deepmerge;
