import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div>
        <div className="border-b border-neutral-900  pb-4 ml-2">
          <h1 className="text-center text-4xl mt-10">Get in Touch</h1>
          <div className="text-center tracking-tighter text-neutral-400">
            <div className="flex items-center space-x-2 justify-center">
              <FaLocationDot />
              <p className="my-2 mx-auto">C-90 Ashiyana-1, Moradabad</p>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <FaPhoneAlt />
              <p className="my-2 mx-auto">+91-9528320885</p>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <IoMdMailUnread />
              <p className="my-2 mx-auto">geeteshyadav12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
