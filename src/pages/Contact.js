import React from "react";
import { RiHomeHeartLine } from "react-icons/ri";
import { AiOutlinePhone, AiOutlineFacebook } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsLine } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact-page">
      <div>
        <img
          className="company-pic"
          src={
            "https://res.cloudinary.com/dup2jwtit/image/upload/v1645980912/ecotrade-group-thailand-drone_mcfqiq.webp"
          }
          alt="company"
        />
      </div>
      <div className="company-info">
        <p>
          <RiHomeHeartLine /> 4 Soi Ramkamhenge 118, <br /> Sapansung, Bangkok
          10400
        </p>
        <p>
          <AiOutlinePhone /> 02-567-1234, 091-2319888
        </p>
        <p>
          <MdOutlineMarkEmailRead /> greencats@gmail.com
        </p>

        <p>
          <BsLine /> @GreenCatsRecycling
        </p>

        <p>
          <AiOutlineFacebook /> : Green-Cats-Group
        </p>
      </div>
    </div>
  );
}

export default Contact;
