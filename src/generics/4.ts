type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const initialUser: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };

  return { ...initialUser, ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
