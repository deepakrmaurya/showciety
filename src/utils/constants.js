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
  "/home/dinesh/SleepyCoder/showciety/showciety/public/assets/bg.png";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
