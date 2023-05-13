import * as Yup from 'yup';

const VSCreateUser = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 leters!')
    .max(50)
    .required(),
  surname: Yup.string()
  .min(3)
  .max(50)
  .required()
});

export default VSCreateUser;