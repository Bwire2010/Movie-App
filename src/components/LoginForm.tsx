// "use client";

// import { useState } from "react";
// import { useAuth } from "@/contexts/AuthContext";

// export default function LoginForm() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       setError("Please enter a valid email.");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     login(email); // Demo: no real backend
//   };

//   return (
//     <div id="login" className="w-full max-w-md mx-auto mt-8 bg-white p-6 rounded-xl h-screen shadow-md">
//       <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
//       <p className="text-gray-600 mb-6">Enjoy access to movie recommendations</p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Email address</label>
//           <input
//             type="email"
//             className="w-full mt-1 px-3 py-2 border rounded-lg"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full mt-1 px-3 py-2 border rounded-lg"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
//         >
//           Sign In
//         </button>
//       </form>

//       <p className="text-gray-500 text-sm mt-4">Demo: Use any email and password (min 6 chars)</p>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login(email); // Demo: no real backend
  };

  return (
    <div
      id="login"
      className="flex items-center justify-center h-[80vh]  px-4"
    >
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Sign in to your account
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enjoy access to movie recommendations
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Demo: Use any email and password (min 6 chars)
        </p>
      </div>
    </div>
  );
}
