import React from 'react'
const Action = (props) => {
    return(
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            Randomize
            </button>
        </div>
    )
}
export default Action