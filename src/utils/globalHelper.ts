import { regex } from "@codeBase/src/common/regex";
import { Severity, Summary } from "@codeBase/src/enum/toastMessage.enum";
import { charSets } from "../common/charSets";

// It generates the properties for displaying a toast message.
const generateToastMessage = (
  severity: Severity,
  summary: Summary,
  detail: string,
  sticky: boolean = false
) => {
  if (!sticky) return { severity, summary, detail, sticky, life: 3000 };
  return { severity, summary, detail, sticky };
};

// It returns the properties for displaying an success toast message.
export const getAlertSuccess = (details: string, sticky = false) => {
  return generateToastMessage(
    Severity.SUCCESS,
    Summary.SUCCESS,
    details,
    sticky
  );
};

// It returns the properties for displaying an error toast message.
export const getAlertError = (details: string, sticky = false) =>
  generateToastMessage(Severity.ERROR, Summary.ERROR, details, sticky);

// It returns the properties for displaying an info toast message.
export const getAlertInfo = (details: string, sticky = false) =>
  generateToastMessage(Severity.INFO, Summary.INFO, details, sticky);

// It returns the properties for displaying an warn toast message.
export const getAlertWarn = (details: string, sticky = false) =>
  generateToastMessage(Severity.WARN, Summary.WARNING, details, sticky);

// Password validation for lowercase, uppercase, numeric, min length of 8 char
export const passwordValidation = (password: string) => {
  return {
    lowercase: regex.lowercase.test(password),
    uppercase: regex.uppercase.test(password),
    numeric: regex.numeric.test(password),
    minLength: regex.minLength.test(password),
  };
};

export const generateRandomPassword = (): string => {
  const requiredChars = Object.values(charSets).map(
    (set) => set[Math.floor(Math.random() * set.length)]
  );

  const allChars = Object.values(charSets).join("");
  const remainingLength = 8 - requiredChars.length;

  const remainingChars = Array.from(
    { length: remainingLength },
    () => allChars[Math.floor(Math.random() * allChars.length)]
  );

  const passwordArray = [...requiredChars, ...remainingChars];
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join("");
};
