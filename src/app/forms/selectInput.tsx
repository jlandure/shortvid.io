import React, {ChangeEventHandler} from 'react';
import styles from '../../../styles/app/common/inputs.module.css';

export interface SelectInputProps {
	value?: string;
	setValue: ChangeEventHandler<HTMLSelectElement>;
	label: string;
	options?: string[];
}

export const SelectInput = ({
	value,
	setValue,
	label,
	options,
}: SelectInputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<select
				className={styles.input}
				name={label}
				value={value}
				onChange={setValue}
			>
				{options?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
};
