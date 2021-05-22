import React, { useEffect, useState } from 'react';
import './css/style.css';

function Wheather() {
	const [ city, setCity ] = useState(null);
	const [ search, setSearch ] = useState('mumbai');

	useEffect(
		() => {
			const fetchApi = async () => {
				const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0c7f2852083c8c6a20cff265d1588753`;
				const response = await fetch(url);
				const resJson = await response.json();

				setCity(resJson.main);
			};
			fetchApi();
		},
		[ search ]
	);
	return (
		<div className="box">
			<div className="inputData">
				<input
					type="search"
					value={search}
					className="inputField"
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
			</div>
			{!city ? (
				<p className="errorMsg">No Data found</p>
			) : (
				<div>
					<div className="info">
						<h2 className="location">
							<div className="bounce">
							<i className="fas fa-street-view " aria-hidden="true" /> {search}{' '}
							</div>
							
						</h2>
						<h1 className="temp">{city.temp}° Cel</h1>
						<h3 className="tempmin_max">
							{' '}
							Min : {city.temp}° Cel | Max : {city.temp}° Cel{' '}
						</h3>
					</div>
					<div className="wave -one" />
					<div className="wave -two" />
					<div className="wave -three" />
					<div className="wave -one" />
				</div>
			)}
			<div className="fabrizio" />
			<a href="http://fabrizio.co">fabrizio.co</a>
			<div class="container">
				<div className="sunny" />
				<div className="cloudy" />
				<div className="rainy" />
				<div className="snowy" />
				<div className="rainbow" />
				<div className="starry" />
				<div className="stormy" />
			</div>
		</div>
	);
}

export default Wheather;
