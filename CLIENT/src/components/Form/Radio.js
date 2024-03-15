import React from 'react'

const Radio = ({ labelFor, labelText, labelClassName, inputType, value, id, onChange, className, name }) => {
    return (

        <div className='form-check ms-2'>
            <input
                type={inputType}
                className={className}
                name={name}
                value={value}
                id={id}
                onChange={onChange} />
            <label htmlFor={labelFor} className={labelClassName}>{labelText}</label>
        </div>


    )
}

export default Radio
