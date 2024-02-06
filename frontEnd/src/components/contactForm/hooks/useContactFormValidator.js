import { useState } from 'react';
import {
  emailValidator,
  nameValidator,
  messageValidator,
} from '../validators.js';

const touchErrors = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useContactFormValidator = (inputData) => {
  const [errors, setErrors] = useState({
    user_email: {
      dirty: false,
      error: false,
      message: '',
    },
    user_name: {
      dirty: false,
      error: false,
      message: '',
    },
    user_message: {
      dirty: false,
      error: false,
      message: '',
    },
  });

  const validateForm = ({
    inputData,
    field,
    errors,
    forceTouchErrors = false,
  }) => {
    let isValid = true;

    let nextErrors = JSON.parse(JSON.stringify(errors));

    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { user_email, user_name, user_message } = inputData;

    if (
      nextErrors.user_email.dirty &&
      (field ? field === 'user_email' : true)
    ) {
      const emailMessage = emailValidator(user_email, inputData);
      nextErrors.user_email.error = !!emailMessage;
      nextErrors.user_email.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }
    if (nextErrors.user_name.dirty && (field ? field === 'user_name' : true)) {
      const nameMessage = nameValidator(user_name, inputData);
      nextErrors.user_name.error = !!nameMessage;
      nextErrors.user_name.message = nameMessage;
      if (!!nameMessage) isValid = false;
    }
    if (
      nextErrors.user_message.dirty &&
      (field ? field === 'user_message' : true)
    ) {
      const userMessageMessage = messageValidator(user_message, inputData);
      nextErrors.user_message.error = !!userMessageMessage;
      nextErrors.user_message.message = userMessageMessage;
      if (!!userMessageMessage) isValid = false;
    }
    setErrors(nextErrors);
    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) {
      return;
    }
    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ inputData, field, errors: updatedErrors });
  };
  return { validateForm, onBlurField, errors };
};
