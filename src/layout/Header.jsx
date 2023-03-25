import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import MenuDropdown from "../BasicMenu/MenuDropdown";
import Avatar from "@mui/material/Avatar";
import notificationIcon from "../icons/notificationIcon.png";
import messageIcon from "../icons/messageIcon.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  AttendanceReport: {
    fontFamily: "Poppins",
    fontStyle: "SemiBold",
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "42px",
    letterSpacing: "-2%",
    color: "black",
    margin: 0,
  },
  superAdmin: {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "18px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    color: "#868B90",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
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
            }}
          >
            <p className={classes.AttendanceReport}>Attendance Report</p>

            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
