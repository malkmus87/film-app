interface RenderedStyle {
    opacity:number
}

export const MovieListItem = {
    minHeight:20,
    cursor:"pointer"
}
export const MovieListItemRight = {
    width:80,
    fontSize:12
}
export const MovieListItemLeft = {
    width:"calc(100% - 80px)"
}
export const UnhoveredStyle:RenderedStyle = {
    opacity:1
}
export const HoveredStyle:RenderedStyle = {
    opacity:0.7
}