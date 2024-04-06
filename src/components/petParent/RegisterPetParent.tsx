import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from "./pets1.jpg";
import './RegisterPetParent.css';



const initialValues = {
  name: '',
  email: '',
  password: '',
  username: '',
  pincode: '',
  city: '',
  petAge: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  pincode: Yup.string().required('Pincode is required'),
  city: Yup.string().required('Pet type is required'),
  username: Yup.string().min(5,'username must be at least 5 character long')
    .required('Username is required')
    .test('is-unique', 'Username already exists', async function (value) {
      // Simulate checking username uniqueness (replace with actual API call)
      return new Promise(resolve => {
        setTimeout(() => {
          const existingUsernames = ['existing_username1', 'existing_username2']; // Replace with actual list of existing usernames
          const isUnique = !existingUsernames.includes(value);
          resolve(isUnique);
        }, 1000); 
      });
    })
});

const RegisterPetParent = () => {
  return (
    <div className="flex">
      <div className="w-1/2  bg-center m-4"style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      </div>

      {/* Right Half - Form */}
      <div className="w-1/2 p-8 bg-purple-300">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <form className="max-w-md mx-auto bg-purple-400 shadow-2xl rounded-lg px-10 pt-6 pb-8 mb-5">
              <h1 className="text-3xl font-bold text-center text-purple-900 mb-6 font-pacifico">Pet Parent Registration</h1>

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
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <Field type="username" id="username" name="username" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* Pincode */}
              <div className="mb-4">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                 Pincode
                </label>
                <Field type="text" id="pincode" name="pincode" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="pincode" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              {/* city */}
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <Field type="text" id="city" name="city" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
              </div>

            

              {/* Submit Button */}
              <button type="submit" className="w-full bg-purple-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ease-in-out" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPetParent;
