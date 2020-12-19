import React from 'react'
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import {Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton
    }
}))

const LearnButton = ({extraClasses}) => {
    const classes = useStyles()
    return <Button variant='outlined' className={`${classes.learnButton} ${extraClasses}`}>Learn More<ArrowRightAltIcon fontSize='small'/></Button>
}

export default LearnButton