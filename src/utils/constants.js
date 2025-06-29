export const LOGO = "/assets/showcietyredlogo.png";

export const USER_AVATAR =
  "https://icons.veryicon.com/png/o/holiday/spring-festival-icon/television-110.png";

export const PLAY_ICON = "/assets/playicon.png";

export const INFO_ICON =
  "https://img.icons8.com/?size=100&id=AqxR8HVzKNDb&format=png&color=FFFFFF";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
