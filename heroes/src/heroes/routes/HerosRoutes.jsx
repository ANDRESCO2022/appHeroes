import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../design';
import { HeroPage, DcPage, MarvelPage, InicioPage } from '../pages';

export const HerosRoutes = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="inicio" element={<InicioPage />} />
				<Route path="heroMarvel" element={<MarvelPage />} />
				<Route path="heroDc" element={<DcPage />} />
				<Route path="heroe/:heroId" element={<HeroPage />} />
				<Route path="/*" element={<Navigate to="/inicio" />} />
			</Routes>
		</>
	);
};
