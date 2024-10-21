// Testimonials component
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Themezy made my wedding event stress-free and absolutely magical!",
    },
    {
      name: "Jane Smith",
      feedback: "The variety of themes is incredible! I found exactly what I was looking for.",
    },
  ];

  return (
    <div className="container my-5">
      <h2>What Our Clients Say</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6">
            <div className="testimonial p-4 border">
              <p className="lead">"{testimonial.feedback}"</p>
              <p className="text-right">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
