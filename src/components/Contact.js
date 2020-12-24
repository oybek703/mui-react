import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid"
import ActionCall from "./UI/ActionCall"
import {Button, Icon, List, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email';
import ListItemText from "@material-ui/core/ListItemText"
import Link from "@material-ui/core/Link"
import TextField from "@material-ui/core/TextField"

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
    },
    marginBottom: {
        marginBottom: '1em'
    },
    form: {
        minWidth: '20em',
        [theme.breakpoints.up('md')]: {
            minWidth: '13em'
        }
    },
    inputColor: {
        ...theme.typography.darkText
    },
    sendBtn: {
        ...theme.typography.estimate,
        fontSize: '1.2em'
    }

}))

const Contact = () => {
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const classes = useStyles()
    const [name, setName] = useState('')
    const [nameHelperText, setNameHelperText] = useState('')
    const [email, setEmail] = useState('')
    const [emailHelperText, setEmailHelperText] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneHelperText, setPhoneHelperText] = useState('')
    const [message, setMessage] = useState('')
    const handleChange = event => {
        const {name, value} = event.target
        switch (name) {
            case 'name': {
                setName(value)
                if(value.length < 3) {
                    setNameHelperText('Username must be at least 3 characters long')
                } else {
                    setNameHelperText('')
                }
                break
            }
            case 'phone': {
                setPhone(value)
                const validPhone = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(value)
                if(validPhone) {
                    setPhoneHelperText('')
                } else {
                    setPhoneHelperText('Phone number must be valid')
                }
                break
            }
            case 'email': {
                setEmail(value)
                const validEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value)
                if(validEmail) {
                    setEmailHelperText('')
                } else {
                    setEmailHelperText('Email address must be valid')
                }
                break
            }
            case 'message': setMessage(value); break
            default: break;
        }
    }
    return (
        <Grid container className={classes.pageContainer} direction={matchSM ? 'column' : 'row'}>
            <Grid item direction='column' container justify='flex-start' md={3} className={classes.contactPart}>
                <Grid item container justify='center'>
                    <Grid item>
                        <Typography variant='h4' align='center' color='primary'>Contact Us</Typography>
                        <Typography color='primary' align='center' gutterBottom paragraph>We're waiting...</Typography>
                    </Grid>
                    <Grid item container justify='center'>
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
                <Grid item container justify='center'>
                    <form autoComplete='off' className={classes.form}>
                        <Grid container direction='column'>
                            <Grid item className={classes.marginBottom}>
                                <TextField helperText={nameHelperText} error={!!nameHelperText.length} value={name} onChange={handleChange} name='name' id='name-input' inputProps={{className: classes.inputColor}} fullWidth type='text' label='Name'/>
                            </Grid>
                            <Grid item className={classes.marginBottom}>
                                <TextField required helperText={phoneHelperText} error={!!phoneHelperText.length} value={phone} onChange={handleChange} name='phone' id='phone-input' inputProps={{className: classes.inputColor}} fullWidth label='Phone number'/>
                            </Grid>
                            <Grid item className={classes.marginBottom}>
                                <TextField required helperText={emailHelperText} error={!!emailHelperText} value={email} onChange={handleChange} name='email' id='email-input' inputProps={{className: classes.inputColor}} fullWidth type='email' label='Email'/>
                            </Grid>
                            <Grid item className={classes.marginBottom}>
                                <TextField required value={message} onChange={handleChange} name='message' id='message-textarea' inputProps={{className: classes.inputColor}} variant='outlined' fullWidth placeholder='Message' multiline rows={3} rowsMax={4}/>
                            </Grid>
                            <Grid item container justify='center'>
                                <Button type='submit' disabled={nameHelperText.length !== 0 || emailHelperText.length !== 0 || phoneHelperText.length !== 0} endIcon={<Icon>send</Icon>} className={classes.sendBtn} color='secondary' variant='contained'>Send Message</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid item md={9}>
                <ActionCall/>
            </Grid>
        </Grid>
    )
}

export default Contact