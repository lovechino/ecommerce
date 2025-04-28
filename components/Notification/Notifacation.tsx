"use client";
import { NotificationType } from "@/Utils/type";
import { notification } from "antd";
import { useEffect } from "react";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  useEffect(() => {
    openNotificationWithIcon("success");
  }, []);
  return <>{contextHolder}</>;
};

export default Notification;
