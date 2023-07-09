import { useLayoutEffect, useRef } from "react";
type AnyFunction = (...args: any[]) => any;
export const useRunAfterUpdate = () => {
	const handlersRef = useRef<AnyFunction[]>([]);

	useLayoutEffect(() => {
		handlersRef.current.forEach((handler) => handler());
		handlersRef.current = [];
	});

	return (handler: AnyFunction) => {
		handlersRef.current.push(handler);
	};
};