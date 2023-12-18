import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material"; // Import Divider from MUI

function AboutUs() {
  return (
    <div style={{ padding: "20px", fontSize: "18px", textAlign: "center" }}>
      <h1>About Us</h1>
      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Welcome to KayanPack
      </Divider>
      <p>
        At KayanPack, located in the heart of the industrious 10th of Ramadan
        City, we specialize in creating high-quality, sustainable corrugated
        cardboard solutions. With a rich history deeply rooted in Egypt’s
        manufacturing excellence, we proudly serve a diverse range of
        industries, providing them with innovative packaging solutions that are
        both environmentally friendly and cost-effective.{" "}
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Our Journey
      </Divider>
      <p>
        Founded in 2012, KayanPack began as a modest factory with a vision to
        revolutionize the packaging industry in Egypt. Over the years, we have
        grown in size and scope, embracing new technologies and innovative
        processes to stay at the forefront of the corrugated cardboard
        manufacturing sector. Today, KayanPack stands as a testimony to Egyptian
        craftsmanship and industrial prowess, committed to delivering excellence
        in every sheet of cardboard we produce.
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Our Facility
      </Divider>
      <p>
        Strategically located in the 10th of Ramadan City, our state-of-the-art
        facility is equipped with advanced machinery and technology. This allows
        us to produce a wide range of corrugated cardboard products, tailored to
        meet the specific needs of our clients. From single-wall sheets to
        complex multi-layered designs, our production capabilities are as varied
        as the industries we serve.
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Quality and Sustainability
      </Divider>
      <p>
        Quality and sustainability are at the core of our operations. At
        KayanPack, we understand the importance of eco-friendly practices. We
        are dedicated to utilizing recycled materials and sustainable methods
        throughout our production processes, ensuring that our products are not
        only strong and reliable but also kind to the environment.
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Our Team
      </Divider>
      <p>
        Our greatest asset is our team of skilled professionals who bring their
        passion and expertise to every aspect of our operations. From engineers
        and designers to customer service and logistics experts, our employees
        are dedicated to ensuring the highest level of quality and service for
        our clients.
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Our Vision
      </Divider>
      <p>
        Looking ahead, KayanPack is committed to continuous improvement and
        innovation. We are constantly exploring new technologies and
        methodologies to enhance our products and services. Our goal is to
        remain a leading corrugated cardboard manufacturer in Egypt and to
        expand our reach to serve clients globally.
      </p>

      <Divider
        textAlign="center"
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Connect with Us
      </Divider>
      <p>
        We invite you to learn more about our products and services. For
        inquiries, collaborations, or a tour of our facility, please{" "}
        <Link to="/contact">contact us</Link>.
      </p>

      <h2 style={{ marginTop: "40px" }}>
        Experience the excellence of Egyptian manufacturing with KayanPack,
        where quality meets sustainability.
      </h2>
    </div>
  );
}

export default AboutUs;
