import useSettingsFilter from "@/src/hooks/useSettingsFilter";
import { cn } from "@/src/utils/utilities";

interface SettingSectionProps {
	children: React.ReactNode[];
	className?: string;
}
export default function SettingSection({ children, className }: SettingSectionProps) {
	const { filter } = useSettingsFilter();
	if (children.length === 0) return null;
	if (filter === "") return children;
	const shouldSectionBeVisible =
		(children as React.ReactElement<{ label?: string; title?: string }>[]).filter((child) => {
			if (!child) return false;
			if (!child.props) return false;
			return (
				(child.props.label !== undefined && child.props.label.toLowerCase().includes(filter.toLowerCase())) ||
				(child.props.title !== undefined && child.props.title.toLowerCase().includes(filter.toLowerCase()))
			);
		}).length > 0;
	return shouldSectionBeVisible && <fieldset className={cn("mx-1", className)}>{children}</fieldset>;
}
