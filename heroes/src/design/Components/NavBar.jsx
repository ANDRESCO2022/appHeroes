import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export const NavBar = () => {
	const navigate = useNavigate();
	const onLogout = () => {
		navigate('/heroLogin', {
			replace: true,
		});
	};
	return (
		<nav className="bg-gray-900">
			<div className="max-w7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between">
					<div className="flex-1 flex items-center justify center-center">
						<div className="flex-shrink-0 flex items-center">
							<Link to={'/'}>
								<Logo />
							</Link>
						</div>
						<div className="hidden sm:block sd:ml-6 mt-2">
							<div className="flex space-x-4">
								<NavLink className={({ isActive }) => `text-withe block px-3 py- 2 roundes md${isActive ? 'terxt-yelow-500' : ''}`} to="/inicio">
									Inicio
								</NavLink>
								<NavLink className={({ isActive }) => `text-withe block px-3 py- 2 roundes md${isActive ? 'terxt-yelow-500' : ''}`} to="/heroMarvel">
									Marvel
								</NavLink>
								<NavLink className={({ isActive }) => `text-withe block px-3 py- 2 roundes md${isActive ? 'terxt-yelow-500' : ''}`} to="/heroDc">
									DC
								</NavLink>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex">
						<button onClick={onLogout} className="bg-red 600 px-6 rounded-lg font-bold">
							Salir
						</button>
					</div>
				</div>
			</div>
			<div className="sm:hidden" id="movile-menu">
				<div className="px-2 pt-2 pb-3 space-y-2">
					<NavLink className={({ isActive }) => `bg-gray-700 text-withe block px-3 ${isActive ? 'text-yellow-500' : ''}`} to="inicio"></NavLink>
					<NavLink className={({ isActive }) => `text-withe block px-3 py- 2 roundes md${isActive ? 'terxt-yelow-500' : ''}`} to="/heroMarvel">
						Marvel
					</NavLink>
					<NavLink className={({ isActive }) => `text-withe block px-3 py- 2 roundes md${isActive ? 'terxt-yelow-500' : ''}`} to="/heroDc">
						DC
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
