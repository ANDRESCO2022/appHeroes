import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroApi from '../../api/HeroesApi';

export const HeroPage = () => {
	const [getHeroId, setGetHeroId] = useState([]);
	const { heroId } = useParams();
	const navigate = useNavigate();
	const backPage = () => {
		navigate(-1);
	};

	useEffect(() => {
		getHerosById();
	}, []);

	const getHerosById = async () => {
		try {
			const response = await heroApi.get(`/superheroes.json`);
			setGetHeroId(response.data.filter((item) => item.id === heroId));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div key={getHeroId[0].id} className="w-1/1 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8  animate__animated  animate__fadeInUp">
				<img src={getHeroId[0].imagen} alt={getHeroId[0].nombre} className="w-full rounded-l-2xl" />
				<div className="px-6 py-4">
					<div className="text-xl mb-2">
						Nombre
						<span className="text-bold text-blue-700">{getHeroId[0].nombre}</span>
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Editoral:</span>
						{''}
						{getHeroId[0].editoral}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Estreno:</span>
						{''}
						{getHeroId[0].estreno}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Descripcion:</span>
						{''}
						{getHeroId[0].descripcion}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Poderes:</span>
						{''}
						{getHeroId[0].poderes}
						<button onClick={backPage} className="w-full bg-indigo-500 px-8 py-2 mt-8 rounded-lg">
							Regresar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
