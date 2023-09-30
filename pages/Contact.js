import React from "react";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import IconEmail from "../app/icons/IconEmail";
import IconPhone from "../app/icons/IconPhone";
import IconInfo from "../components/IconInfo";
import FormElements from "../components/FormElements";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const formContainerStyle = {
    position: "relative",
    zIndex: 1, // Ensure the form is above the image
  };

  return (
    <div className="relative">
      {/* Image Background */}
      <div
        className="xl:container mx-auto mb-32 mt-20 w-full h-96"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          backgroundImage: `url(./contactus1.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
      ></div>

      {/* Form Container */}
      <motion.div
        className="px-4 sm:w-2/3 lg:w-1/2 mx-auto -mt-72"
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        style={formContainerStyle}
      >
        <div className="rounded-lg shadow-lg bg-white  py-10 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
            <IconInfo icon={<IconEmail />} text="contact@us" />
            <IconInfo icon={<IconPhone />} text="+91 6392285932" />
          </div>
          <div>
            <form>
              {/* Form fields go here */}
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElements
                    type="text"
                    Label="Name"
                    placeholder="Enter name here..."
                    fieldRef={field}
                    hasError={errors.name?.type === "required"}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElements
                    type="email"
                    Label="Email"
                    placeholder="Enter email here..."
                    fieldRef={field}
                    hasError={errors.email?.type === "required"}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElements
                    type="textarea"
                    Label="Message"
                    placeholder="Enter message here..."
                    fieldRef={field}
                    hasError={errors.message?.type === "required"}
                  />
                )}
              />
              <button
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:outline-none focus:ring-0 active-bg-pink-600"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
