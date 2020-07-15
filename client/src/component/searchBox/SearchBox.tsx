import React, { FC, useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
import DropdownSelectCity from '../dropdownSelectCity/DropdownSelectCity';
import NumberOfNightsDropdown from '../numberOfNightsDropdown/NumberOfNightsDropdown';
import axios from 'axios';

const SearchBox: FC = () => {
	const [ error, setError ] = useState<any[]>();
	const [ formData, setFormData ] = useState({
		origin: '',
		destination1: '',
		destination2: '',
		destination3: '',
		destination4: '',
		nights: '1'
	});

	console.log(formData);

	const handleInputChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
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
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		console.log('Submitted');
	};

	return (
		<ValidatorForm onSubmit={handleSubmit} onError={(err) => setError(err)}>
			<DropdownSelectCity handleInputChange={handleInputChange} label="origin" value={formData.origin} />
			<div>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					value={formData.destination1}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					value={formData.destination2}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					value={formData.destination3}
				/>
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="destination"
					value={formData.destination4}
				/>
			</div>
			<NumberOfNightsDropdown quantity={formData.nights} onChange={handleInputChange} />
			<Button type="submit">Submit</Button>
		</ValidatorForm>
	);
};

export default SearchBox;
