import React from 'react'

const Button = ({text, icon:Icon}) => {
    return (
        <button
            type="submit"
            className="mt-3 w-full rounded-md bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-erp-btn transition hover:bg-primary-hover"
        >
            <span className="inline-flex items-center gap-2">
                {text} {Icon && <Icon className="h-4 w-4" />}
            </span>
        </button>
    )
}

export default Button
