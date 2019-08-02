import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#313131',
    color: 'white'
  },
  bottomborder: {
    borderBottom: '1px solid white',
  },
  dev: {
    fontSize: 25,
    color: 'lightgray',
    marginTop: 12,
  },
  body: {
    marginTop: 12,
    color: 'lightgray'
  },
  stackTitle: {
    fontSize: 20,
    color: 'white'
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder}variant="h5" component="h2">
         Devon Owen
        </Typography>
        <Typography className={classes.dev} color="textSecondary" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography className={classes.body} color="textSecondary" gutterBottom>
          I am a web developer with an absolute passion for all things technology.
        </Typography>
        <Typography className={classes.stackTitle} color="textSecondary" gutterBottom>
          Favorite Stack
        </Typography>
        <ul>
            <li>Framework: react</li>
            <li>JSX</li>
            <li>BackEnd: Node</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>DataBase: MongoDB</li>
        </ul>
      </CardContent>
    </Card>
  );
}