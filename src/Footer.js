import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";

  
const Footer = () => {
  return (
<footer className="footer" position= "static">
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        The souled Store: HOMEGROWN INDIAN BRAND
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Tshirts</FooterLink>
            <FooterLink href="#">Shorts</FooterLink>
            <FooterLink href="#">Vests</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Tanks&Tops</FooterLink>
            <FooterLink href="#">Trousers</FooterLink>
            <FooterLink href="#">Boxers</FooterLink>
            <FooterLink href="#">Polos</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"><FontAwesomeIcon icon={faLocationArrow} />New delhi</FooterLink>
            <FooterLink href="#">Hyderabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faFacebook} />
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faInstagram} />
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faTwitter} />
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              
            </FooterLink>
            <FooterLink href="#">
            <FontAwesomeIcon icon={faYoutube} />
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    </footer>
  );
};
export default Footer;