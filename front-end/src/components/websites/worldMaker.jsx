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
    top: '350px',
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

export default function SimpleCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder} variant="h4" component="h3">
        World Maker
        </Typography>
        <Typography className={classes.body} variant="h7" component="h3">
        World maker is an app im working on that has Dungeons And Dragons in mind.
        Its designed to allow you to easily create a skeleton for a new world with completely random elements every time.
        It will start at a world level creating cities then withing the cities buildings and within the buildings people and so on.
        </Typography>
      </CardContent>
    </Card>
  );
}