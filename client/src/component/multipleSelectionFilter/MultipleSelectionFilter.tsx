import { FormControl, Select, InputLabel, Input, MenuItem, Checkbox, ListItemText } from '@material-ui/core';
import React, { FC } from "react"
import useStyles from "./MultipleSelectionFilterStyles"

interface MultipleSelectionFilterProps {
  options: any[],
  value: any,
  handleChange: (e: any) => void
  label: string
}

const MultipleSelectionFilter: FC<MultipleSelectionFilterProps> = ({ options, value, handleChange, label }) => {
  const classes = useStyles()

  return (
    <FormControl fullWidth className={classes.root} >
      <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={value}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected: any) => selected.join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox className={classes.checkbox} classes={{
              checked: classes.checkbox
            }} checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultipleSelectionFilter