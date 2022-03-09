export const HoverCounters = ({counter,handleClick})=>{
    return(
        <div>
            <button
                type="button"
                onMouseOver={()=>handleClick(35)}
            >
                Hovered {counter} times
            </button>
        </div>
    )
}