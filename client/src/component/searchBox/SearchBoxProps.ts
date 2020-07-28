import { SearchInfo } from "./interfaces/SearchData";
import { Dispatch, SetStateAction } from 'react';

export interface SearchBoxProps {
    searchInfo?: SearchInfo,
    weekdaysFilter: string[]
    setWeekdaysFilter?: Dispatch<SetStateAction<string[]>>
}