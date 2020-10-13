import React, {useState} from 'react'

//components
import Footer from '../../components/Footer'

//services
import {addUserMessageService} from '../../services'

//SCSS & reactstrap
import styles from './ContactView.module.scss'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ContactView(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country_id: "",
        message: "",
      });
    
      const handleChange = ({ name, value }) => {
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData)
      };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await addUserMessageService(formData);
        console.log(formData)
        console.log(formData, response);
      };

    return (
        <>
        <div className={styles.firstContainer}>
            <div className={styles.mexicoImage}>
                <h2>Mexico City</h2>
                <div className={styles.textContainer}>
                    <h4>Anatole France 311</h4>
                    <p> Polanco, Miguel Hidalgo 11560</p>
                    <p> México D.F. </p>
                    <h6>50 22 09 00</h6>
                </div>
            </div>    
            <div className={styles.washingtonImage} >
            <h2>Washington D.C.</h2>
                <div className={styles.textContainer}>
                    <h4>1200 18TH STREET, NW</h4>
                    <p> Suite 700 </p>
                    <p> Washington DC 20036 USA </p>
                    <h6>50 22 09 00</h6>
                </div>
            </div>
        </div>
        <div className={styles.secondContainer} >
        <p> Ingenia is located in two major business & government hubs in the Americas </p>
        <h2> Contact us</h2>
        <p>Send us an e-mail and we dill get back to you: </p>
        </div>

    <Form className={styles.formContainer} onSubmit={handleFormSubmit}>
      <FormGroup className={styles.item1} >
        <Input callback={handleChange} name="name" id="name" placeholder="Name" />
      </FormGroup>
      <FormGroup className={styles.item2} >
        <Input callback={handleChange} name="lastName" id="lastName" placeholder="Last Name" />
      </FormGroup>
      <FormGroup className={styles.item3}>
        <Input callback={handleChange} type="email" name="email" id="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup className={styles.item4}>
        <Input callback={handleChange} name="phone" id="phone" placeholder="Phone" />
      </FormGroup>
      
      <FormGroup className={styles.item5}>
        <Label for="message">Tell us about your challenge or opportunity</Label>
        <Input callback={handleChange} type="textarea" name="message" id="message" />
      </FormGroup>
    <div className={styles.item6} >
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
         No soy un robot
        </Label>
      </FormGroup>
    </div>
      <div className={styles.item7} >
        <div><button type="submit" >Enviar</button></div>
      </div>
    </Form>

    <div className={styles.fourthContainer}>
        <h4> Comming to visit us?</h4>
        <p> Here are some of our favorite places aroud town to </p>
        <select> </select>
        <Container className={ styles.cardsContainer }>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
        </Container>
    </div>
    <Footer/>
    </>
    )
}