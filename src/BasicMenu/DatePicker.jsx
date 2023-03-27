import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  datePicker: {
    "& .MuiInputBase-input": {
      border: "none",
      height: "7px",

      textAlign: "center",
    },
  },
});

export default function BasicDatePicker() {
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Start Date" className={classes.datePicker} />
        <DatePicker label="End Date" className={classes.datePicker} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
