import { useNavigate } from 'react-router-dom';

export const LoginPAges = () => {
	const navigate = useNavigate();
	const logIn = () => {
		navigate('/inicio');
	};
	return (
		<div className="flex h-screen justify-center items-center">
			<button onClick={logIn} className="bg-blue-600 py4 px-6 rounded-lg font-bold tex-white">
				ingresar
			</button>
		</div>
	);
};
