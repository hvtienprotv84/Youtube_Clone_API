import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import YTLogo from '../assets/yt_logo2.png';
import { SearchBar } from './';

const Navbar = () => (
	<Stack
		direction='row'
		alignItems='center'
		p={2}
		sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'center', gap: '10px' }}
	>
		<a href="/" style={{ display: 'flex', alignItems: 'center', }}>
			<img src={YTLogo} alt='logo' height={100} width={180} style={{ marginLeft: -450,position: 'absolute', }} />
			<span style={{ position: 'absolute', color: '#aaa', fontSize: 10, marginLeft: -300, marginTop: -20, fontFamily: 'Arial, sans-serif'  }}>VN</span>
		</a>
		<SearchBar />
	</Stack>
);

export default Navbar;
