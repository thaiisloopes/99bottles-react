import { useState } from 'react';

function useForm(initialValues) {
	const [values, setValues] = useState(initialValues);

	function setValue(chave, value) {
		setValues({
			...values,
			[chave]: value,
		})
	}

	function handlerFunction(eventInformation) {
		setValue(
			eventInformation.target.getAttribute('name'),
			eventInformation.target.value
		);
	}	

	function clearForm() {
		setValues(initialValues);
	}

	return {
		values,
		handlerFunction,
		clearForm
	};
}

export default useForm;