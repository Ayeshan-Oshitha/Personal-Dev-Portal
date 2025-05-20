import React, { useEffect, useState } from "react";
import { getProfileImage } from "../services/ProfileImage";

const AboutMe = () => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const getImage = async () => {
    setLoading(true);
    try {
      const data = await getProfileImage();
      setImage(data.avatar_url);
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
    <div className="w-full grid grid-cols-12  gap-12  max-w-[1200px]">
      <div className="col-span-8 mt-20">
        <div className="flex flex-col ">
          <p className="text-2xl mb-2">Hello, I'm </p>
          <p className="text-4xl ">Oshitha Costa</p>
        </div>
        <div className="mt-12 w-full pr-24">
          <p>
            I'm a software engineer with a passion for creating innovative
            solutions. I have experience in web development, mobile app
            development, and cloud computing. I love learning new technologies
            and applying them to real-world problems.
          </p>
        </div>
      </div>
      <div className="col-span-4 mt-2">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
          </div>
        ) : (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full rounded-lg scale-75"
          />
        )}
      </div>
    </div>
  );
};

export default AboutMe;
