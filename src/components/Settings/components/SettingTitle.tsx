import useSettingsFilter from "@/src/hooks/useSettingsFilter";

interface SettingTitleProps {
	title: string;
}
export default function SettingTitle({ title }: SettingTitleProps) {
	const { filter } = useSettingsFilter();
	const shouldSettingTitleBeVisible = filter === "" ? true : title.toLowerCase().includes(filter.toLowerCase());
	return shouldSettingTitleBeVisible && <legend className="mb-1 text-lg sm:text-xl md:text-2xl">{title}</legend>;
}
