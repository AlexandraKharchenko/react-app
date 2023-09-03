import React from "react";

const Footer = (props) =>  <div className="modal-footer" onClick={props.toggle}>{props.children}</div>;

export default Footer;