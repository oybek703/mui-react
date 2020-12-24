import React from 'react'
import {Avatar, Container, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import history from '../assets/history.svg'
import avatar from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'
const useStyles = makeStyles(theme => ({
    marginTop: {
        marginTop: '1em'
    },
    info: {
        margin: '2em auto',
        maxWidth: '40em'
    },
    kidText: {
        fontWeight: 600,
        fontStyle: 'italic',
        color: 'gray'
    },
    darkText: {
        ...theme.typography.darkText
    },
    aboutImage: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '15em',
            maxHeight: '15em'
        }
    },
    marginLeft: {
        marginLeft: '1em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    avatar: {
        minWidth : '7em',
        minHeight : '7em',
        display: 'block',
        margin: '1em auto'
    }
}))

const About = () => {
    const classes = useStyles()
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        <Container>
            <Grid justify={matchSM ? 'center' : 'flex-start'} container className={classes.marginTop}>
                <Typography color='primary' align={matchSM ? 'center' : 'left'} variant='h4'>About Us</Typography>
            </Grid>
            <Grid container justify='center' className={classes.info}>
                <Typography color='primary' align='center'>
                    Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid container alignItems='center' justify={matchSM ? 'center' : 'space-between'} className={classes.marginTop}>
                <Grid item md>
                    <Typography gutterBottom paragraph color='primary' variant='h4' align={matchSM ? 'center' : 'left'}>History</Typography>
                    <Typography className={classes.kidText} paragraph>We’re the new kid on the block.</Typography>
                    <Typography variant='body2' paragraph className={classes.darkText}>
                        Founded in 2019, we’re ready to get our hands on the world’s business problems.
                    </Typography>
                    <Typography variant='body2' paragraph className={classes.darkText}>
                        It all started with one question: Why aren’t all businesses using available technology?
                        There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                    </Typography>
                    <Typography variant='body2' paragraph className={classes.darkText}>
                        We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                    </Typography>
                    <Typography variant='body2' paragraph className={classes.darkText}>
                        All this change can be a lot to keep up with, and that’s where we come in.
                    </Typography>
                </Grid>
                <Grid item md className={classes.marginLeft}>
                    <img src={history} className={classes.aboutImage} alt="history"/>
                </Grid>
            </Grid>
            <Grid container justify='center' className={classes.marginTop}>
                <Grid item>
                    <Typography gutterBottom variant='h4' color='primary' align='center'>Team</Typography>
                    <Typography className={classes.kidText} align='center' gutterBottom>Zachary Reece, Founder</Typography>
                    <Avatar src={avatar} className={classes.avatar} alt='Zachary Reece'/>
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='center'>
                <Grid md item>
                    <img src={yearbook} className={classes.aboutImage} alt="yearbook"/>
                    <Typography align='center' className={classes.darkText} variant='subtitle2'>a page from my Sophomore yearbook</Typography>
                </Grid>
                <Grid md item className={`${classes.marginLeft} ${classes.marginTop}`}>
                    <Typography variant={matchSM ? 'body1' : 'subtitle2'} className={classes.darkText} paragraph align='center'>
                        I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                    </Typography>
                    <Typography paragraph gutterBottom variant={matchSM ? 'body1' : 'subtitle2'} className={classes.darkText} align='center'>
                        Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                    </Typography>
                </Grid>
                <Grid md item className={`${classes.marginLeft} ${classes.marginTop}`}>
                    <img src={puppy} className={classes.aboutImage} alt="puppy"/>
                    <Typography align='center' className={classes.darkText} variant='subtitle2'>puppy helped me a lot</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About