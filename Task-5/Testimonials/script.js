//Testimonial Data
const testimonials = [
    {
      name: "A. P. J. Abdul Kalam",
      job: "Aerospace Scientist",
      image: "images/apj1.jpg",
      testimonial:"“Determination is the power that sees us through all our frustrations and obstacles. It helps us in building our willpower which is the very basis of success.”",
    },
    {
      name: "A. P. J. Abdul Kalam",
      job: "Aerospace Scientist",
      image: "images/apj2.jpg",
      testimonial:
        "“If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved. ”",
    },
    {
      name: "Albert Einstein",
      job: "Theoretical physicist",
      image: "images/einstein1.jpg",
      testimonial:
        "“It would be possible to describe everything scientifically, but it would make no sense; it would be without meaning, as if you described a Beethoven symphony as a variation of wave pressure. ”",
    },
    {
      name: "Steve Jobs",
      job: "Business Magnate and Inventor",
      image: "images/steve1.jpg",
      testimonial:
        "“People think focus means saying yes to the thing you've got to focus on. It means saying no to the hundred other good ideas that there are. You have to pick carefully. ”",
    },
    {
      name: "Swami Vivekananda",
      job: "Indian monastic and philosopher",
      image: "images/viveka1.jpg",
      testimonial:
      "“The only way to do good work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it. ”",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;