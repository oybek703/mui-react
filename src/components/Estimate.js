import React, {useEffect, useState} from 'react'
import {Container, IconButton, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Lottie from 'react-lottie'
import animationData from "../animations/estimateAnimation/data.json"
import customsoftware from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websites from '../assets/websiteIcon.svg'
import info from '../assets/info.svg'
import customized from '../assets/customized.svg'
import globe from '../assets/globe.svg'
import website from '../assets/website.svg'
import iphone from '../assets/iphone.svg'
import android from '../assets/android.svg'
import camera from '../assets/camera.svg'
import gps from '../assets/gps.svg'
import upload from '../assets/upload.svg'
import users from '../assets/users.svg'
import biometrics from '../assets/biometrics.svg'
import bell from '../assets/bell.svg'
import data from '../assets/data.svg'
import person from '../assets/person.svg'
import persons from '../assets/persons.svg'
import people from '../assets/people.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import backArrow from '../assets/backArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'


const useStyles = makeStyles(theme => ({
    marginBottom: {
        marginBottom: '2em'
    },
    estimateAnimation: {
        maxWidth: '28em',
        [theme.breakpoints.down('md')]: {
            maxWidth: '30em',
            maxHeight: '20em'
        }
    },
    marginTop: {
        marginTop: '1em'
    },
    darkText: {
        ...theme.typography.darkText
    },
    optionIcon: {
        maxWidth: '7em',
        maxHeight: '7em',
        minHeight: '6.5em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '15em'
        }
    },
    estimate: {
        ...theme.typography.estimate,
        padding: '0.8em 1.5em'
    }
}))

const Estimate = () => {
    const classes = useStyles()
    const matchMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: "Which service are you interested in?",
            subtitle: "",
            options: [
                {
                    id: 1,
                    title: "Custom Software Development",
                    subtitle: null,
                    icon: customsoftware,
                    iconAlt: "custom software development",
                    selected: false,
                    cost: 100
                },
                {
                    id: 2,
                    title: "iOS/Android App Development",
                    subtitle: null,
                    icon: mobileIcon,
                    iconAlt: "ios and android app development",
                    selected: false,
                    cost: 200
                },
                {
                    id: 3,
                    title: "Website Development",
                    subtitle: null,
                    icon: websites,
                    iconAlt: "outlines of android phone",
                    selected: false,
                    cost: 100
                }
            ],
            active: true
        },
        {
            id: 2,
            title: "Which platforms do you need supported?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Web Application",
                    subtitle: null,
                    icon: website,
                    iconAlt: "computer outline",
                    selected: false,
                    cost: 100
                },
                {
                    id: 2,
                    title: "iOS Application",
                    subtitle: null,
                    icon: iphone,
                    iconAlt: "outline of iphone",
                    selected: false,
                    cost: 100
                },
                {
                    id: 3,
                    title: "Android Application",
                    subtitle: null,
                    icon: android,
                    iconAlt: "outlines of android phone",
                    selected: false,
                    cost: 100
                }
            ],
            active: false
        },
        {
            id: 3,
            title: "Which features do you expect to use?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Photo/Video",
                    subtitle: null,
                    icon: camera,
                    iconAlt: "camera outline",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "GPS",
                    subtitle: null,
                    icon: gps,
                    iconAlt: "gps pin",
                    selected: false,
                    cost: 25
                },
                {
                    id: 3,
                    title: "File Transfer",
                    subtitle: null,
                    icon: upload,
                    iconAlt: "outline of cloud with arrow pointing up",
                    selected: false,
                    cost: 25
                }
            ],
            active: false
        },
        {
            id: 4,
            title: "Which features do you expect to use?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Users/Authentication",
                    subtitle: null,
                    icon: users,
                    iconAlt: "outline of a person with a plus sign",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "Biometrics",
                    subtitle: null,
                    icon: biometrics,
                    iconAlt: "fingerprint",
                    selected: false,
                    cost: 25
                },
                {
                    id: 3,
                    title: "Push Notifications",
                    subtitle: null,
                    icon: bell,
                    iconAlt: "outline of a bell",
                    selected: false,
                    cost: 25
                }
            ],
            active: false
        },
        {
            id: 5,
            title: "What type of custom features do you expect to need?",
            subtitle: "Select one.",
            options: [
                {
                    id: 1,
                    title: "Low Complexity",
                    subtitle: "(Informational)",
                    icon: info,
                    iconAlt: "'i' inside a circle",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "Medium Complexity",
                    subtitle: "(Interactive, Customizable, Realtime)",
                    icon: customized,
                    iconAlt: "two toggle switches",
                    selected: false,
                    cost: 50
                },
                {
                    id: 3,
                    title: "High Complexity",
                    subtitle: "(Data Modeling and Computation)",
                    icon: data,
                    iconAlt: "outline of line graph",
                    selected: false,
                    cost: 100
                }
            ],
            active: false
        },
        {
            id: 6,
            title: "How many users do you expect?",
            subtitle: "Select one.",
            options: [
                {
                    id: 1,
                    title: "0-10",
                    subtitle: null,
                    icon: person,
                    iconAlt: "person outline",
                    selected: false,
                    cost: 1
                },
                {
                    id: 2,
                    title: "10-100",
                    subtitle: null,
                    icon: persons,
                    iconAlt: "outline of two people",
                    selected: false,
                    cost: 1.25
                },
                {
                    id: 3,
                    title: "100+",
                    subtitle: null,
                    icon: people,
                    iconAlt: "outline of three people",
                    selected: false,
                    cost: 1.5
                }
            ],
            active: false
        },
        {
            id: 7,
            title: "Which type of website are you wanting?",
            subtitle: "Select one.",
            active: false,
            options: [
                {
                    id: 1,
                    title: "Basic",
                    subtitle: "(Informational)",
                    icon: info,
                    iconAlt: "person outline",
                    selected: false,
                    cost: 100
                },
                {
                    id: 2,
                    title: "Interactive",
                    subtitle: "(Users, API's, Messaging)",
                    icon: customized,
                    iconAlt: "outline of two people",
                    selected: false,
                    cost: 200
                },
                {
                    id: 3,
                    title: "E-Commerce",
                    subtitle: "(Sales)",
                    icon: globe,
                    iconAlt: "outline of three people",
                    selected: false,
                    cost: 250
                }
            ]
        }
    ])
    const [id, setId] = useState(1)
    const next = () => setId(id => id >= 7 ? 7 : id + 1)
    const prev = () => setId(id => id <= 1 ? 1 : id - 1)
    useEffect(() => {
        setQuestions(questions => questions.map(q => {q.active = false; return q})
            .map(q => {q.id === id ? q.active = true : q.active = false; return q}))
    }, [id])
    return (
        <Container>
            <Grid alignItems='center' className={classes.marginTop} container justify={matchMD ?  'center' : 'space-between'}>
                <Grid item lg={5}>
                    <Typography align={matchMD ? 'center' : 'left'} variant='h4' color='primary'>Estimate</Typography>
                    <Grid item container justify='center' className={classes.estimateAnimation}>
                        <Lottie options={defaultOptions} width='100%' height='100%'/>
                    </Grid>
                </Grid>
                <Grid item lg={7} container direction='column'>
                    {
                        questions.filter(q => q.active).map(question => (
                            <Grid item key={question.id}>
                                <Grid item>
                                    <Typography gutterBottom align='center' variant='h5' color='primary'>{question.title}</Typography>
                                    <Typography align='center' paragraph variant='body1' className={classes.darkText}>{question.subtitle}</Typography>
                                </Grid>
                                <Grid item container direction={matchSM ? 'column' : 'row'} justify='space-around'>
                                    {
                                        question.options.map(option => (
                                            <Grid key={option.id} item className={classes.marginBottom}>
                                                <Grid item>
                                                    <Typography color='primary' paragraph  align='center'>{option.title}</Typography>
                                                    <Typography variant='subtitle1' className={classes.darkText} align='center'>{option.subtitle || ' '}</Typography>
                                                </Grid>
                                                <Grid item container justify='center'>
                                                    <img className={classes.optionIcon} src={option.icon} alt={option.iconAlt}/>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        ))
                    }
                    <Grid item container justify='space-around' className={`${classes.marginTop} ${classes.marginBottom}`}>
                            <Grid item>
                                <IconButton onClick={prev} disabled={id === 1}>
                                    <img src={ id === 1 ? backArrowDisabled : backArrow} alt="back"/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                            <IconButton onClick={next} disabled={id === 7}>
                                <img src={id === 7 ? forwardArrowDisabled : forwardArrow} alt="next"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Estimate