import React from "react";

interface Props {
  imagenUrl: string;
  redirect: string;
  alt: string;
}
export default function Card(props: Props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <a href={props.redirect}>
          <img src={props.imagenUrl} className="card-img-top" alt={props.alt} />
        </a>
      </div>
    </>
  );
}
