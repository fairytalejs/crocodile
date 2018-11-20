import React from 'react'
import * as hooks from './withHooks'

const useNative = Boolean(React.useState)

export const useState = useNative ? React.useState : hooks.useState
export const useEffect = useNative ? React.useEffect : hooks.useEffect
export const useContext = useNative ? React.useContext : hooks.useContext
export const useReducer = useNative ? React.useReducer : hooks.useReducer
export const useCallback = useNative ? React.useCallback : hooks.useCallback
export const useMemo = useNative ? React.useMemo : hooks.useMemo
export const useRef = useNative ? React.useRef : hooks.useRef
export const useImperativeMethods = useNative
  ? React.useImperativeMethods
  : hooks.useImperativeMethods
export const useMutationEffect = useNative
  ? React.useMutationEffect
  : hooks.useMutationEffect
export const useLayoutEffect = useNative
  ? React.useLayoutEffect
  : hooks.useLayoutEffect
export const withHooks = useNative ? fn => fn : hooks.withHooks
export default withHooks
