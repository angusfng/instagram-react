import * as React from "react";
import { AlertDataType, StatusType } from "./types";

const useAlert = (): [
  AlertDataType,
  (status: StatusType, display: boolean, message: string) => void
] => {
  const [alertData, setAlertData] = React.useState<AlertDataType>({
    status: "error",
    display: "none",
    message: "",
  });

  const editAlert = (status: StatusType, display: boolean, message: string) => {
    setAlertData({
      status: status,
      display: display ? "flex" : "none",
      message: message,
    });
  };

  return [alertData, editAlert];
};

export default useAlert;
