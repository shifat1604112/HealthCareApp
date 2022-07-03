import React, { Component } from 'react'
import Header from "../components/Header";
import {Box} from "@material-ui/core/";
import LoginCards from "../components/LoginCards";


class Home extends Component {
    render(){
        return(
            <>
            <Header></Header>
            <Box p={5}>
                <LoginCards/>
            </Box>
            </>
        );
    }
}
export default Home;