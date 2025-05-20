export const getJokes = async () => {
  try {
    const res = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    );
    const data = await res.json();
    console.log("Joke:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    return null;
  }
};
