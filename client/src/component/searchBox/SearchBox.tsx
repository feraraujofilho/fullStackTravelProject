import React, { FC, useState, useEffect } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
import DropdownSelectCity from '../dropdownSelectCity/DropdownSelectCity';
import NumberOfNightsDropdown from '../numberOfNightsDropdown/NumberOfNightsDropdown';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import { DestinationsConfig } from '../flightsTable/interfaces/DestinationsConfig';
import { SearchData } from './interfaces/SearchData';

const SearchBox: FC<SearchData> = ({ origin, destination1, destination2, destination3, destination4, nights }) => {
	const [ error, setError ] = useState<any[]>();
	const [ formData, setFormData ] = useState<SearchData>({
		origin: '',
		destination1: '',
		destination2: '',
		destination3: '',
		destination4: '',
		nights: '1'
	});

	console.log(formData)

	useEffect(
		() => {
			if (origin && destination1) {
				setFormData({
					origin,
					destination1,
					destination2,
					destination3,
					destination4,
					nights
				})
			}
		},
		[origin, destination1 ]
	);

	const { push } = useHistory();

	const handleInputChange = (e: any) => {
		console.log(e.target.name, e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const resolveUrl = (origin: (string | null), destinations: (string | null | undefined)[], nights?: (string | null)) => {
		let url = `?origin=${origin?.replace(' ', '')}`;

		destinations.forEach((destination: (string | null | undefined), index: number) => {
			if (destination) {
				url = `${url}&destination${index + 1}=${destination.replace(' ', '')}`;
			}
		});

		return `${url}&nights=${nights}`;
	};

	const handleSubmit = (event: React.FormEvent<Element>) => {
		event.preventDefault();
		const { origin, destination1, destination2, destination3, destination4, nights } = formData;

		axios
			.post('http://localhost:4000/flights', {
				origin: origin,
				destination1: destination1,
				destination2: destination2,
				destination3: destination3,
				destination4: destination4,
				nights: nights
			})
			.then((response) => {
				if(origin && destination1){
					push({
						pathname: '/search',
						search: resolveUrl(origin, [ destination1, destination2, destination3, destination4 ], nights),
						state: { data: response.data }
					});

				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<ValidatorForm onSubmit={handleSubmit} onError={(err) => setError(err)}>
			<DropdownSelectCity
				handleInputChange={handleInputChange}
				name="origin"
				label="origin"
				value={formData.origin}
			/>
			<div>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					name="destination1"
					value={formData.destination1}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					name="destination2"
					value={formData.destination2}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					name="destination3"
					value={formData.destination3}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					name="destination4"
					value={formData.destination4}
				/>
			</div>
			<NumberOfNightsDropdown quantity={formData.nights} onChange={handleInputChange} />
			<Button type="submit">Submit</Button>
		</ValidatorForm>
	);
};

export default SearchBox;
