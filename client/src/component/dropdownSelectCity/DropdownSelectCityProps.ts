import { ChangeEvent } from 'react';

export default interface DropdownSelectCityProps {
    label: string;
    handleInputChange: (e: ChangeEvent) => void;
    name: string
    value?: string | null;
}