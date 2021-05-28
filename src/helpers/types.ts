export type StatusType = "error" | "info" | "warning" | "success" | undefined;

export interface AlertDataType {
  status: StatusType;
  display: string;
  message: string;
}

export type EditAlertType = (
  status: StatusType,
  display: boolean,
  message: string
) => void;
