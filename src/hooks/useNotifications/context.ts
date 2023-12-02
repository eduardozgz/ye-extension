import type { Notification, NotificationAction, NotificationType } from "@/src/types";

import { createContext } from "react";

export type AddNotification = (type: NotificationType, message: Notification["message"], action?: NotificationAction) => void;

export type RemoveNotification = (notification: Notification) => void;

export type NotificationsContextProps = {
	addNotification: AddNotification;
	notifications: Notification[];
	removeNotification: RemoveNotification;
};
export const NotificationsContext = createContext<NotificationsContextProps | undefined>(undefined);
