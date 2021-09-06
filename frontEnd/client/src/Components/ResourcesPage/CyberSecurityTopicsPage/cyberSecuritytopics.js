import React, { Component } from 'react'
import Button from 'react-bootstrap'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import cyberSecuritytopics from './CyberSecurityTopicsPage/cyberSecuritytopics';

export default class securityTopics extends Component {
    render() {
        return(
            <div>
                <h3>Cyber Security Topics</h3>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
                            <img src="/images/securityPH2.jpg" className="securityPH2" />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img src="/images/reportIncedent2.jpg" className="reportIncedent2" />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img src="/images/safeguard2.jpg" className="safeguard2" />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img src="/images/avoidCrime2.jpg" className="avoidCrime2" />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img src="/images/importance2.jpg" className="importance2" />
                        </a>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

