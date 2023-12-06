import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
  extend:
    {
      fontFamily: {
        'mono': ["JetBrains Mono"],
        'signature': ["Whisper"],
      },
    },
  },
} as Config;
