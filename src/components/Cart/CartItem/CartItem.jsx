import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({item}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia className={classes.media}/>
        </Card>
    )
}

export default CartItem
