import React,{Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import {Typography } from "@material-ui/core";

class Header extends Component {
    render(){
        return(
                <AppBar position="fixed">
                <Typography align="center" variant="h5">
                    Electronic HealthCare System
                 </Typography>
                </AppBar>
        );
    }
}

export default Header;