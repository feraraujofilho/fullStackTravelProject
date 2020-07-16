import { ChangeEvent } from 'react'

export interface NumberOfNightsDropdownProps {
    quantity?: string | null
    onChange?: (e: ChangeEvent<{ value: unknown }>) => void
}
