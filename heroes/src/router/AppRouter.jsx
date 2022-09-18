import { Routes, Route } from 'react-router-dom';
import { LoginPAges } from '../auth/pages/LoginPAges';
import { HerosRoutes } from '../heroes';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="heroLogin" element={<LoginPAges />} />
				<Route path="/*" element={<HerosRoutes />} />
			</Routes>
		</>
	);
};
