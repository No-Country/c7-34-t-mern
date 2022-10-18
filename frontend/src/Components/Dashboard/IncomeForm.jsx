import income_icon from "@/assets/icons/dashboard/income.svg";
import React from "react";
import { useForm } from "react-hook-form";

const IncomeForm = () => {
    const methods = useForm()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <React.Fragment>
            <span className="p-6 bg-slate-400/40 rounded-full">
                <img src={income_icon} alt="income" />
            </span>
            <form onSubmit={onSubmit}>
                
            </form>
        </React.Fragment>
    )
}

export default IncomeForm
