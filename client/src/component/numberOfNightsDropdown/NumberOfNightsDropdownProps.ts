import { ChangeEvent } from 'react'

export interface NumberOfNightsDropdownProps {
    quantity: string
    onChange?: (e: ChangeEvent<{ value: unknown }>) => void
}
