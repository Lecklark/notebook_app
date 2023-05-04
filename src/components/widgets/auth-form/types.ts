export type AuthFormValues = {
  email: string;
  password: string;
};

export type AuthFormProps = {
  btnText: string;
  onSubmit: (values: AuthFormValues) => void;
};
