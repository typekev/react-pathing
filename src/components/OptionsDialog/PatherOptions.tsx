import React from 'react';
import { Pathers, Options } from '../../types';
import SelectField from '../SelectField';

interface Props {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

const selectFieldOptions = Object.entries(Pathers).map(([value, label]) => ({ label, value }));

const PatherOptions = ({ options, setOptions }: Props) => (
  <SelectField
    label="Select a path finding algorithm"
    options={selectFieldOptions}
    value={selectFieldOptions.find(({ value }) => value === options.pather)}
    onChange={option =>
      setOptions({ ...options, pather: (option?.value as Pathers) || options.pather })
    }
  />
);

export default PatherOptions;
