export const checkValidData = (email: string, password: string) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const isFullNameValid = true;
  if (!isEmailValid) return "Email id not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isFullNameValid) return "Full Name not valid";
  return null;
};
