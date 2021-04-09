import React from 'react'
import { AppBar, Toolbar, IconButtom, Badge, MenuItem, Menu, Typography, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import useStyles from './styles'
import logo from '../../assets/commerce.png'


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography>
                        <img src={logo} alt='commerce.js' height='20px' className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="show-cart-items" color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
