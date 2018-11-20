// Type definitions for @fairytale/crocodile 1.0.0
// Project: https://github.com/fairytalejs/crocodile
// Definitions by: Aaron Dancer <https://github.com/aarondancer>
// TypeScript Version 3.1

import {
  Context,
  RefObject,
  Ref,
  Dispatch,
  SetStateAction,
  Reducer,
  MutableRefObject,
  EffectCallback,
  InputIdentityList,
  SFC
} from 'react'

export function withHooks<P>(Component: SFC<P>): SFC<P>;
export default withHooks;

// This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
/**
 * Accepts a context object (the value returned from `React.createContext`) and returns the current
 * context value, as given by the nearest context provider for the given context.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */
export function useContext<T>(
  context: Context<T> /* , (not public API) observedBits?: number|boolean */
): T
/**
 * Returns a stateful value, and a function to update it.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
export function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>]
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
export function useReducer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: A | null
): [S, Dispatch<A>]
/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 *
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */
export type useRef =
  | (<T extends unknown>(initialValue: T) => MutableRefObject<T>)
  | (<T extends unknown>(initialValue: T | null) => RefObject<T>)

/**
 * The signature is identical to `useEffect`, but it fires synchronously during the same phase that
 * React performs its DOM mutations, before sibling components have been updated. Use this to perform
 * custom DOM mutations.
 *
 * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usemutationeffect
 */
export function useMutationEffect(
  effect: EffectCallback,
  inputs?: InputIdentityList
): void
/**
 * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
 * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
 * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
 *
 * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
 *
 * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
 * `componentDidMount` and `componentDidUpdate`.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export function useLayoutEffect(
  effect: EffectCallback,
  inputs?: InputIdentityList
): void
/**
 * Accepts a function that contains imperative, possibly effectful code.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
export function useEffect(
  effect: EffectCallback,
  inputs?: InputIdentityList
): void
// NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
/**
 * `useImperativeMethods` customizes the instance value that is exposed to parent components when using
 * `ref`. As always, imperative code using refs should be avoided in most cases.
 *
 * `useImperativeMethods` should be used with `React.forwardRef`.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativemethods
 */
export function useImperativeMethods<T, R extends T>(
  ref: Ref<T> | undefined,
  init: () => R,
  inputs?: InputIdentityList
): void
// I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
// useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
/**
 * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
 * has changed.
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */
export function useCallback<T extends (...args: never[]) => unknown>(
  callback: T,
  inputs: InputIdentityList
): T
/**
 * `useMemo` will only recompute the memoized value when one of the `inputs` has changed.
 *
 * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
 * the second argument.
 *
 * ```ts
 * function expensive () { ... }
 *
 * function Component () {
 *   const expensiveResult = useMemo(expensive, [expensive])
 *   return ...
 * }
 * ```
 *
 * @version experimental
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */
export function useMemo<T>(factory: () => T, inputs: InputIdentityList): T
