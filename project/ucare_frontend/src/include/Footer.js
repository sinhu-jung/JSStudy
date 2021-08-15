import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    foot: { 
        paddingTop: '6px',
        backgroundColor: '#F2F2F2',
        height: '30px'
    }
}));

export default function Footer(){
    const classes = useStyles();
    return(
        <Box >
            <Typography variant="body2" color="initial" align="center" className={classes.foot}>
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Build Together
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}