import React from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FooterStyle } from "./Footer.styled";
type Props = {};

const Footer = (props: any) => {
  return (
    <FooterStyle>
    <div
      className="footer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: 30,
        margin: 50,
        fontSize: 25,
        position: "relative",
        zIndex: 2,
      }}
    >
      Say Hi!👋 :
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          listStyle: "none",
        }}
      >
        <a target="_blank" href="https://twitter.com/mayowafalomo1">
          <li>{<RxTwitterLogo style={{ cursor: "pointer" }} />} </li>
        </a>
        <a href="https://github.com/MayorFalomo" target="_blank">
          <li>{<BsGithub style={{ cursor: "pointer" }} />} </li>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=08178152952"
          target="_blank"
        >
          <li>{<BsWhatsapp style={{ cursor: "pointer" }} />} </li>
        </a>
      </ul>
      </div>
      </FooterStyle>
  );
};

export default Footer;
