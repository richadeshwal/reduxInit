import React from 'react'
import { connect } from 'react-redux'

function InputMirror(props) {
    return (
        <div>
            <input value={props.inputValue} onChange={props.onInputChange} />
            <p>{props.inputValue}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (event) => {
            dispatch({ type: 'INPUTCHANGE', text: event.target.value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);