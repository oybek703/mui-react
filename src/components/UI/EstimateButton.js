import React from 'react'
import {Link} from "react-router-dom"
import {Button, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    estimate: {
        ...theme.typography.estimate
    }
}))

const EstimateButton = ({extraClasses}) => {
    const classes = useStyles()
    return <Button variant='contained' color='secondary' component={Link} to='/estimate'
                   className={`${classes.estimate} ${extraClasses}`}>
        Free Estimate
    </Button>
}

export default EstimateButton