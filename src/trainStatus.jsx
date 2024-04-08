// import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

// import axios from "axios";

const TrainStatus = (status) => {
    console.log("status: ", status);
    // const [coords, setCoords] = useState([]);
    // const [address, setAddress] = useState('');

    const delayed = (status.status.current_station_name? true : false);

    // const fetchCoords = async () => {
    //     await axios.get(`https://geocode.maps.co/search?q=${status.status.current_station_name}&api_key=66143b9760eeb387164156splaae5ef`)
    //     .then((response) => {
    //         setCoords([(response.data[0]).lat , (response.data[0]).lng]);
    //         setAddress((response.data[0]).display_name);
    //         console.log(response.data);
    //         return response.data;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    // useEffect(() => {
    //     fetchCoords();
    // },[]);

    return (
        <div className="trainStatusContainer">
            <Container className="w-100 h-100 bg-transparent my-2 rounded-5 border-0">
                <Col className="w-100">
                    <Card className="w-100 h-100 bg-transparent border-0">
                        <Card.Body>
                            <Container className="w-100 h-100">
                            <Row className="w-100">
                            <Card.Title className="text-center w-100 text-dark fw-bold">Your Train : {status.status.train_name} is {delayed? ("delayed by " + status.status.current_location_info[1]).hint : "on time"}</Card.Title>
                            </Row>
                            <Row className="w-100">
                                <Card.Text className="" >Current Status : {(status.status.current_location_info[1]).readable_message} & {(status.status.current_location_info[0]).readable_message}</Card.Text>
                            </Row>
                            <Row className="w-100">
                            {/* <Col className="w-50">
                            <Card.Text className="text-center w-100 text-dark">Expected arrival : {status.status.ScheduleArrival}</Card.Text>
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ActualArrival}</Card.Text>
                            </Col>
                            <Col className="w-50">
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ScheduleDeparture}</Card.Text>
                            <Card.Text className="text-center w-100 text-dark">Currently at station : {status.status.ActualDeparture}</Card.Text>
                            </Col> */}
                            {/* <Row className="w-100">
                                <Card.Text className="text-center w-100 text-dark">Stn Lat : {coords[0]} & Stn Lng : {coords[1]} && considered address : {address}</Card.Text>
                            </Row> */}
                            </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    )
};

export default TrainStatus;