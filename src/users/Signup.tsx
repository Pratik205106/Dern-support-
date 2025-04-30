import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Signup successful!");
  };

  return (
    <div className="bg-green-300 p-6 max-w-md mx-auto mt-10 rounded-lg shadow-md">
      <h1 className="text-yellow-700 text-3xl font-bold mb-6">Create your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "Please enter First Name" })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.firstName && <p className="text-red-600">{errors.firstName.message as string}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Please enter Last Name" })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.lastName && <p className="text-red-600">{errors.lastName.message as string}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Please enter Email" })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.email && <p className="text-red-600">{errors.email.message as string}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Please enter Password" })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.password && <p className="text-red-600">{errors.password.message as string}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", { required: "Please confirm your Password" })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message as string}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
