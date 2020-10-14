import React, {useState} from 'react'

//components
import Footer from '../../components/Footer'

//services
import {addUserMessageService} from '../../services'

//SCSS & reactstrap
import styles from './ContactView.module.scss'
import { Navbar, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Form, Input } from 'antd';
const { TextArea } = Input;

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

      const onFinish = values => {
        console.log('Success:', values);
      };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await addUserMessageService(formData);
        console.log(formData)
        console.log(formData, response);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
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


    <Form className={styles.formContainer}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleFormSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item className={styles.item1}
        placeholder="Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your Name !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.item2}
        placeholder="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.item3}
        placeholder="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your E-mail !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.item4}
        placeholder="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className={styles.item5}>
      <TextArea rows={8} />
      </Form.Item>

      <Form.Item>
        <button htmlType="submit"> Enviar </button>
      </Form.Item>
    </Form>

    <div className={styles.fourthContainer}>
    <div className={styles.textWrapper}>
    <h4> Comming to visit us?</h4>
    <div className={styles.navWrapper}>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem> Here are some of our favorite places aroud town to </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            A quiet place to read a book
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem > A place to dance all night </DropdownItem>
            <DropdownItem > A place to take breakfast </DropdownItem>
            <DropdownItem > A place to take dinner </DropdownItem>
            <DropdownItem > A good library </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
    </div>
    </div>

        <div className={ styles.cardsContainer }>
      <div className={styles.firstColumn}>
      <p> Mexico City :</p>

      <Card className={styles.cardWrapper1} >
        <CardBody>
        <CardTitle>
          <div className={styles.titleWrapper1} >
          <div className={styles.hamburguer}> <img src='/hamburger-solid.svg' /> </div> <div>Name of Place </div>
          </div>
        </CardTitle>
          <CardSubtitle>123 Main St.</CardSubtitle>
          <CardText>amazing burgers, <br/> impropteau jazz trios</CardText>
        </CardBody>
      </Card>

      <Card className={styles.cardWrapper1} >
        <CardBody>
        <CardTitle>
          <div className={styles.titleWrapper1} >
          <div className={styles.hamburguer}> <img src='/hamburger-solid.svg' /> </div> 
          <div>Name of Place </div>
          </div>
        </CardTitle>
          <CardSubtitle>123 Main St.</CardSubtitle>
          <CardText>amazing burgers, <br/> impropteau jazz trios</CardText>
        </CardBody>
      </Card>

      </div>
      <div className={styles.secondColumn}>
            <p> Washington, DC :</p>
        <Card className={styles.cardWrapper2} >
        <CardBody>
          <CardTitle>
            <div className={styles.titleWrapper2} >
              <div className={styles.hamburguer}> <img src='/hamburger-solid.svg' /> </div>
              <div>Name of Place </div>
            </div>
          </CardTitle>
          <CardSubtitle>123 Main St.</CardSubtitle>
          <CardText>amazing burgers, <br/> impropteau jazz trios</CardText>
        </CardBody>
      </Card>

      <Card className={styles.cardWrapper2} >
        <CardBody>
        <CardTitle>
          <div className={styles.titleWrapper2} >
            <div className={styles.hamburguer}> <img src='/hamburger-solid.svg' /> </div>
            <div>Name of Place </div>
          </div>
        </CardTitle>
          
          <CardSubtitle>123 Main St.</CardSubtitle>
          <CardText>amazing burgers, <br/> impropteau jazz trios</CardText>
        </CardBody>
      </Card>
      </div>
      </div>

    </div>
    <Footer/>
    </>
    )
}