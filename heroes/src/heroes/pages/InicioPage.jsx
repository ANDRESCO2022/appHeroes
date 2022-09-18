import marvel from '../../assets/logoMarvel.png'
import dc from '../../assets/logoDc.png'
import {useNavigate} from 'react-router-dom'
export const InicioPage = () => {
  const navigate = useNavigate()
  const onMarvel=()=>{
    navigate('/heroMarvel')
  }  
  const onDc=()=>{
    navigate('/heroDc')
  }  
	return (
		<>
			<h1 className="text-center font-bold text-6xl uppercase mt-12 animate__animated animate__zoomInDown">
				{' '}
				Que <span className="text-blue-500">Fan</span> eres?{' '}
			</h1>
			<div className="flex flex-col justify-center items-center mt-20">
				<img onClick={onMarvel} src={marvel} alt="marvel" className="rounded-lg cursor-pointer m-4 max-w-xs  animate__animated  animate__fadeInLeft" />
				<img onClick={onDc}  src={dc} alt="marvel" className="rounded-lg cursor-pointer m-4  max-w-xs max-h-60  animate__animated animate__fadeInRight" />
			</div>
		</>
	);
};
