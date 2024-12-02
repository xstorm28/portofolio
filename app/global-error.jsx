"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <Error statusCode={500} />  {/* Puedes personalizar el código de estado si es necesario */}
      </body>
    </html>
  );
}