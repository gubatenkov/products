import { useState, useEffect } from 'react';

export const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProducts(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getProducts(url);
  }, [url]);

  return [products, isLoading, isError];
};

export const useForm = (validate, callback) => {
  const [errors, setErrors] = useState({ name: '', number: '' });
  const [isFocused, setFocused] = useState({ name: false, number: false });
  const [values, setValues] = useState({
    name: '',
    number: '',
  });

  const clearInput = (inputName) => {
    setValues((prev) => ({ ...prev, [inputName]: '' }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    setErrors(validate(values));

    // if no errors submit form
    if (Object.keys(errors).length === 0) {
      console.log(values);
      // clear modal fileds
      setValues({ name: '', number: '' });
      // close modal
      callback();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setFocused((prev) => ({ ...prev, [name]: true }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setFocused((prev) => ({ ...prev, [name]: false }));
    setErrors(validate(values));
  };

  return {
    values,
    errors,
    isFocused,
    onFocus,
    onBlur,
    clearInput,
    handleChange,
    handleSubmit,
  };
};
