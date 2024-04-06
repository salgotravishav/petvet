import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from "./pets2.jpg";

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  clinicName: '',
  clinicAddress: '',
  licenseNumber: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  clinicName: Yup.string().required('Clinic name is required'),
  clinicAddress: Yup.string().required('Clinic address is required'),
  licenseNumber: Yup.string().required('License number is required'),
});

const RegistrationForm = () => {
  return (
    <div className="flex">
     
      <div className="w-1/2 p-8 bg-orange-200">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <form className="max-w-md mx-auto bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-300">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 font-pacifico text-orange-700">Veterinarian Registration</h1>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Field type="text" id="name" name="name" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field type="email" id="email" name="email" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field type="password" id="password" name="password" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Field type="password" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Clinic Name */}
              <div className="mb-4">
                <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700">
                  Clinic Name
                </label>
                <Field type="text" id="clinicName" name="clinicName" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="clinicName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Clinic Address */}
              <div className="mb-4">
                <label htmlFor="clinicAddress" className="block text-sm font-medium text-gray-700">
                  Clinic Address
                </label>
                <Field type="text" id="clinicAddress" name="clinicAddress" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="clinicAddress" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* License Number */}
              <div className="mb-4">
                <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                  License Number
                </label>
                <Field type="text" id="licenseNumber" name="licenseNumber" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="licenseNumber" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-orange-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300 ease-in-out" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </Formik>
      </div>

      {/* Right Half - Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
  );
};

export default RegistrationForm;
