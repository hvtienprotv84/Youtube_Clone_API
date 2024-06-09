import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
// import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
// import CheckroomIcon from '@mui/icons-material/Checkroom';
// import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FunctionsIcon from '@mui/icons-material/Functions';
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import '../index2.css'; // Import your CSS file
import { IoLogoJavascript } from "react-icons/io5";

export const categories = [
	
	{ name: 'Học Frontend', icon: <HomeIcon /> },
	{ name: 'JavaScript', icon: <IoLogoJavascript className="js-icon" /> },
	{ name: 'ReactJS', icon: <FaReact className="react-icon" />	},
	{ name: 'Redux', icon: <SiRedux className="redux-icon" /> },
	{ name: 'Son Tung M-TP', icon: <FunctionsIcon /> },
	{ name: 'Music', icon: <MusicNoteIcon /> },
	{ name: 'Education', icon: <SchoolIcon /> },
	{ name: 'Movie', icon: <OndemandVideoIcon /> },
	{ name: 'Gaming', icon: <SportsEsportsIcon /> },
	{ name: 'Live', icon: <LiveTvIcon /> },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
