import React from 'react'
import Day from './Day'
import Temprature from './Temprature'
import MinTemp from './MinTemp'
import MaxTemp from './MaxTemp'
import FeelsLike from './FeelsLike'
import WindSpeed from './WindSpeed'
import Sunrise from './Sunrise'
import Sunset from './Sunset'
import { Container, Row, Col } from 'react-bootstrap';
import SwtchTemp from '../components/SwitchTemp'

function Body(props) {
    const { weather, tempMeasure } = props;
    const city = weather != null ? weather.data.name : '--'
    const country = weather != null ? weather.data.sys.country : '--'
    const state = weather != null ? weather.data.weather[0].main : '--'
    const humidity = weather != null ? weather.data.main.humidity : '--'
    const clouds = weather != null ? weather.data.clouds.all : '--'

    return (

        <Container className='container'>
            <SwtchTemp weather={weather} tempMeasure={props.tempMeasure} toggleTemp={props.toggleTemp} />
            <Row className="justify-content-md-center">
                <Col className='location'>
                    <span className='city'>{city}</span>
                    <span className='country'>{', ' + country}</span>
                </Col>
            </Row>

            <Row className="justify-content-md-center state">
                <Col>{state}</Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col><Temprature weather={weather} tempMeasure={tempMeasure} /></Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col><Day /></Col>
                <Col>
                    <MinTemp weather={weather} tempMeasure={tempMeasure} />
                    <MaxTemp weather={weather} tempMeasure={tempMeasure} />
                </Col>
            </Row>

            <hr></hr>
            <Row className="justify-content-md-center">
                <Col><Sunrise weather={weather} /></Col>
                <Col><Sunset weather={weather} /></Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-md-center">
                <Col><FeelsLike weather={weather} tempMeasure={tempMeasure} /></Col>
                <Col><WindSpeed weather={weather} tempMeasure={tempMeasure} /></Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-md-center">
                <Col>
                    <span className='humidity'>
                        <p>Humidity</p>
                        <p>{humidity}%</p>
                    </span>
                </Col>
                <Col>
                    <span className='clouds'>
                        <p>Clouds</p>
                        <p>{clouds}%</p>
                    </span>
                </Col>
            </Row>
        </Container>
    )




}

export default Body;