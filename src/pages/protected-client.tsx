import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>This is your protected page on the client.</p>
      {/* Other user-specific JSX components/data can be added here */}
    </div>
  );
}
