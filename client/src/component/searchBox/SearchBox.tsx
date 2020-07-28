import React, { FC, useState, useEffect, ReactElement } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button, Card, Grid, Link } from '@material-ui/core';
import DropdownSelectCity from '../dropdownSelectCity/DropdownSelectCity';
import NumberOfNightsDropdown from '../numberOfNightsDropdown/NumberOfNightsDropdown';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SearchBoxProps } from './SearchBoxProps';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './SearchBoxStyles';
import { get } from 'lodash';
import MultipleSelectionFilter from '../multipleSelectionFilter/MultipleSelectionFilter';
import { weekdays } from '../../app/services/filters';
import { Row } from '../../app/types/Row';

const SearchBox: FC<SearchBoxProps> = ({ searchInfo, weekdaysFilter, setWeekdaysFilter }) => {
	const [formData, setFormData] = useState<any>({
		origin: '',
		destination1: '',
		destination2: '',
		destination3: '',
		destination4: '',
		nights: '1'
	});
	const [showFilters, setShowFilters] = useState<boolean>(false)

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

	const handleChangeFilter = (event: any, setStateFunction: any) => {
		setStateFunction(event.target.value);
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
			.post(`${process.env.REACT_APP_BACKEND_URL}/flights`, {
				origin: origin,
				destination1: destination1,
				destination2: destination2,
				destination3: destination3,
				destination4: destination4,
				nights: nights
			})
			.then((response) => {
				let dataForFrontend = response.data
				if (weekdaysFilter.length > 0) {
					const dataFilteredByWeekDays = dataForFrontend.filter((val: Row) => {
						let valueArray = val.departuredate.split(" - ")
						if (weekdaysFilter.indexOf(valueArray[0]) > -1) {
							return val
						}
					})
					dataForFrontend = dataFilteredByWeekDays
				}
				if (origin && destination1 && nights) {
					push({
						pathname: '/search',
						search: resolveUrl(origin, [destination1, destination2, destination3, destination4], nights),
						state: { data: dataForFrontend, filters: weekdaysFilter }
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
					key={i}
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
			<ValidatorForm onSubmit={handleSubmit}>
				<Grid container>
					<Grid container className={classes.citiesAndDuration}>
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
								<div className={classes.plusButton}>
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
					</Grid>

					{showFilters && <MultipleSelectionFilter options={weekdays} value={weekdaysFilter} handleChange={(event) => handleChangeFilter(event, setWeekdaysFilter)} label="Departure Weekday" />}
					<Grid container xs={12} className={classes.actions}>
						<Grid item xs={6}>
							<Link className={classes.textLink} onClick={() => setShowFilters(!showFilters)}>
								<p>Advanced Search</p>
							</Link>
						</Grid>
						<Grid item xs={6}>
							<Button fullWidth className={classes.submitButton} type="submit">
								Search
						</Button>
						</Grid>

					</Grid>
				</Grid>
			</ValidatorForm>
		</Card >
	);
};

export default SearchBox;
