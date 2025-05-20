export const getProfileImage = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Ayeshan-Oshitha");
    const data = await res.json();
    console.log("Profile image URL:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch GitHub profile image:", error);
    return null;
  }
};
