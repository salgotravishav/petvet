import { Link } from "react-router-dom";
import backgroundImage from "./backgroundimage.jpg";

const Registration = () => {
  return (
    <div
      className="flex flex-col items-center h-screen bg-white text-black justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-8 font-pacifico">Welcome To PetVet - Where Every Paw Counts!</h1>
      <p className="text-xl font-bold mb-12">Choose your registration path:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/registration/pet-parent"
          className="rounded-lg shadow-md bg-black text-white hover:bg-purple-500 py-4 px-8 flex items-center justify-center text-xl font-bold"
        >
          Register as a Pet Parent
          <i className="fas fa-paw ml-4 text-2xl"></i>
        </Link>

        <Link
          to="/registration/veterinarian"
          className="rounded-lg shadow-md bg-black text-white hover:bg-orange-500 py-4 px-8 flex items-center justify-center text-xl font-bold"
        >
          Register as a Veterinarian
          <i className="fas fa-syringe ml-4 text-2xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
