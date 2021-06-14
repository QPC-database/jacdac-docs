import { BlockServices, BlockWithServices } from "./WorkspaceContext"
import useChange from "../../jacdac/useChange"
import { Block } from "blockly"
import { useCallback, useEffect } from "react"

export default function useBlockChartProps<T>(
    block: Block,
    initialChartProps?: T
) {
    const services = (block as unknown as BlockWithServices)?.jacdacServices
    // data on the current node
    const chartProps = useChange<BlockServices, T>(
        services,
        _ => _?.chartProps as unknown as T
    )
    const setChartProps = useCallback(
        (value: T[]) => {
            if (services) services.chartProps = value
        },
        [services]
    )

    // set initial value
    useEffect(() => {
        if (
            services &&
            initialChartProps !== undefined &&
            services.chartProps === undefined
        )
            // eslint-disable-next-line @typescript-eslint/ban-types
            services.chartProps = initialChartProps as unknown as object
    }, [services])

    return { chartProps, setChartProps }
}
