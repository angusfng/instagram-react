import * as React from "react";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";
import { AlertDataType, EditAlertType } from "../helpers/types";

interface MyAlertProps {
  alertData: AlertDataType;
  editAlert: EditAlertType;
}

const MyAlert = (props: MyAlertProps) => {
  return (
    <Alert
      status={props.alertData.status}
      mt="1rem"
      borderRadius="5px"
      display={props.alertData.display}
    >
      <AlertIcon />
      {props.alertData.message}
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={() => props.editAlert("error", false, "")}
      />
    </Alert>
  );
};

export default MyAlert;
