import React from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import Jump from "react-reveal/Jump";
import { Button, Form } from "react-bootstrap";

const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1alzoo",
        "template_j00vszi",
        e.target,
        "user_QNUVH7QCqiH8X9g9EDOq1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact-me" className="contact-section mx-auto">
      <Jump>
        <h1 className="text-center py-5">Contact Me</h1>
      </Jump>

      <div className="w-50 mx-auto">
        <Form onSubmit={sendEmail}>
          <Form.Group className="my-2" controlId="name">
            <Form.Control type="text" placeholder="Name" name="name" required />
          </Form.Group>
          <Form.Group className="my-2" controlId="email">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter"
              required
            />
          </Form.Group>

          <Form.Group className="my-2" controlId="subject">
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="message">
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>
          <Button
            className="my-2 contact-button"
            variant="primary"
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactMe;
