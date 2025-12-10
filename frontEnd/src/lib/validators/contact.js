export const emailValidator = (email) => {
  if (!email) return "Email is required";
  if (!/\S+@\S+\.\S+/.test(email)) return "Enter a valid Email";
  return "";
};

export const nameValidator = (name) => {
  if (!name) return "Name is required";
  return "";
};

export const messageValidator = (message) => {
  if (!message) return "Message is required";
  if (message.length < 10)
    return "Please enter a message of at least 10 characters";
  return "";
};
