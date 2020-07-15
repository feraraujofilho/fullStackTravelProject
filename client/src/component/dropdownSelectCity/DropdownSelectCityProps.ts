import { ChangeEvent } from 'react';

export default interface DropdownSelectCityProps {
    label: string;
    handleInputChange: (e: ChangeEvent) => void;
    value: string;
}