import React, {Fragment} from 'react'
import {Container, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Lottie from 'react-lottie'
import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import reviewIcon from '../assets/reviewIcon.svg'
import designIcon from '../assets/designIcon.svg'
import buildIcon from '../assets/buildIcon.svg'
import launchIcon from '../assets/launchIcon.svg'
import iterateIcon from '../assets/iterateIcon.svg'
import maintainIcon from '../assets/maintainIcon.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'
import ActionCall from "./UI/ActionCall"

const useStyles = makeStyles(theme => ({
    marginTop: {
        marginTop: '1.5em'
    },
    darkText: {
        ...theme.typography.darkText
    },
    mountain: {
        maxWidth: '25em',
        maxHeight: '40em',
        marginRight: '2em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '20em',
            marginRight: 0
        }
    },
    whiteText: {
        color: 'white'
    },
    consultation: {
        backgroundColor: 'grey',
        paddingBottom: '3em'
    },
    processIcon: {
        maxWidth: '25em',
        maxHeight: '25em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '15em',
            maxHeight: '15em'
        }
    },
    mockup: {
        backgroundColor: '#ff000091',
        paddingBottom: '3em'
    },
    review: {
        backgroundColor: 'green',
        paddingBottom: '3em'
    },
    design: {
        backgroundColor: '#834909',
        paddingBottom: '3em'
    },
    build: {
        backgroundColor: '#e884008c',
        paddingBottom: '3em'
    },
    launch: {
        backgroundColor: '#ac0101',
        paddingBottom: '3em'
    },
    maintain: {
        backgroundColor: '#0069ba',
        paddingBottom: '3em'
    },
    iterate: {
        backgroundColor: '#67b9f6',
        paddingBottom: '3em',
        marginBottom: '-3em'
    }
}))

const Revolution = () => {
    const classes = useStyles()
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Fragment>
            <Container>
                <Grid container className={classes.marginTop} direction='column'>
                    <Grid item>
                        <Typography gutterBottom paragraph align={matchSM ? 'center': "left"} variant='h3' color='primary'>The Revolution</Typography>
                    </Grid>
                    <Grid item container alignItems='center'>
                        <Grid item container justify='center' md={5}>
                            <img className={classes.mountain} src={vision} alt="vision"/>
                        </Grid>
                        <Grid item md={7} className={classes.marginTop}>
                            <Typography gutterBottom variant='h4' color='primary' align={matchSM ? 'center': 'right'}>
                                Vision
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'right'}>
                                The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'right'}>
                                What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'right'}>
                                We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'right'}>
                                By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'right'}>
                                We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center'>
                        <Grid item md={7} className={classes.marginTop}>
                            <Typography gutterBottom variant='h4' color='primary' align={matchSM ? 'center': 'left'}>Technology</Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
                            </Typography>
                            <Typography variant='subtitle2' paragraph className={classes.darkText} align={matchSM ? 'center': 'left'}>
                                This puts personalization in your pocket — faster, better, and more affordable than ever before.
                            </Typography>
                        </Grid>
                        <Grid item container justify='center' md={5}>
                            <Lottie options={defaultOptions} isStopped={true} width='100%' height='100%'/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4' color='primary' align='center'>Process</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid className={classes.consultation} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Consultation</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                            </Typography>
                            <Typography className={classes.whiteText}>
                                Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={consultation} alt="consultation"/>
                        </Grid>
                    </Grid>
                </Container>
                </Grid>
            <Grid className={classes.mockup} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Mockup</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.
                            </Typography>
                            <Typography className={classes.whiteText}>
                                This helps us understand and refine the solution itself before getting distracted by specifics and looks.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={mockup} alt="mockup"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.review} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Review</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                After Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                            </Typography>
                            <Typography className={classes.whiteText}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={reviewIcon} alt="review"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.design} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Design</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                After Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                            </Typography>
                            <Typography className={classes.whiteText}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={designIcon} alt="design"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.review} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Review</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={reviewIcon} alt="review"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.build} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Build</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Here’s where we get down to business.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Each area is then developed in order of importance until ready to be connected to the next piece.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={buildIcon} alt="build"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.launch} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Launch</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                The moment we’ve all been waiting for.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={launchIcon} alt="launch"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.maintain} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Maintain</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Our work doesn’t end there.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={maintainIcon} alt="maintain"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className={classes.iterate} container>
                <Container>
                    <Grid  item container alignItems='center'>
                        <Grid item md={4}>
                            <Typography className={classes.marginTop} variant='h5' paragraph>Iterate</Typography>
                            <Typography className={classes.whiteText} paragraph>
                                The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.
                            </Typography>
                            <Typography className={classes.whiteText} paragraph>
                                Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.
                            </Typography>
                        </Grid>
                        <Grid item md={8} container justify='center' alignItems='center'>
                            <img className={`${classes.processIcon} ${classes.marginTop}`} src={iterateIcon} alt="iterate"/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <ActionCall/>
        </Fragment>
    )
}

export default Revolution