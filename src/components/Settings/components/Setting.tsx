import type { configurationId } from "@/src/types";

import useSettingsFilter from "@/src/hooks/useSettingsFilter";

import type { CSSEditorProps } from "../../Inputs/CSSEditor/CSSEditor";
import type { CheckboxProps } from "../../Inputs/CheckBox/CheckBox";
import type { ColorPickerProps } from "../../Inputs/ColorPicker/ColorPicker";
import type { NumberInputProps } from "../../Inputs/Number/Number";
import type { SelectProps } from "../../Inputs/Select/Select";
import type { SliderProps } from "../../Inputs/Slider/Slider";

import { CSSEditor, Checkbox, ColorPicker, NumberInput, Select, Slider } from "../../Inputs";

type SettingInputProps<ID extends configurationId> = {
	id: ID;
	label?: string;
	title?: string;
} & (
	| ({ type: "checkbox" } & CheckboxProps)
	| ({ type: "color-picker" } & ColorPickerProps)
	| ({ type: "css-editor" } & CSSEditorProps)
	| ({ type: "number" } & NumberInputProps)
	| ({ type: "select" } & SelectProps<ID>)
	| ({ type: "slider" } & SliderProps)
);
function SettingInput<ID extends configurationId>(settingProps: SettingInputProps<ID>) {
	const { type } = settingProps;
	switch (type) {
		case "checkbox": {
			const { checked, className, id, label, onChange, title } = settingProps;
			return <Checkbox checked={checked} className={className} id={id} label={label} onChange={onChange} title={title} />;
		}
		case "number": {
			const { className, disabled, id, label, max, min, onChange, step, value } = settingProps;
			return (
				<NumberInput
					className={className}
					disabled={disabled}
					id={id}
					label={label}
					max={max}
					min={min}
					onChange={onChange}
					step={step}
					value={value}
				/>
			);
		}
		case "select": {
			const { className, disabled, id, label, loading, onChange, options, selectedOption, title } = settingProps;
			return (
				<Select
					className={className}
					disabled={disabled}
					id={id}
					label={label}
					loading={loading}
					onChange={onChange}
					options={options}
					selectedOption={selectedOption}
					title={title}
				/>
			);
		}
		case "slider": {
			const { initialValue, max, min, onChange, step } = settingProps;
			return <Slider initialValue={initialValue} max={max} min={min} onChange={onChange} step={step} />;
		}
		case "css-editor": {
			const { className, id, onChange, value } = settingProps;
			return <CSSEditor className={className} id={id} onChange={onChange} value={value} />;
		}
		case "color-picker": {
			const { className, disabled, id, label, onChange, title, value } = settingProps;
			return <ColorPicker className={className} disabled={disabled} id={id} label={label} onChange={onChange} title={title} value={value} />;
		}
	}
}
export default function Setting<ID extends configurationId>(settingProps: SettingInputProps<ID>) {
	const { filter } = useSettingsFilter();
	const shouldSettingBeVisible =
		filter === "" ? true : (
			(settingProps.title !== undefined && settingProps.title.toLowerCase().includes(filter.toLowerCase())) ||
			(settingProps.label !== undefined && settingProps.label.toLowerCase().includes(filter.toLowerCase()))
		);
	return (
		shouldSettingBeVisible && (
			<div className="mx-2 mb-1" title={settingProps.title}>
				<SettingInput {...settingProps} />
			</div>
		)
	);
}
