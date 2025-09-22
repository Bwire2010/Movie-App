import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page"; 
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { act } from "react";


// Mock hooks
jest.mock("@/hooks/useMovies", () => ({
  usePopularMovies: jest.fn(),
  useSearchMovies: jest.fn(),
}));

// Mock child components to simplify rendering
jest.mock("@/components/MovieCard", () => ({ movie }: any) => (
  <div data-testid="movie-card">{movie.title}</div>
));
jest.mock("@/components/Pagination", () => (props: any) => (
  <div data-testid="pagination">Page {props.page}</div>
));
jest.mock("@/components/Loader", () => () => <div>Loading...</div>);
jest.mock("@/components/HeroScroller", () => () => <div>HeroScroller</div>);
jest.mock("@/components/SearchBar", () => ({ onSearch }: any) => (
  <input
    placeholder="Search movies"
    onChange={(e) => onSearch(e.target.value)}
  />
));
jest.mock("@/components/LoginForm", () => () => <div>Login Form</div>);

import { usePopularMovies, useSearchMovies } from "@/hooks/useMovies";

// Wrapper that allows us to trigger login after render
const WithLogin = ({ children }: { children: React.ReactNode }) => {
  const { login } = useAuth();

  return (
    <>
      <button onClick={() => login("user@example.com")}>Login</button>
      {children}
    </>
  );
};

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders LoginForm when not logged in", () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: { results: [] },
      isLoading: false,
      isError: false,
    });

    (useSearchMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });

    render(
      <AuthProvider>
        <Home />
      </AuthProvider>
    );

    expect(screen.getByText(/Login Form/i)).toBeInTheDocument();
  });

  test("renders movies when logged in", () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: { results: [{ id: 1, title: "Movie A" }], total_pages: 5 },
      isLoading: false,
      isError: false,
    });

    (useSearchMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });

    render(
      <AuthProvider>
        <WithLogin>
          <Home />
        </WithLogin>
      </AuthProvider>
    );

    // simulate login
    act(() => {
      screen.getByText("Login").click();
    });

    expect(screen.getByText(/HeroScroller/i)).toBeInTheDocument();
    expect(screen.getByTestId("movie-card")).toHaveTextContent("Movie A");
    expect(screen.getByTestId("pagination")).toHaveTextContent("Page 1");
  });

  test("shows loader while loading", () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    (useSearchMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });

    render(
      <AuthProvider>
        <WithLogin>
          <Home />
        </WithLogin>
      </AuthProvider>
    );

    act(() => {
      screen.getByText("Login").click();
    });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test("shows error message on failure", () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    (useSearchMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });

    render(
      <AuthProvider>
        <WithLogin>
          <Home />
        </WithLogin>
      </AuthProvider>
    );

    act(() => {
      screen.getByText("Login").click();
    });

    expect(screen.getByText(/Failed to load movies/i)).toBeInTheDocument();
  });

  test("handles search query", () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: { results: [{ id: 1, title: "Popular Movie" }], total_pages: 5 },
      isLoading: false,
      isError: false,
    });

    (useSearchMovies as jest.Mock).mockReturnValue({
      data: { results: [{ id: 2, title: "Searched Movie" }], total_pages: 3 },
      isLoading: false,
      isError: false,
    });

    render(
      <AuthProvider>
        <WithLogin>
          <Home />
        </WithLogin>
      </AuthProvider>
    );

    act(() => {
      screen.getByText("Login").click();
    });

    const input = screen.getByPlaceholderText(/Search movies/i);
    fireEvent.change(input, { target: { value: "Avengers" } });

    expect(screen.getByTestId("movie-card")).toHaveTextContent("Searched Movie");
  });
});
