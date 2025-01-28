import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import {BsSkype} from 'react-icons/bs'

interface ISocial {
  icon?: any;
  name?: string;
  link?: string;
}

const SocialIcons = [
  { icon: <FaLinkedinIn />, name: "Linkdin", link: "https://www.linkedin.com/in/hadi-ahmed-70a247b1/" },
  { icon: <FaWhatsapp />, name: "Whatsapp", link: "//api.whatsapp.com/send?phone=+923484156220&text=Hi Hadi!" },
  // { icon: <FaFacebookF />, name: "Facebook", link: "https://www.facebook.com/share/1B1YpjC4Zx/" },
  // { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/u_sam_usama/" },
  // { icon: <BsSkype />, name: "Skype", link: "https://join.skype.com/invite/cZQgnHi4yq4D" },
];

export default function Social() {
  return (
    <>
      {SocialIcons.length &&
        SocialIcons.map((list: ISocial, index: number) => {
          return (
            <Link
            target="_blank"
              href={`${list.link}`}
              key={index}
              className="bg-[#1e2125] h-[35px] w-[35px] flex justify-center items-center rounded-full"
            >
              {list.icon}
            </Link>
          );
        })}
    </>
  );
}
