import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";

const setup = () =>
  render(
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );

test("renders login form", () => {
  setup();
  expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();
});

test("shows error for invalid email", () => {
  setup();

  fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
    target: { value: "invalidEmail" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
    target: { value: "123456" },
  });

  // Important: trigger form submit
  fireEvent.submit(screen.getByRole("button", { name: /Sign In/i }));

  expect(
    screen.getByText("Please enter a valid email")
  ).toBeInTheDocument();
});
