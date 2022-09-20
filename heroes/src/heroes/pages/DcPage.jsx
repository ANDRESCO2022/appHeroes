import React, { useState, useEffect } from 'react';
import heroApi from '../../api/HeroesApi';
import { Link } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { superheroes } from '../../api/api';

export const DcPage = () => {
	const [getHeros, setGetHeros] = useState([]);
	useEffect(() => {
		getHeroes();
	}, []);

	const getHeroes = async () => {
		try {
			const response = await superheroes;
			setGetHeros(response.filter((item) => item.tipo !== 'heroes-marvel'));
		} catch (error) {
			console.log(error);
		}
	};
	if (!getHeros.length) {
		return (
			<div className="flex flex-col justify-center items-center mt-20">
				<Loader />
			</div>
		);
	}
	return (
		<>
			<h1 className="text-center font-bold text-6xl uppercase m-4">
				<span className="text-blue-500  break-words ">top 20</span>
				Mejores Heroes <span className="text-blue-500 mt-3 ">DC </span>
			</h1>
			<div className="grid sm:grid-cols-4 gap-4">
				{getHeros.map((hero) => (
					<div key={hero.id} className="rounded-t-2xl shadow-2xl bg-gray-900 m-8 animate__infinite animate__animated  animate__pulse">
						<img className="rounded-t-2xl shadow-1xl w-full" src={hero.imagen} alt={hero.nombre} />
						<div className="p-6 py-4">
							<div className="font-bold text-xl mb-2">{hero.nombre}</div>
							<p className="text-gray-500 text-base text-justify">{hero.descripcion.substring(0, 150).concat('...')}</p>
							<Link to={`/heroe/${hero.id}`}>
								<button className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-2  mt-8 mb-6 rounded-lg hover:bg-sky-700 ">
									detalle
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
