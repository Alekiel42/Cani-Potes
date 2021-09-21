import React from 'react';
import { useForm } from "react-hook-form";

import '../CreateRide/createRide.scss';

const CreateRide = () => {
	//todo check how to avoid errors when input is empty but only on submit (with state ?)
	const { register, handleSubmit, formState: { errors } } = useForm();

	

	const onSubmit = (data) => {
		console.log('submitted data : ', data);
	};

	const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ,19 ,20, 21, 22, 23];
	const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
	const date = new Date();

	return (
		<main className='create-ride'>
			<h2>Création d'une balade</h2>
			<form onSubmit={handleSubmit(onSubmit)}>

				<div className="create-ride__field">
					<label htmlFor="title">Nom de ma balade</label>
					<input
						id='title'
						name='title'
						defaultValue="Ma balade"
						{...register('title', {required: 'Title is needed'})}
					/>
					{/* {errors.title && <span>Le titre est obligatoire</span>} */}
				</div>

				{/* how to choose coordinates ? with map ? by writing an adress ? */}
				<div className="create-ride__field">
					<label htmlFor="startingPoint">Point de départ</label>
					<input
						id='startingPoint'
						name='startingPoint'
						defaultValue="Point de départ"
						{...register('startingPoint', {required: 'startingPoint is needed'})}
					/>
					{/* {errors.startingPoint && <span>Le point de départ est obligatoire</span>} */}
				</div>

				<div className="create-ride__field">
					<label htmlFor="endingPoint">Point d'arrivée</label>
					<input
						id='endingPoint'
						name='endingPoint'
						defaultValue="Point d'arrivée"
						{...register('endingPoint', {required: 'endingPoint is needed'})}
					/>
					{/* {errors.endingPoint && <span>Le point d'arrivée est obligatoire</span>} */}
				</div>

				<div className="create-ride__field">
					<label htmlFor="date">Jour de la balade</label>
					<input
						id='date'
						name='date'
						type='date'
						defaultValue={`${date.getUTCFullYear().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`}
						min={`${date.getUTCFullYear().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`}
						{...register('date', {required: 'A day is needed'})}
					/>
					{/* {errors.endingPoint && <span>Le point d'arrivée est obligatoire</span>} */}
				</div>

				{/* ADD INPUT DATE TO SELECT DATE */}

				{/* CHANGE INPUT FOR SELECT WITH OPTION */}
				<div className="create-ride__field">
					<p>Heure de départ</p>
					<label htmlFor="startHour"></label>
					<select {...register("startHour")} defaultValue="female">
						{
							hours.map(hour => <option key={hour} value={hour}>{hour}</option>)
						}
					</select>
					<label htmlFor="startMin"></label>
					<select {...register("startHour")} defaultValue="female">
						{
							minutes.map(minute => <option key={minute} value={minute}>{minute}</option>)
						}
					</select>
				</div>

				<div className="create-ride__field">
					<p>Heure d'arrivée estimée</p>
					<p>18h55</p>
				</div>

				<div className="create-ride__field">
					<p>Temps de la balade</p>
					<p>27min</p>
				</div>

				<div className="create-ride__field">
					<label htmlFor="maxDogs">Nombre maximum de chiens</label>
					<input
						id='maxDogs'
						name='maxDogs'
						type='number'
						{...register('maxDogs', {required: 'maxDogs is needed'})}
					/>
					{/* {errors.maxDogs && <span>Le nombre max de chiens est obligatoire</span>} */}
				</div>


				{/* INPUT ==> TEXTAREA */}
				<div className="create-ride__field">
					<label htmlFor="description">Description de ma balade</label>
					<input
						{...register('description', {required: 'Description is needed'})}
					/>
					{/* {errors.description && <span>La description est obligatoire</span>} */}
				</div>
				
				<input type="submit" />
			</form>
		</main>
	);
};

export default CreateRide;
