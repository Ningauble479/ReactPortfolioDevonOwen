import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#313131',
    color: 'white',
    minHeight: 150,
    position: 'absolute',
    top: '50px',
    left: '600px',
    width: '400px',
  },
  bottomborder: {
    borderBottom: '1px solid white',
  },
  body: {
    marginTop: 12,
    color: 'lightgray'
  },
});

export default function SimpleCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder} variant="h4" component="h3">
        Program Social
        </Typography>
        <Typography className={classes.body} variant="h7" component="h3">
        Program social is a very simple social app that i made with only jquery and no framework.
        I plan on remaking it in react and updating it a bit so that i have a good framework down for social apps.
        Its very basic unfinished and not very secure. But i plan on fixing all of that.
        </Typography>
      </CardContent>
    </Card>
  );
}