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
    left: '50px',
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

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder} variant="h4" component="h3">
         Reptile Island
        </Typography>
        <Typography className={classes.body} variant="h7" component="h3">
        Reptile Island is one of my largest projects.
        Its a family owned company that i made a website for to practice my programming skills.
        I ended up putting a very large amount of work into it and making a full eccommerce website out of it.
        It uses a MERN stack.
        </Typography>
      </CardContent>
    </Card>
  );
}