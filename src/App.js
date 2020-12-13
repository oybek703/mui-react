import React, {useState} from 'react'
import './App.css'
import {
    Button,
    ButtonGroup,
    Container,
    Grid,
    Checkbox,
    FormControlLabel,
    TextField,
    makeStyles,
    createMuiTheme,
    Typography,
    Paper,
    AppBar, Toolbar, IconButton
} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from "@material-ui/icons/Edit"
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import {ThemeProvider} from "@material-ui/core/styles";
import {teal} from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        color: 'gray',
        padding: '5px 10px'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[500]
        }
    }
})

const App = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(true)
    return (
        <ThemeProvider theme={theme}>
                <AppBar position='static'>
                    <Container>
                        <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
                           <IconButton edge='start'>
                               <MenuIcon/>
                           </IconButton>
                            <Typography align='right' variant='h6'>MUI Basics</Typography>
                            <Button  variant='outlined'>Login</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            <Container style={{background: 'grey', color: 'white', minHeight: '600px'}}>
                <Grid container alignItems='center' spacing={2}>
                   <Grid item sm={2}>
                       <h2>Buttons</h2>
                       <Button startIcon={<SaveIcon/>} variant='contained' color='primary' size='large'>
                           Save
                       </Button>
                   </Grid>
                   <Grid item sm={4}>
                       <h2>Button Groups</h2>
                       <ButtonGroup>
                           <Button startIcon={<EditIcon/>} variant='contained' color='default'>Edit</Button>
                           <Button startIcon={<DeleteRoundedIcon/>} variant='contained' color='secondary'>Delete</Button>
                       </ButtonGroup>
                   </Grid>
                   <Grid item sm={3}>
                       <h2>Checkboxes</h2>
                       <FormControlLabel
                           control={
                               <Checkbox
                                   checked={checked}
                                   color='secondary'
                                   onChange={e => setChecked(e.target.checked)}
                                   inputProps={{"aria-label": 'checkbox input'}}
                           />}
                           label='Accept terms'
                       />
                   </Grid>
                   <Grid item sm={3}>
                       <Typography variant='h5' color='inherit'>Inputs</Typography>
                       <TextField
                           label='Email address'
                           variant='filled'
                           type='email'
                           color='primary'
                           placeholder='user@gmail.com'/>
                   </Grid>
               </Grid>
                <Grid container spacing={2}>
                <Grid item sm={2}>
                    <h2>Customized Button</h2>
                    <Button variant='contained' className={classes.root}>Custom Button</Button>
                </Grid>
                <Grid item sm={6}>
                    <h2>Grid System</h2>
                    <Grid container spacing={2}>
                        <Grid item sm={3}>
                            <Paper elevation={4} style={{height: 75, width: 50}}/>
                        </Grid>
                        <Grid item sm={3}>
                            <Paper elevation={4} style={{height: 75, width: 50}}/>
                        </Grid>
                        <Grid item sm={3}>
                        <Paper elevation={4} style={{height: 75, width: 50}}/>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
       </Container>
        </ThemeProvider>
    )
}
export default App
