import { forwardRef, useEffect } from "react"

export type Props = {
    onReady: () => void
}
const IsReady = forwardRef<HTMLDivElement, Props>(({ onReady }, ref) => {
    useEffect(() => {
        onReady()
    }, [onReady]);
    return (
        <></>
    )
})

IsReady.displayName = 'IsReady'


export default IsReady

