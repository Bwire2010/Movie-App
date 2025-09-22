import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
);

test("logs in and logs out correctly", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
        result.current.login("test@example.com");
    });
    expect(result.current.user).toBe("test@example.com");

    act(() => {
        result.current.logout();
    });
    expect(result.current.user).toBe(null);
});
