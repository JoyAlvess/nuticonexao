import styled from "styled-components";
import { NotificationProps } from "./notification.types";

export const ContainerNotification = styled.div<NotificationProps>`
  position: absolute;
  z-index: 1;
  right: 0;

  background: ${({ backgroundColor }) => backgroundColor};
  padding: 1rem;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  animation: moveToTop 2s ease-in-out;

  @keyframes moveToTop {
    0% {
      transform: translateY(100%) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const TextStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    filter: invert(1);
    margin-right: 0.5rem;
  }

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProgressBar = styled.div`
  height: 5px;
  background-color: #ddd;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 7px;
  margin-left: 7px;
`;

export const ProgressFill = styled.div<NotificationProps>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #fff;
  animation: progressAnimation 5s linear forwards;

  @keyframes progressAnimation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
