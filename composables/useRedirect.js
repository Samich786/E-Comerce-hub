// composables/useRedirect.js
import { useRouter } from "#app";

export function useRedirect() {
  const router = useRouter();

  const redirectToLogin = () => {
    // Use router to navigate to login page
    router.push("/auth/login");
  };

  return { redirectToLogin };
}
