import React from "react";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { useStyles } from "./headerstyle";
import "./header.css";



function Header() {
  const design = useStyles();
  return (
    <Container maxWidth="fixed" >
    <div className={design.headerMain}>
    <ul className={design.leftSide}>
      <li className={design.list}>
        <img className={design.img} src="/Images/logo.png" alt="logoImage"></img>
      </li>

      <li className={(design.list, design.slide)}>PATIENTS</li>

      <li className={design.list}>CALENDER</li>

      <li className={design.list}>USERS</li>

      <li className={design.list}>BILLING</li>
    </ul>

        <div className={design.rightSide}>
          <NotificationsRoundedIcon
            fontSize="medium"
            className={design.notificatioIcon}
          />
          <Avatar alt="Remy Sharp" src="/Images/avatar.jpg" 
          sx={{ width: 27, height: 27 }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Header;