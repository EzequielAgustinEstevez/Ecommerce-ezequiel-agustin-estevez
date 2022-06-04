import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export default function FormCart(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		props.setRegistro(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* Nombre */}
			<input
				type="text"
				placeholder="Nombre"
				{...register('nombre', {
					required: 'Ingresa tu Nombre',
					maxLength: 80,
				})}
			/>
			<Typography variant="caption" color={'error'} marginTop={0}>
				{errors.nombre?.message}
			</Typography>
			{/* Apellido */}
			<input
				type="text"
				placeholder="Apellido"
				{...register('apellido', {
					required: 'Ingresa tu Apellido',
					maxLength: 100,
				})}
			/>
			<Typography variant="caption" color={'error'} marginTop={0}>
				{errors.apellido?.message}
			</Typography>
			{/* Email */}
			<input
				type="email"
				placeholder="Email"
				{...register('email', {
					required: 'Ingresa tu Correo',
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<Typography variant="caption" color={'error'} marginTop={0}>
				{errors.email?.message}
			</Typography>
			{/* Teléfono */}
			<input
				type="tel"
				placeholder="Telefono"
				{...register('telefono', {
					required: 'Ingresa tu Teléfono',
					maxLength: 12,
				})}
			/>
			<Typography variant="caption" color={'error'} marginTop={0}>
				{errors.telefono?.message}
			</Typography>
			{/* Envio */}
			<input type="submit" />
		</form>
	);
}
