import {
    BlockServices,
    BlockWithServices,
    DATA_CHANGE,
} from "./WorkspaceContext"
import { Block } from "blockly"
import { useCallback, useEffect } from "react"
import useChangeThrottled from "../../jacdac/useChangeThrottled"

// eslint-disable-next-line @typescript-eslint/ban-types
export default function useBlockData<T = object>(
    block: Block,
    initialValue?: T[]
) {
    const services = (block as unknown as BlockWithServices)?.jacdacServices
    // data on the current node
    const data = useChangeThrottled<BlockServices, T[]>(
        services,
        _ => _?.data as unknown as T[],
        200,
        DATA_CHANGE
    )
    const setData = useCallback(
        (value: T[]) => {
            // eslint-disable-next-line @typescript-eslint/ban-types
            if (services) services.data = value as unknown as object[]
        },
        [services]
    )

    // set initial value
    useEffect(() => {
        if (
            services &&
            initialValue !== undefined &&
            services.data === undefined
        )
            // eslint-disable-next-line @typescript-eslint/ban-types
            services.data = initialValue as unknown as object[]
    }, [services])

    return { data, setData }
}
