// XSS pattern detection
const XSS_PATTERNS = [
  /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<object/gi,
  /<embed/gi,
];

const containsXSS = (value) => {
  return XSS_PATTERNS.some((pattern) => pattern.test(value));
};

export const emailValidator = (email) => {
  if (!email) return "Email is required";

  // Check for XSS attempts
  if (containsXSS(email)) return "Invalid email format";

  // More robust email regex
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) return "Please enter a valid email address";
  if (email.length > 254) return "Email is too long";

  return "";
};

export const nameValidator = (name) => {
  if (!name) return "Name is required";

  // Check for XSS attempts
  if (containsXSS(name)) return "Invalid characters in name";

  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 100) return "Name is too long";

  // Allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) return "Name contains invalid characters";

  return "";
};

export const messageValidator = (message) => {
  if (!message) return "Message is required";

  // Check for XSS attempts
  if (containsXSS(message)) return "Message contains invalid content";

  if (message.length < 10)
    return "Please enter a message of at least 10 characters";
  if (message.length > 2000)
    return "Message is too long (maximum 2000 characters)";

  return "";
};
