import React, { FC, useState, useEffect, ReactElement } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button, Card, Grid } from '@material-ui/core';
import DropdownSelectCity from '../dropdownSelectCity/DropdownSelectCity';
import NumberOfNightsDropdown from '../numberOfNightsDropdown/NumberOfNightsDropdown';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SearchBoxProps } from './SearchBoxProps';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import useStyles from './SearchBoxStyles';
import { get } from 'lodash';

const SearchBox: FC<SearchBoxProps> = ({ searchInfo }) => {
	const [error, setError] = useState<any[]>();
	const [formData, setFormData] = useState<any>({
		origin: '',
		destination1: '',
		destination2: '',
		destination3: '',
		destination4: '',
		nights: '1'
	});
	const [numberOfInputToShow, setNumberOfInputToShow] = useState(1);

	const classes = useStyles();

	useEffect(
		() => {
			if (searchInfo) {
				setFormData({
					...searchInfo
				})
				let predefinedDestinations = Object.keys(searchInfo).filter((el: string) => {
					const getValue = get(searchInfo, el, null)
					return el.includes('destination') && getValue?.length > 0
				})
				setNumberOfInputToShow(predefinedDestinations?.length);
			}
		},
		[searchInfo]
	);

	const { push } = useHistory();

	const handleInputChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const resolveUrl = (origin: string | null, destinations: (string | null | undefined)[], nights?: string | null) => {
		let url = `?origin=${origin}`;

		destinations.forEach((destination: string | null | undefined, index: number) => {
			if (destination) {
				url = `${url}&destination${index + 1}=${destination}`;
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
				if (origin && destination1 && nights) {
					push({
						pathname: '/search',
						search: resolveUrl(origin, [destination1, destination2, destination3, destination4], nights),
						state: { data: response.data }
					});
				}
			})
			.catch((err) => console.log(err));
	};

	const renderDestinations = (): ReactElement | void => {
		let arrOfDestinations = [];

		for (let i = 0; i < numberOfInputToShow; i++) {
			arrOfDestinations.push(
				<DropdownSelectCity
					handleInputChange={handleInputChange}
					label="To"
					name={`destination${i + 1}`}
					value={formData[`destination${i + 1}`]}
				/>
			);
		}

		return (
			<Grid item xs={12} direction="column">
				{arrOfDestinations}
			</Grid>
		);
	};

	return (
		<Card elevation={10} className={classes.cardRoot}>
			<ValidatorForm onSubmit={handleSubmit} onError={(err) => setError(err)}>
				<Grid container>
					<Grid item xs={12} sm={12} md={6} direction="column" className={classes.originAndNights}>
						<Grid item xs={12}>
							<DropdownSelectCity
								handleInputChange={handleInputChange}
								name="origin"
								label="From"
								value={formData.origin}
							/>
						</Grid>
						<Grid item sm={10}>
							<NumberOfNightsDropdown quantity={formData.nights} onChange={handleInputChange} />
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={6} direction="column">
						{renderDestinations()}
						<Grid item xs={12}>
							<div className={classes.actions}>
								{/* {numberOfInputToShow > 1 && (
									<Button
										onClick={() => {
											setNumberOfInputToShow(numberOfInputToShow - 1);
										}}
									>
										<RemoveIcon />
									</Button>
								)} */}
								{numberOfInputToShow < 4 && (
									<Button
										onClick={() => {
											setNumberOfInputToShow(numberOfInputToShow + 1);
										}}
									>
										<AddIcon />
									</Button>
								)}
							</div>
						</Grid>
					</Grid>
					<Grid container item xs={12}>
						<Button fullWidth className={classes.submitButton} type="submit">
							Search
						</Button>
					</Grid>
				</Grid>
			</ValidatorForm>
		</Card>
	);
};

export default SearchBox;
