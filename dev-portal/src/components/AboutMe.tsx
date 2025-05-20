import React, { useEffect, useState } from "react";
import { getProfileImage } from "../services/ProfileImage";

const AboutMe = () => {
  const [image, setImage] = useState<undefined | string>();
  const [loading, setLoading] = useState<boolean>(false);

  const getImage = async () => {
    setLoading(true);
    try {
      const data = await getProfileImage();
      setImage(data.avatar_url);
      console.log("Image URL is", data.avatar_url);
    } catch (error) {
      console.error("Failed to fetch image", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="w-full grid grid-cols-12  gap-4  max-w-[1200px]">
      <div className="col-span-12 lg:col-span-8 mt-20 px-8 ">
        <div className="flex flex-col ">
          <p className="text-2xl mb-2">Hello, I'm </p>
          <p className="text-4xl ">Oshitha Costa</p>
        </div>
        <div className="mt-12 w-full ">
          <p>
            I’m a student at the University of Moratuwa, currently pursuing a
            Bachelor of Science Honours in Information Technology.
            <br />
            <br />
            I have experience working with programming languages such as Java,
            JavaScript, TypeScript, C#, and Python. I'm also familiar with
            frameworks and technologies like React, ASP.NET Core, and Spring
            Boot.
            <br />
            <br />
            I'm passionate about software development, mobile development, and
            emerging technologies like Artificial Intelligence, AI agents, and
            Machine Learning. I’m always eager to learn and apply new
            technologies to solve real-world problems.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 mt-2">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-auto rounded-lg scale-75 lg:mt-28"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-red-500">
            Unexpected Error
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
