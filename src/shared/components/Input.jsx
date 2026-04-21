
const Input = ({register,name,error,rules , icon:Icon, label, ...props }) => {
    
    return (
        <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text-muted">
                {label}
            </label>
            <div className="flex items-center gap-3 rounded-md bg-bg-input px-4 py-3 ring-1 ring-inset ring-ring-input">
                {Icon && <Icon className="h-5 w-5 text-text-muted shrink-0" />}
                <input
                    {...register(name,rules)}
                    {...props}
                    className="w-full bg-transparent text-sm text-text-main placeholder:text-text-dim outline-none"
                />
            </div>
                {error && <div className="text-xs text-red-400 font-semibold">{error.message}</div>  }
        </div>
    )
}

export default Input
