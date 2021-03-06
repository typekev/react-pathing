/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

interface SelectOption<T> {
  label: string;
  value: T;
}

interface Props<T> {
  label: string;
  options: SelectOption<T>[];
  onChange: (option: SelectOption<T> | null) => void;
  value?: SelectOption<T> | null;
}

export default function SelectField<T = string>({ label, options, onChange, value }: Props<T>) {
  return (
    <Autocomplete<SelectOption<T>>
      fullWidth
      options={options}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <TextField {...params} label={label} variant="outlined" margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
      value={value}
      onChange={(_e, value) => onChange(value)}
    />
  );
}
