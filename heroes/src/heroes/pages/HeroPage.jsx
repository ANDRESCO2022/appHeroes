import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroApi from '../../api/HeroesApi';
import { superheroes } from '../../api/api';

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
	
	console.log(heroId);
	const getHerosById =  () => {
		try {
			const response =  superheroes;
			setGetHeroId(response.filter((item) => item.id === heroId));
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(getHeroId[item.id].nombre);

	return (
		<>
			<div key={getHeroId[item.id].id} className="w-1/1 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8  animate__animated  animate__fadeInUp">
				<img src={getHeroId[item.id].imagen} alt={getHeroId[item.id].nombre} className="w-full rounded-l-2xl" />
				<div className="px-6 py-4">
					<div className="text-xl mb-2">
						Nombre
						<span className="text-bold text-blue-700">{getHeroId.nombre}</span>
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Editoral:</span>
						{''}
						{getHeroId.editoral}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Estreno:</span>
						{''}
						{getHeroId.estreno}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Descripcion:</span>
						{''}
						{getHeroId.descripcion}
					</div>
					<div className="text-xl mb-2">
						<span className="text-bold text-blue-700">Poderes:</span>
						{''}
						{getHeroId.poderes}
						<button onClick={backPage} className="w-full bg-indigo-500 px-8 py-2 mt-8 rounded-lg">
							Regresar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
