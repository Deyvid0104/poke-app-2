// /app/404.jsx
import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p> */}
      <Image src="/404.png" alt="404" width={50} height={50} />
    </div>
  );
};

export default Custom404;
