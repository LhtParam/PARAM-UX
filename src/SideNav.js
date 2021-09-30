import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "./sidenavStyle";
import { Avatar } from "@mui/material";
import SearchBar from "material-ui-search-bar";

export default function SideNav() {
  const design = useStyles();
  return (
    <Paper style={{ background: "#E8F5FE" }} className={design.mainDiv}>
      <span className={design.span}>Patients</span>

      <div className={design.sbar}>
        <SearchBar
          value= "search"
        />
      </div>

      <Paper>
        <div className={design.GridA}>
          <span className={design.paper}>
            <Grid>
                <Avatar alt="Sara Sharp" src="/Images/sara.jpg" 
                sx={{ width: 46, height: 46 }}
                />
            </Grid>

            <Grid>
              <span className={design.A}> Sara Smith </span>
              <span className={design.B}> 15 Aug 2020 </span>
            </Grid>
          </span>

          <Grid className={design.dot}>
            <img style={{ height: "11px" }} alt="dot" src="/Images/green-dot.png" />
          </Grid>
        </div>
      </Paper>






      <Paper className={design.sameGrid}>
        <span className={design.paper}>
          <Grid>
          <Avatar alt="james Sharp" src="/Images/james.jpg" 
          sx={{ width: 46, height: 46 }}
          />
          </Grid>

          <Grid>
            <span className={design.A}>James Johnson</span>
            <span className={design.B}>No Clearance</span>
          </Grid>
        </span>
        <Grid className={design.dot}>
          <img style={{ height: "10px" }} alt="dot" src="/Images/red-dot.png" />
        </Grid>
      </Paper>







      <Paper className={design.sameGrid}>
        <span className={design.paper}>
          <Grid>
          <Avatar alt="patrice Sharp" src="/Images/patrice.jpg" 
          sx={{ width: 46, height: 46 }}
          />
          </Grid>
          <Grid>
            <span className={design.A}>Patrice Page</span>
            <span className={design.B}>19 Aug 2020</span>
          </Grid>
        </span>
        <Grid className={design.dot}>
          <img style={{ height: "11px" }} alt="dot" src="/Images/green-dot.png" />
        </Grid>
      </Paper>




    
      <Paper className={design.sameGrid}>
        <span className={design.paper}>
          <Grid>
          <Avatar alt="derek Sharp" src="/Images/derek.jpg" 
          sx={{ width: 46, height: 46 }}
          />
          </Grid>

          <Grid>
            <span className={design.A}>Dereck Diamon</span>
            <span className={design.B}>21 Aug 2021 </span>
          </Grid>
        </span>
        <Grid className={design.dot}>
          <img style={{ height: "11px" }} alt="dot" src="/Images/green-dot.png" />
        </Grid>
      </Paper>
    </Paper>
  );
}