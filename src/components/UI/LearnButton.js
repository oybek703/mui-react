import React from 'react'
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import {Button, makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton
    }
}))

const LearnButton = ({extraClasses, link}) => {
    const classes = useStyles()
    return <Button variant='outlined' component={Link} to={link} className={`${classes.learnButton} ${extraClasses}`}>Learn More<ArrowRightAltIcon fontSize='small'/></Button>
}

export default LearnButton