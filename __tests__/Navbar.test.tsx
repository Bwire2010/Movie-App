import { render, screen } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

test("shows Sign In when not logged in", () => {
  render(
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );

  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});

test("shows user dropdown when logged in", () => {
  const Wrapper = () => {
    const { login } = useAuth();

    useEffect(() => {
      login("test@example.com");
    }, [login]);

    return <Navbar />;
  };

  render(
    <AuthProvider>
      <Wrapper />
    </AuthProvider>
  );

  expect(screen.getByText(/Welcome, test/i)).toBeInTheDocument();
});
