import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //  EmailJS service ID, template ID, and Public Key
    const serviceId = "service_6x4yeyq";
    const templateId = "template_o9r6ihr";
    const publicKey = "EqjPMvtEulvZAZKFk";

    //  object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phoneNumber,
      to_name: "شركه تعقيم لمكافحه الحشرات بجده",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className=" grid grid-cols-1 gap-4">
      <input
        type="text"
        placeholder="الاسم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-darkBlue p-3"
      />
      <input
        type="text"
        placeholder="الهاتف"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border border-darkBlue  p-3"
      />
      <input
        type="email"
        placeholder="البريد الالكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-darkBlue p-3"
      />
      <textarea
        cols={30}
        rows={10}
        placeholder="اكتب رسالتك"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-darkBlue p-3"
      />
      <div className="text-center my-5">
        <button
          type="submit"
          className="bg-darkBlue text-[#fff] w-fit py-2 px-7 font-[Almarai] font-bold rounded-md
          hover:bg-lightBlue transition-all
          "
        >
          ارسال
        </button>
      </div>
    </form>
  );
};

export default Form;
