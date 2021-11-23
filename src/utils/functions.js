export const validate = (values) => {
  let errors = {};
  // only numbers RegEx
  let onlyNumbersReg = /^\d+$/;
  // only letters RegEx
  let onlyLettersReg = /^[a-zA-Z]+$/;

  if (!onlyLettersReg.test(values.name.trim())) {
    errors.name = 'Only letters allowed';
  }

  if (!values.name.trim()) {
    errors.name = 'This field is required';
  }

  if (values.number.length !== 12) {
    errors.number = 'Should contain 12 characters';
  }

  if (!onlyNumbersReg.test(values.number)) {
    errors.number = 'Only numbers allowed';
  }

  if (!values.number.trim()) {
    errors.number = 'This field is required';
  }

  return errors;
};
