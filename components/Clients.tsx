// Clients.tsx

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  // Función para resaltar "Tecnológico de Monterrey"
  const highlightText = (text: string, word: string) => {
    const regex = new RegExp(`(${word})`, "gi");
    return text.replace(regex, '<span class="text-blue-500">$1</span>');
  };

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        More
        <span className="text-purple"> about me</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            // Mapeamos los testimonios y usamos dangerouslySetInnerHTML para renderizar el HTML
            items={testimonials.map((testimonial) => ({
              ...testimonial,
              // Usamos dangerouslySetInnerHTML para permitir que el HTML se renderice
              quote: (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      testimonial.quote,
                      "Tecnológico de Monterrey"
                    ),
                  }}
                />
              ),
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
