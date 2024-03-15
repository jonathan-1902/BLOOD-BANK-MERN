import React from 'react'


//Input Type we are using it as reusable component for forms dynamically for users

const InputType = ({ labelFor, labelText, inputType, value, onChange, name }) => {
    return (
        <>
            <div className="mb-2">
                <label className="form-label" htmlFor={labelFor}>{labelText}</label>
                <input
                    type={inputType}
                    className="form-control"
                    id={labelFor}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputType
