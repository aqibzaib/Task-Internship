import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import MenuDropdown from "../MuiComponents/MenuDropdown";
import Avatar from "@mui/material/Avatar";
import notificationIcon from "../icons/notificationIcon.png";
import messageIcon from "../icons/messageIcon.png";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
  AttendanceReport: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "28px",
    letterSpacing: "-0.02em",
    color: "#2C2F32",
    marginTop: "55px",
    marginLeft: "19px",
    marginBottom: "8px",
  },
  superAdmin: {
    alignSelf: "flex-start",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "18px",
    letterSpacing: "-0.02em",
    textAlign: "right",
    color: "##868B90",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    // border: "2px solid gold",
  },
  avatar: {
    // border: "2px solid gold",
    marginBottom: "12px",
    marginTop: "3px",
    width: "36px",
    height: "36px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ margin: 0 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              background: "#FFFFFF",
              height: "60px",
              top: "0px",
            }}
          >
            <p className={classes.AttendanceReport}>Attendance Report</p>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "0.5rem",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src={messageIcon} />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src={notificationIcon} />
              </IconButton>

              <Box className={classes.avatarContainer}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.avatar}
                >
                  AB
                </Avatar>

                <MenuDropdown />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
