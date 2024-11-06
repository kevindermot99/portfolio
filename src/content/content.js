import { MusicWash, MusicSumWave, MusicWetDreamz } from "../assets/music";
import {
  CalendarLogo,
  CanvaLogo,
  ChromeLogo,
  LinuxLogo,
  MongoLogo,
  NotionLogo,
  SpotifyLogo,
  UpfrontLogo,
} from "../assets/toolbox";

function get_age(dob) {
  const this_year = new Date().getFullYear();
  return this_year - dob;
}
export const WhoAmI = {
  name: "Mbonimpaye K. Kaneza",
  status: "Frontend Developer at Outside Hospitality",
  bio: `I'm ${get_age(
    2003
  )} years old with 3 months of Work Experience \n I’m a Full Stack Web Developer with solid experience in front-end development, where I’ve built a range of user-friendly and visually engaging interfaces \n I value writing clean, maintainable code & staying current with new technologies`,
};

export const Toolbox = [
  {
    name: "Chrome",
    icon: ChromeLogo,
    cards: [
      {
        favicon: "https://www.gstatic.com/devrel-devsite/prod/v20340109590ecca637cc225c95b56cbdeeca1e36cdadabf4502e87253db1ac7d/web/images/favicon.png",
        title: "Progressive Web Apps",
        desc: "https://developers.google.com/web/progressive-web-apps",
      },
      {
        favicon: "https://img.icons8.com/color/48/nextjs.png",
        title: "Next.js Documentation",
        desc: "https://nextjs.org/docs",
      },
      {
        favicon: "https://img.icons8.com/color/48/tailwind_css.png",
        title: "Tailwind Custom Themes",
        desc: "https://tailwindcss.com/docs/theme",
      },
      {
        favicon: "https://img.icons8.com/color/48/twitterx--v2.png",
        title: "Micro-Frontend Architecture",
        desc: "https://twitter.com/philipp_spiess/status/1412345678901239875",
      },
    ],
  },
  {
    name: "Notion",
    icon: NotionLogo,
    cards: [
      {
        favicon: NotionLogo,
        title: "📅 Weekly Tasks",
        desc: "Create and organize tasks for this week. Don't forget to set priorities!",
      },
      {
        favicon: NotionLogo,
        title: "Take Notes for Project XYZ",
        desc: "Document everything you learn about Project XYZ. Keep track of ideas and meeting notes!",
      },
      {
        favicon: NotionLogo,
        title: "Brainstorm New Ideas",
        desc: "Make a list of potential project ideas or things you want to improve.",
      },
      {
        favicon: NotionLogo,
        title: "Password Storage",
        desc: "Store your passwords and important information securely in a locked page.",
      },
    ],
  },
  {
    name: "Mongo DB",
    icon: MongoLogo,
    cards: [
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aququuxTXwpYCcLioAWb--XpaYwDknSW3A&s",
        title: "MongoDB Documentation",
        desc: "Start with the official MongoDB docs to master the database.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aququuxTXwpYCcLioAWb--XpaYwDknSW3A&s",
        title: "MongoDB Atlas Setup",
        desc: "Learn how to deploy and manage databases in MongoDB Atlas. Cloud storage made easy.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aququuxTXwpYCcLioAWb--XpaYwDknSW3A&s",
        title: "MongoDB Indexing Techniques",
        desc: "Optimize queries with MongoDB indexing. Improve performance on large datasets.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aququuxTXwpYCcLioAWb--XpaYwDknSW3A&s",
        title: "MongoDB Aggregation Framework",
        desc: "Use MongoDB’s aggregation framework for complex queries and data processing.",
      },
    ],
  },
  {
    name: "Upfront",
    icon: UpfrontLogo,
    cards: [
      {
        favicon: UpfrontLogo,
        title: "Design System",
        desc: "Check out the Upfront Design System for consistency in your projects.",
      },
      {
        favicon: UpfrontLogo,
        title: "UI Component Library",
        desc: "Explore the component library for ready-to-use UI elements.",
      },
      {
        favicon: UpfrontLogo,
        title: "Developer Resources",
        desc: "Get access to docs and tools that make frontend development easier.",
      },
      {
        favicon: UpfrontLogo,
        title: "Community Projects",
        desc: "Collaborate on open-source Upfront projects and grow the design system together.",
      },
    ],
  },
  {
    name: "Canva",
    icon: CanvaLogo,
    cards: [
      {
        favicon: CanvaLogo,
        title: "Create Social Media Graphics",
        desc: "Design stunning social media posts for your brand. Share on Instagram, Facebook, and more.",
      },
      {
        favicon: CanvaLogo,
        title: "Design Presentations",
        desc: "Create beautiful presentations with Canva's pre-made templates.",
      },
      {
        favicon: CanvaLogo,
        title: "Design a Logo for Client",
        desc: "Design a professional logo that fits your client's brand.",
      },
      {
        favicon: CanvaLogo,
        title: "Craft a Website Mockup",
        desc: "Mockup a website design with user-friendly tools. Perfect for web projects.",
      },
    ],
  },
  {
    name: "Calendar",
    icon: CalendarLogo,
    cards: [
      {
        favicon: CalendarLogo,
        title: "Weekly Schedule",
        desc: "Plan your week: work, meetings, gym, and downtime. Stay organized and productive.",
      },
      {
        favicon: CalendarLogo,
        title: "Important Deadlines",
        desc: "Set reminders for project deadlines and important dates. Never miss a due date again!",
      },
      {
        favicon: CalendarLogo,
        title: "Daily Routine",
        desc: "Set up a daily routine to stay on top of your tasks and goals.",
      },
      {
        favicon: CalendarLogo,
        title: "Monthly Overview",
        desc: "Review your goals and progress monthly. Adjust and prepare for next month!",
      },
    ],
  },
  {
    name: "Spotify",
    icon: SpotifyLogo,
    cards: [
      {
        favicon: SpotifyLogo,
        title: "Top 50 Playlist",
        desc: "Check out the latest hits on Spotify’s Top 50 playlist. Stay up to date with trending music.",
      },
      {
        favicon: SpotifyLogo,
        title: "Discover New Songs",
        desc: "Discover fresh tracks with personalized recommendations based on your listening habits.",
      },
      {
        favicon: SpotifyLogo,
        title: "Playlist for Working Out",
        desc: "Set the mood with high-energy tracks. Perfect for hitting the gym or running.",
      },
      {
        favicon: SpotifyLogo,
        title: "Chill Vibes Playlist",
        desc: "Relax with a curated playlist of mellow tracks. Great for unwinding after a long day.",
      },
    ],
  },
  {
    name: "Ubuntu 24.04",
    icon: LinuxLogo,
    cards: [
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy9oOUOprqLnV_wjaFiTU7xxUuuXXWrCs_Q&s",
        title: "Ubuntu Terminal Tips",
        desc: "Learn essential Linux terminal commands to speed up your workflow.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy9oOUOprqLnV_wjaFiTU7xxUuuXXWrCs_Q&s",
        title: "Customize Ubuntu Appearance",
        desc: "Change your desktop theme and appearance for a more personal experience.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy9oOUOprqLnV_wjaFiTU7xxUuuXXWrCs_Q&s",
        title: "Ubuntu Performance Tweaks",
        desc: "Optimize Ubuntu for better performance on older hardware.",
      },
      {
        favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy9oOUOprqLnV_wjaFiTU7xxUuuXXWrCs_Q&s",
        title: "Secure Ubuntu System",
        desc: "Set up firewall, encryption, and other security measures to keep your system safe.",
      },
    ],
  },
];

export const FavMusic = [
  {
    name: "Wash.",
    singer: "Bon Iver",
    spotifyUrl: "https://open.spotify.com/track/7rIhp6EWLNtM8qFIQruJPT?si=297d35a54102481d",
    audioSrc: MusicWash,
    poster: "https://i.scdn.co/image/ab67616d0000b2736880235a103031a13ff8c902"
  },
  {
    name: "Possessions",
    singer: "Sum Wave",
    spotifyUrl: "https://open.spotify.com/track/3f14Cmmzo0yfzRvZl00uGO?si=0ff4bf71363d4af5",
    audioSrc: MusicSumWave,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0I1wVHhXPfc0nBiJo1-cyWFQZjfEeTCeJcw&s"
  },
  {
    name: "Wet Dreamz",
    singer: "J.Cole",
    spotifyUrl: "https://open.spotify.com/track/4tqcoej1zPvwePZCzuAjJd?si=1f3db0e3e1cb4fad",
    audioSrc: MusicWetDreamz,
    poster: "https://i1.sndcdn.com/artworks-s7CMXZ0V4048Z8ZW-ivA5Iw-t500x500.jpg"
  },
]
