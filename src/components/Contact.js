import React from 'react'
import Grid from "@material-ui/core/Grid"
import ActionCall from "./UI/ActionCall"
import {List, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email';
import ListItemText from "@material-ui/core/ListItemText"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
    pageContainer: {
        [theme.breakpoints.up('md')]: {
            marginTop: '-4em',
        }
    },
    contactPart: {
        marginTop: '.4em',
        [theme.breakpoints.up('md')]: {
            paddingTop: '4.5em',
        }
    }
}))

const Contact = () => {
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const classes = useStyles()
    return (
        <Grid container className={classes.pageContainer} direction={matchSM ? 'column' : 'row'}>
            <Grid item container justify='center' md={3} className={classes.contactPart}>
                <Grid item>
                    <Typography variant='h4' align='center' color='primary'>Contact Us</Typography>
                    <Typography color='primary' align='center' gutterBottom paragraph>We're waiting...</Typography>
                    <List component='ul'>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon color='secondary'/>
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="tel:+99890-123-45-67">+99890-123-45-67</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon color='secondary'/>
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="mailto:johndoe@gmail.com">johndoe@gmail.com</Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid item md={9}>
                <ActionCall/>
            </Grid>
        </Grid>
    )
}

export default Contact