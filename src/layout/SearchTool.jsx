import React from "react";
import DatePicker from "../BasicMenu/DatePicker";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const useStyles = makeStyles({
  parent: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    margin: "0px",
    padding: "0px",
    alignItems: "start",
    // height: "21px",
  },
  div1: {
    gridArea: "1 / 1 / 2 / 2",

    // width: "92px",
    // height: "21px",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "-2%",
    color: "#C49150",
  },
  div2: {
    gridArea: "1 / 3 / 2 / 5",

    width: "33px",
    height: "21px",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "-0.02em",
    color: "#2C2F32",
  },
  div3: { gridArea: "2 / 1 / 3 / 3" },
  div4: { gridArea: "2 / 3 / 3 / 5" },
  div5: {
    gridArea: "2 / 5 / 3 / 7",
    marginY: "0",
    borderColor: "#E1E1E1",

    alignSelf: "center",
  },

  parent_div4: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1/2fr",
    gridTemplateRows: "1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    alignItems: "center",
    height: "30px",
  },
  div1_div4: { gridArea: "1 / 1 / 2 / 3" },
  div2_div4: { gridArea: "1 / 3 / 2 / 5" },
  div3_div4: {
    gridArea: "1 / 5 / 2 / 6",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#C49150",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formStyling: {
    width: "361px",
    background: "#FFFFFF",
    border: "1px solid #C49150",
    borderRadius: "10px",
    height: "40px",
  },
});

export default function SearchTool() {
  const [departments, setDepartments] = React.useState("");

  const handleChange = (event) => {
    setDepartments(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div className={classes.div1}>Departments</div>
      <div className={classes.div2}>Date</div>
      <div className={classes.div3}>
        <FormControl sx={{ m: 1, minWidth: "90%" }}>
          <Select
            value={departments}
            onChange={handleChange}
            displayEmpty
            inputProps={{}}
            className={classes.formStyling}
          >
            <MenuItem value="">
              <h6>All Departments</h6>
            </MenuItem>
            <MenuItem value="1"> Marketing</MenuItem>
            <MenuItem value="2"> Finance</MenuItem>
            <MenuItem value="3">Human Resource</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.div4}>
        <div className={classes.parent_div4}>
          <div className={classes.div1_div4}>
            <DatePicker />
          </div>

          <div className={classes.div3_div4}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      <div className={classes.div5}>
        <div>
          <TextField
            id="outlined-basic"
            label="Search Employee"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon
                      sx={{
                        marginLeft: "0px",
                        width: "40px",
                        color: "#868B90",
                        padding: "0px",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "10px",
                width: "296px",
                height: "40px",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-2%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
