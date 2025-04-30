import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Login to your account
        </h1>

        <div className="mb-4">
          <label htmlFor="username" className="block font-medium text-lg mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Please enter username",
            })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message as string}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block font-medium text-lg mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Please enter password",
            })}
            className="w-full border p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message as string}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
