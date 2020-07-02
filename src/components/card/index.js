import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';  
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

//Components
import './index.style.scss'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
    header: {
        position: 'absolute',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '3px'
    },
    media: {
        height: 500,
        width: 450
      },
    actions: {
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    content: {
        display: 'flex',
        flexDirection: "row"
    },
    typography: {
        color: 'white',
        marginTop: '9px',
        fontSize: '25px'
    },
    icons: {
        color: 'white'
    }
});

export default function CardModal({ onClose, open, data, img }) {
    const classes = useStyles();
    const handleClose = () => {
    onClose();
  };

//   console.log(data.img)

  return (
    <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open} 
        style={{
            backgroundImage: `url(${img ? img[0] : ""})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}>
             <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia
                    className={classes.media}
                    image={img ? img[1] : ""}
                    title="Contemplative Reptile"
                    />
                    <CardContent className='text-content'>
                    <Typography gutterBottom variant="h5" component="h4" className="text-card">
                        {data ? data.name : ""}
                    </Typography>        
                    <Typography variant="body2" component="p" className="text-card">
                        {`Model: ${data ? data.model : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Manufactur: ${data ? data.manufacturer: ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Crew: ${data ? data.crew : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Length: ${data ? data.length : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Passengers ${data ? data.passengers : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`MGLT: ${data ? data['MGLT'] : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Starship Class: ${data ? data.starship_class : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Pilots ${data ? data.pilots.length : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Created at: ${data ? data.created : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Films: ${data ? data.films.length : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Consumables: ${data ? data.consumables : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Cargo Capacity ${data ? data.cargo_capacity : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Max Atmosphering Speed: ${data ? data.max_atmosphering_speed : ""}`}
                    </Typography>
                    <Typography variant="body2" component="p" className="text-card">
                        {`Costo: ${data ? data.cost_in_credits : ""}`}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    </Dialog>
  );
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

