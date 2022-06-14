import { Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export default function FormCart(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [emailverif, setEmaiVerif] = useState(false);
	const onSubmit = (data) => {
		const { email, verificaionEmail } = data;
		if (email !== verificaionEmail) {
			setEmaiVerif(true);
		} else {
			setEmaiVerif(false);
			props.setRegistro(data);
		}
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
			<input
				type="email"
				placeholder="Verifica tu Email"
				{...register('verificaionEmail', {
					required: 'Ingresa tu correo nuevamente',
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<Typography variant="caption" color={'error'} marginTop={0}>
				{emailverif ? 'Los correos no coinciden' : ''}
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
