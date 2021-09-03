import React, { Component } from 'react'
import { Container,  TextField, Button, Typography, Paper, FormControl, FormControlLabel, FormLabel, Grid, FormGroup, makeStyles } from '@material-ui/core'
import useStyles from './styles';
export default class AboutUs extends Component {
    
    render() {
        return (
            <div>
                  {/* TitleCard   */}
                    <div>
                        <Container>
                            <h1>About Us</h1><br/>
                        <p>
                            Philippines Cyber Security Portal or PCSP,  is developed by a team of Razza Consulting Inc. Interns with one goal in mind and that is Cybersecurity. Ever since the pandemic, people have been home-bound cybersecurity has been more important. As many people use the internet for their personal and work affairs, it’s important to think about your security. This website will help you with the latest articles about what is happening in the cybersecurity industry and gives you the necessary information to protect yourself from the many threats. You may also report your cyber incidents to us via our contact info, we ensure to give a response as soon as we can.
                        </p>
                        </Container>
                    </div>
            </div>
        )
    }
}




 
