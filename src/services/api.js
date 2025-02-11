import axios from "axios";

// const API_KEY = "5d1f93cb2999696f128d7b1072f72e87";
const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDFmOTNjYjI5OTk2OTZmMTI4ZDdiMTA3MmY3MmU4NyIsIm5iZiI6MTczOTEyNzE1Mi4xNjUsInN1YiI6IjY3YThmOTcwZjg4OThiMWNhYzA1ZjU2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r06PJraKTqBoJQMY1J4encCZue1yJVhPTAP4RBEJtw4";
const TREND_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(TREND_URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN_API}`,
      },
    });
    console.log("Full Response:", response);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching trending movies:",
      error.response?.data || error.message
    );
    return {
      error: "Failed to fetch trending movies. Please try again later.",
    };
  }
};
// ("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
