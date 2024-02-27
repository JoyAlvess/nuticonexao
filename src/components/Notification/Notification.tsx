import { useState, useEffect } from "react";
import { NotificationProps } from "./notification.types";

import {
  ContainerNotification,
  TextStatus,
  ProgressBar,
  ProgressFill,
} from "./style";

export const Notification = ({
  backgroundColor,
  imgIcon,
  alt,
  message,
}: NotificationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 25
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerNotification
      backgroundColor={backgroundColor}
      imgIcon={imgIcon}
      alt={alt}
      message={message}
      
    >
      <TextStatus>
        <img src={imgIcon} alt={alt} />
        <span>{message}</span>
      </TextStatus>

      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
    </ContainerNotification>
  );
};
