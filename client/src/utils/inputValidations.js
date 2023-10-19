export const firstname_validation = {
  name: 'firstname',
  label: 'Firstname',
  type: 'text',
  id: 'firstname',
  placeholder: 'John',
  validation: {
    required: {
      value: true,
      message: 'First name is required.',
    },
    minLength: {
      value: 2,
      message: 'You need more than two characters.',
    },
    maxLength: {
      value: 30,
      message: '30 characters max.',
    },
  },
};

export const lastname_validation = {
  name: 'lastname',
  label: 'Lastname',
  type: 'text',
  id: 'lastname',
  placeholder: 'Doe',
  validation: {
    required: {
      value: true,
      message: 'Last name is required.',
    },
    minLength: {
      value: 2,
      message: 'You need more than two characters.',
    },
    maxLength: {
      value: 30,
      message: '30 characters max.',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'Email',
  type: 'email',
  id: 'email',
  placeholder: 'example@gmail.com',
  validation: {
    required: {
      value: true,
      message: 'Email is required.',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
};

export const password_validation = {
  name: 'password',
  label: 'Password',
  type: 'password',
  id: 'password',
  placeholder: '••••••••',
  validation: {
    required: {
      value: true,
      message: 'Password is required.',
    },
    minLength: {
      value: 4,
      message: 'Password has to be over 4 characters.',
    },
  },
};

export const confirmPassword_validation = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  id: 'confirmPassword',
  placeholder: '••••••••',
};
