import React from "react";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Contact Us</h1>

      {/* Address and Map */}
      <div>
        <p style={{ marginBottom: "20px" }}>
          B4 العاشر من رمضان المنطقة الصناعية
          <br />
          المصنع رقم 125
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.96138106011534!2d31.70026280701529!3d30.303655739857703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457ff4bfccc75e9%3A0x3aa63169acff89d7!2z2YPZitin2YYg2KjYp9mDINmE2LXZhtin2LnYqSDYp9mE2YPYsdiq2YjZhiBLYXlhbiBQYWNrIENhcnRvbiBGYWN0b3J5!5e1!3m2!1sen!2seg!4v1702869140178!5m2!1sen!2seg"
          height="300"
          style={{ border: "0", width: "80vw" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PhoneIcon />}
        style={{ margin: "10px" }}
        onClick={() => (window.location = "tel:+201029384721")} // Replace with your phone number
      >
        Call Us
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        style={{ margin: "10px" }}
        onClick={() => window.open("https://wa.me/+201029384721", "_blank")} // Replace with your WhatsApp link
      >
        WhatsApp
      </Button>

      <Button
        variant="contained"
        color="primary"
        startIcon={<FacebookIcon />}
        style={{ margin: "10px" }}
        onClick={() =>
          window.open("https://www.facebook.com/kayan.pack", "_blank")
        } // Replace with your Facebook page link
      >
        Facebook
      </Button>
    </div>
  );
}

export default Contact;
