import React from "react";
import "./index.css";

// Chỉ cho phép các giá trị cố định
type ContactType = "facebook" | "zalo" | "map";

interface ContactLinkProps {
  platform: ContactType;
}

const contactData: Record<ContactType, { url: string; img: string }> = {
  facebook: {
    url: "https://www.facebook.com/gachoiletuan",
    img: "./imgs/fb-vector.png", // Đường dẫn đến ảnh đại diện của Facebook
  },
  zalo: {
    url: "https://zalo.me/",
    img: "./imgs/zl-vip-vector.png", // Đường dẫn đến ảnh đại diện của Zalo
  },
  map: {
    url: "https://www.google.com/maps?q=13.0298021,109.2210156&entry=gps&lucs=,94242583,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjExLjMuNzM1NDg4OTYwMBgAIIgnKmwsOTQyNDI1ODMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAlZO&skid=1ecbd6ab-413a-43d3-99b2-1f3033989513&g_st=ifm",
    img: "./imgs/map-vector.png"
  }
};

const ContactLink: React.FC<ContactLinkProps> = ({ platform }) => {
  const contact = contactData[platform];

  return (
    <div className="flex-item">
        <a href={contact.url} target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={contact.img} alt={`${platform} icon`} className="contact-img" />
        </a>
    </div>
  );
};

export default ContactLink;
