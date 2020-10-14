
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