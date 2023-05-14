import * as Yup from 'yup';

const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ ;

const VSLoginUser = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().matches(regPassword).required()
});

export default VSLoginUser;