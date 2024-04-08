import { useState } from 'react';
import axios from 'axios';

import {Col, Container, Form, Row, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import TrainStatus from './trainStatus';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [trainNo, setTrainNo] = useState(0);
  const [status, setStatus] = useState({});

  const fetchStatus = async (e) => {
    e.preventDefault();
    if(trainNo === 0 || trainNo < 11110 || trainNo > 99999) {
      alert("Please enter a valid train number");
      return;
    }
    const data = {
    "ResponseCode": "200",
    "StartDate": "15-09-2018",
    "TrainNumber": "12565",
    "CurrentPosition": null,
    "CurrentStation": {
      "SerialNo": "0",
      "StationName": "Jagatbela",
      "StationCode": "JTB",
      "Distance": "-",
      "IsDeparted": "-",
      "Day": "0",
      "ScheduleArrival": "04:27PM",
      "ActualArrival": "04:41PM",
      "DelayInArrival": "14 M",
      "ScheduleDeparture": "04:27PM",
      "ActualDeparture": "04:41PM",
      "DelayInDeparture": "14 M"
    },
    "TrainRoute": [
      {
        "SerialNo": "0",
        "StationName": "Darbhanga",
        "StationCode": "DBG",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "Source",
        "ActualArrival": "Source",
        "DelayInArrival": "-",
        "ScheduleDeparture": "08:25AM",
        "ActualDeparture": "08:25AM",
        "DelayInDeparture": "00 M"
      },
      {
        "SerialNo": "1",
        "StationName": "Samastipur",
        "StationCode": "SPJ",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "09:15AM",
        "ActualArrival": "09:15AM",
        "DelayInArrival": "00 M",
        "ScheduleDeparture": "09:35AM",
        "ActualDeparture": "09:35AM",
        "DelayInDeparture": "00 M"
      },
      {
        "SerialNo": "2",
        "StationName": "Muzaffarpur",
        "StationCode": "MFP",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "10:25AM",
        "ActualArrival": "10:50AM",
        "DelayInArrival": "25 M",
        "ScheduleDeparture": "10:30AM",
        "ActualDeparture": "10:55AM",
        "DelayInDeparture": "25 M"
      },
      {
        "SerialNo": "3",
        "StationName": "Hajipur",
        "StationCode": "HJP",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "11:30AM",
        "ActualArrival": "11:50AM",
        "DelayInArrival": "20 M",
        "ScheduleDeparture": "11:33AM",
        "ActualDeparture": "11:53AM",
        "DelayInDeparture": "20 M"
      },
      {
        "SerialNo": "4",
        "StationName": "Sonpur",
        "StationCode": "SEE",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "11:43AM",
        "ActualArrival": "12:02PM",
        "DelayInArrival": "19 M",
        "ScheduleDeparture": "11:45AM",
        "ActualDeparture": "12:02PM",
        "DelayInDeparture": "17 M"
      },
      {
        "SerialNo": "5",
        "StationName": "Chhapra",
        "StationCode": "CPR",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "12:45PM",
        "ActualArrival": "01:25PM",
        "DelayInArrival": "40 M",
        "ScheduleDeparture": "12:50PM",
        "ActualDeparture": "01:30PM",
        "DelayInDeparture": "40 M"
      },
      {
        "SerialNo": "6",
        "StationName": "Siwan",
        "StationCode": "SV",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "01:40PM",
        "ActualArrival": "02:22PM",
        "DelayInArrival": "42 M",
        "ScheduleDeparture": "01:45PM",
        "ActualDeparture": "02:27PM",
        "DelayInDeparture": "42 M"
      },
      {
        "SerialNo": "7",
        "StationName": "Gorakhpur",
        "StationCode": "GKP",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "03:50PM",
        "ActualArrival": "04:15PM",
        "DelayInArrival": "25 M",
        "ScheduleDeparture": "04:05PM",
        "ActualDeparture": "04:24PM",
        "DelayInDeparture": "19 M"
      },
      {
        "SerialNo": "8",
        "StationName": "Lucknow",
        "StationCode": "LKO",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "09:00PM",
        "ActualArrival": "09:00PM",
        "DelayInArrival": "00 M",
        "ScheduleDeparture": "09:10PM",
        "ActualDeparture": "09:10PM",
        "DelayInDeparture": "00 M"
      },
      {
        "SerialNo": "9",
        "StationName": "Kanpur Central",
        "StationCode": "CNB",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "10:48PM",
        "ActualArrival": "10:48PM",
        "DelayInArrival": "00 M",
        "ScheduleDeparture": "10:58PM",
        "ActualDeparture": "10:58PM",
        "DelayInDeparture": "00 M"
      },
      {
        "SerialNo": "10",
        "StationName": "New Delhi",
        "StationCode": "NDLS",
        "Distance": "-",
        "IsDeparted": "-",
        "Day": "0",
        "ScheduleArrival": "05:30AM",
        "ActualArrival": "05:30AM",
        "DelayInArrival": "00 M",
        "ScheduleDeparture": "Destination",
        "ActualDeparture": "Destination",
        "DelayInDeparture": "-"
      }
    ],
    "Message": "SUCCESS"
  }

        console.log( "data: " ,data.CurrentStation);
        setStatus(data.CurrentStation);
        setShowStatus(true);

    console.log(status);
  };

  return (
    <div className="App" style={{backgroundColor: darkMode? '#464648' : '#C9C9C9'}}>
      <Container fluid className="p-0 w-100 h-100">
      <Row className='my-2 w-100 bg-transparent rounded-5'>
        <Button onClick={() => setDarkMode(!darkMode)} className='my-2 w-25 bg-dark text-light rounded-5 float-end'>{darkMode? 'Light Mode' : 'Dark Mode'}</Button>
      </Row>
      <Container fluid className="p-0 w-100 h-75 rounded-5 border-0 appContainer" style={{color: darkMode? 'white' : 'black'}}>
        <Row className="justify-content-md-center h-25 align-items-center mx-auto w-100 bg-transparent border-bottom">
          <Col className="text-center w-75">
            <h2>Rail Info</h2>
          </Col>
          <Col className="text-end">
            <h4>Login</h4>
          </Col>
          <Col className="text-start">
            <h4>Register</h4>
          </Col>
        </Row>
        <Row>
        {showStatus && <TrainStatus status={status}/>}
        </Row>
        <Row className="justify-content-md-center h-75 align-items-center mx-auto w-100 bg-transparent">
          <Col className="text-left p-5 w-50">
            <Form>
              <Form.Group className="mb-3" controlId="formTrainNo">
                <Form.Label>Enter Train No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Train No." value={trainNo} onChange={e => setTrainNo(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="rememberQuery">
                <Form.Check type="checkbox" checked label="Remember This Query" />
              </Form.Group>
              <Button variant="primary" className="w-25 mx-2 bg-dark"> schedule </Button>
              <Button variant="primary" className="w-25 mx-2 bg-dark" onClick={e => fetchStatus(e)}> status </Button>
              {showStatus && <Button variant="primary" className="w-25 mx-2 bg-dark float-end" onClick={() => setShowStatus(false)}> close window </Button>}
            </Form>
          </Col>
          <Col className="text-center w-50 border-left">
            <Form className='p-5 w-100 h-100 d-flex flex-column justify-content-center bg-transparent'>
              <Form.Group className="mb-3" controlId="formTrainNo">
                <Form.Label>Enter Station Code/Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Train No." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="rememberQuery">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Get Live Trains
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center w-100 bg-transparent m-5 footer text-black">© 2022 Copyright: Parakh Srivastava</p>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
  )
}

export default App