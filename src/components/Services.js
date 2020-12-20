import React from 'react'
import {Container, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Service from "./UI/Service"
import mobileIcon from '../assets/mobileIcon.svg'
import customSoftware from '../assets/Custom Software Icon.svg'
import websiteIcon from '../assets/websiteIcon.svg'

const Services = () => {
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
            <Container>
                <Typography variant='h3' align={matchSM ? 'center' : 'left'} color='primary' gutterBottom>Services</Typography>
                <Grid container direction='column'>
                    <Grid item container justify={matchSM ? 'center' : 'flex-end'}>
                        <Service link='/mobileapps' title='iOS/Android App Development'
                            text='Extend Functionality. Extend Access. Increase Engagement.'
                            subtext='Integrate your web experience or create a standalone app with either mobile platform.'
                            img={mobileIcon}/>
                    </Grid>
                    <Grid item container justify={matchSM ? 'center' : 'flex-start'}>
                        <Service link='/customsoftware' title='Custom Software Development'
                        text='Save Energy. Save Time. Save Money.'
                        subtext='Complete digital solutions, from investigation to celebration.'
                        img={customSoftware}/>
                    </Grid>
                    <Grid item container justify={matchSM ? 'center' : 'flex-end'}>
                        <Service link='/websites' title='Website Development'
                        text='Reach More. Discover More. Sell more.'
                        subtext='Optimized for Search Engines, built for speed.'
                        img={websiteIcon}/>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default Services