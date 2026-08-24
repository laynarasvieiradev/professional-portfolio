export const handleScrollAnchor = (
    event: React.MouseEvent<HTMLAnchorElement>,
    anchor: string
) => {
    event.preventDefault()
    document.getElementById(anchor)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}