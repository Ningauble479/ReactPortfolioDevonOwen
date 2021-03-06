import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#313131',
    color: 'white',
    minHeight: 378
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

export default function SimpleCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder} variant="h4" component="h3">
         My Favorite Companies
        </Typography>
        <Typography className={classes.companylist} variant="h6" component="h3">
         <ul>
             <li>blizzard</li>
             <li>NASA</li>
             <li>Space-x</li>
             <li>Tesla</li>
             <li>IBM</li>

         </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}