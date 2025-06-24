export const checkValidate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   const isNameBoxNotEmpty = /^[a-zA-Z ]{2,}$/.test(nameBox);
  // const isNameBoxNotEmpty = nameBox !== "" || null;

  // if (!isNameBoxNotEmpty)
  //   return "Entered Name is not valid, Please enter valid name";
  if (!isEmailValid) return "Email Id is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
