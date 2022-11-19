import { ChangeEvent, useState } from 'react';

function useForm<Values>(initialState: Values) {
  const [state, setState] = useState<Values>(initialState);

  function changeFieldValue(fieldName: keyof Values) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, [fieldName]: e.target.value }));
    };
  }

  function reset() {
    setState(initialState);
  }

  return {
    values: state,
    setForm: setState,
    resetForm: reset,
    changeFieldValue,
  };
}

export default useForm;
