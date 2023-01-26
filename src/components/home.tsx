import React from "react";
import Card from "./card";
import Navbar from "./navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Proyecto de Arquitectura de Software</h1>
      </div>
      <h2
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Arquitectura de Microservicios
      </h2>
      <h2
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Tecnologías Implementadas
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10px",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Card
          imagenUrl={
            "https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg"
          }
          redirect={"https://github.com/davidAlvarez24913/react-map-docker"}
          alt={"Github"}
        />
        <Card
          imagenUrl={
            "data:image/png;base64,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"
          }
          redirect={"https://www.docker.com/"}
          alt={"Docker"}
        />
        <Card
          imagenUrl={
            "https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png"
          }
          redirect={"https://firebase.google.com/docs?hl=es-419 "}
          alt={"Firebase"}
        />
      </div>
      <h2
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        Lenguajes Usados
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10px",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Card
          imagenUrl={
            "data:image/png;base64,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"
          }
          redirect={"https://www.typescriptlang.org/"}
          alt={"Typescript"}
        />
        <Card
          imagenUrl={
            "data:image/png;base64,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"
          }
          redirect={"https://www.python.org/"}
          alt={"Python"}
        />
      </div>
    </>
  );
}
