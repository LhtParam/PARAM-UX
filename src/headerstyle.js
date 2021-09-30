import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  leftSide: {
    width: "550px",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    justifyContent: "space-between",
    marginLeft: "-50px",
    marginTop: "-.1px",
    height: "73px",
  },

  headerMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "70px",
    backgroundColor: "#FFFFFF",
  },
  rightSide: {
    display: "flex",
    alignItems: "center", 
  },
  img: {
    height: "70px",
    marginRight: "20px",
  },
  notificatioIcon: {
    margin: "11px",
  },

  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0F0F0F",
    fontSize: "12px",
    fontWeight: "bold",
    width: "110px",
  },
  slide: {
    backgroundColor: "#00A0F0",
    color: "white",
    display: "flex",
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    width: "110px",
  },
});