import React, { useState, useEffect } from 'react'

import { useSelector ,useDispatch } from 'react-redux'

import moment from 'moment'

import imgData from '../../utils/imagesStarships.json'

//Componentes

import CardModal from '../card/index'

//Estilos

import './index.style.scss'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    //   backgroundImage: `url(${Background})`
    },
  }
});


function Row(props) {

  //States

  const { data, index } = props;
  const [open, setOpen] = useState(false);

  const [ openDialog, setOpenDialog ] = useState(false);

  //Methos

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const classes = useRowStyles();
  
  //Variales

    const date = moment(data.created);
    let dateFormat = date.utc().format('DD-MM-YYYY')

    const regex = /\/starships\/(0*[1-9][0-9]*)/

    const resRegex = data.url.match(regex)
    console.log(typeof data.created)
    console.log(dateFormat)
    console.log("regex", resRegex[1])
    console.log("imgData", imgData.imgStarships[index][resRegex[1]][0])
    // console.log(res.resRegex[1] == imgData.imgStarships[0].id ? ) 

  return (
    <React.Fragment>
      <TableRow className={classes.root} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row">
          {data.name}
        </TableCell>
        <TableCell align="right">{data.model}</TableCell>
        <TableCell align="right">{data.max_atmosphering_speed}</TableCell>
        <TableCell align="right">{data.cost_in_credits}</TableCell>
      </TableRow>
      <TableRow  >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow >
                  <TableCell>
                    <div className="table-img">
                      <img src={imgData.imgStarships[index][resRegex[1]][0]} /> 
                    </div>
                  </TableCell>
                    <TableCell >Manufactura</TableCell> 
                    <TableCell>Capacidad</TableCell>
                    <TableCell align="right">Consumibles</TableCell>
                    <TableCell align="right">Fecha de creación</TableCell>
                    <TableCell>
                      <Button className="table-button-details" variant="outlined"  onClick={handleOpenDialog}>
                        Detalles
                      </Button>
                      <CardModal 
                        data={data} 
                        img={imgData.imgStarships[index][resRegex[1]]} 
                        open={openDialog}
                        onClose={handleCloseDialog}/>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={data.name} >
                      <TableCell></TableCell>
                      <TableCell component="th" scope="row">
                        {data.manufacturer}
                      </TableCell>
                      <TableCell>{data.cargo_capacity}</TableCell>
                      <TableCell align="right">{data.consumables}</TableCell>
                      <TableCell align="right">
                        {dateFormat}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {

    
    const starshipDataStore = useSelector(state => state);
    
    console.log(starshipDataStore.starships.results)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Starship</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Vel Max en Atmósfera&nbsp;(km/h)</TableCell>
            <TableCell align="right">Costo&nbsp;(c)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starshipDataStore.starships.results ? starshipDataStore.starships.results.map((starship, idx) => (
            <Row key={starship.name} data={starship} index={idx}/>
          )) : "Loading..."}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
