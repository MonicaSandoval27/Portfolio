import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  <div className="py-20" id="projects">
    <h1 className="heading">
      Kind words from{" "}
      <span className="text-purple"> employers and coworkers</span>
    </h1>
    <div className="flex flex-col items-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  </div>;
};

export default Clients;
