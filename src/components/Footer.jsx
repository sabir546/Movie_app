import { Button } from "@mui/material";
import React from "react";
import { Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div className="px-5">
      <Grid
        className=" text-center   "
        container
        sx={{ bgcolor: "#008080", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 " varient="h6">
            Company
          </Typography>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              About
            </Button>
          </div>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Blog
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 " varient="h6">
            Solutions
          </Typography>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Analytics
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 " varient="h6">
            Documentation
          </Typography>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 " varient="h6">
            Legal
          </Typography>

          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button sx={{ color: "white" }} className="pb-3 " varient="h6">
              Term
            </Button>
          </div>
        </Grid>

        <Grid className="pt-5" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            {" "}
            &copy; 2024 My Company. All rights reserved.
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
