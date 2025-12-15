import PageTitle from "../layout/PageTitle";
import Layout from "../layout/Layout";
import ContactForm from "../components/contactForm/ContactForm";
import HomePage from "./HomePage";
import SocialContact from "../components/SocialContact";
import SubmitModal from "../components/SubmitModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [modalData, setModalData] = useState({ success: true, message: "" });
  const navigate = useNavigate();
  const checkModal = () => {
    if (!isDisabled) {
      document.body.style.overflowY = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  // Ensure body scroll is restored when leaving the page
  useEffect(() => {
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);
  return (
    <Layout>
      <PageTitle title="Socials" />
      <SocialContact />
      <PageTitle title="Get In Touch" />
      <ContactForm
        onSubmitClick={(success, message) => {
          setModalData({ success, message });
          setIsDisabled(false);
          checkModal();
        }}
      />
      <SubmitModal
        modalClassName={isDisabled ? "hidden" : ""}
        success={modalData.success}
        message={modalData.message}
        onModalClick={() => {
          setIsDisabled(true);
          checkModal();
          if (modalData.success) {
            navigate("/");
          }
        }}
      />
    </Layout>
  );
};

export default ContactPage;
