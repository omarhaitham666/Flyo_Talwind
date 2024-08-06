import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

function Testimonial() {
    const[testData,setTestData]=useState([
        {   id:1,
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus harum animi amet tenetur quibusdam optio assumenda quas facere sequi temporibus natus quam, ducimus quisquam adipisci iste excepturi modi quis",
            image:"profile-1.jpg",
            position:"Founder & CEO, Huddle",
            name:"Ahmed",
        },
        {   id:2,
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus harum animi amet tenetur quibusdam optio assumenda quas facere sequi temporibus natus quam, ducimus quisquam adipisci iste excepturi modi quis",
            image:"profile-2.jpg",
            position:"Founder & CEO, Huddle",
            name:"Mohammed",
        },
        {   id:3,
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus harum animi amet tenetur quibusdam optio assumenda quas facere sequi temporibus natus quam, ducimus quisquam adipisci iste excepturi modi quis",
            image:"profile-3.jpg",
            position:"Founder & CEO, Huddle",
            name:"Eman",
        },

    ])

  return (
    <section className="pb-[350px]">
        <div className="container relative">
            <div className="absolute left-[20px] top-[-35px]">
                <img src="./images/bg-quotes.png" alt="quote" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
                {testData.map((item)=>(
                    <TestimonialBox key={item.id} desc={item.desc} name={item.name} image={item.image} position={item.position} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonial;