import React, { ChangeEvent } from "react";

interface CustomCheckboxProps {
	id?: string;
	className?: string;
	label: string;
	checked: boolean;
	title: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange, className, id, title }) => {
	return (
		<div className={`flex items-center${className ? ` ${className}` : ""} pb-1`} title={title}>
			<input
				type="checkbox"
				id={id}
				className="form-checkbox h-3.5 w-3.5 text-indigo-600 transition duration-150 ease-in-out"
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id} className="ml-2 block text-sm text-black dark:text-white">
				{label}
			</label>
		</div>
	);
};

export default CustomCheckbox;