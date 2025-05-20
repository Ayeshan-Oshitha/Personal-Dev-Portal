import React, { useEffect, useState } from "react";
import { getJokes } from "../services/JokeAPI";

const Jokes = () => {
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await getJokes();
      setJoke(res.text);
      console.log("Joke is", res.text);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className="max-w-[900px] mx-auto  px-16 flex flex-col gap-y-5 mt-20">
        <div className="h-20">
          {loading ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
            </div>
          ) : (
            <p>{joke}</p>
          )}
        </div>

        <div className="flex justify-end">
          <div
            className="bg-green-500 px-4 py-2 text-white rounded-lg cursor-pointer hover:opacity-90"
            onClick={fetchJoke}
          >
            Fetch Joke
          </div>
        </div>
      </div>
    </>
  );
};

export default Jokes;
