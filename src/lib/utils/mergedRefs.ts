import { useCallback } from "react";
import { type Ref } from "react";

export default function useMergedRefs<T>(...refs: (Ref<T> | undefined | null)[]) {
    return (
    useCallback((node:T | null) => {
        refs.forEach((ref) => {
            if(!ref) return;

            if(typeof ref === "function"){
                ref(node)
            }

            else {
                (ref as {current: T | null}).current = node
            }
        })
    }, [...refs])
)
}