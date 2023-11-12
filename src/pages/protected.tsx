import { clerkClient } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSidePropsContext } from "next";

type User = {
  id: string;
  firstName: string | null;
  lastName: string | null;
} | null;

type Props = {
  user: User;
};

const ProtectedPage = ({ user }: Props) => {
  if (!user) {
    return (
      <div>
        <p>Please log in to view this content.</p>
        {/* Optionally add a login button or redirect logic here */}
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>This is your protected page.</p>
      {/* Other user-specific JSX components/data can be added here */}
    </div>
  );
};

export default ProtectedPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    return { props: {} }; // This will pass an empty props object and the component will handle the "not logged in" state
  }

  const userFromClerk = userId ? await clerkClient.users.getUser(userId) : null;
  const user: User = userFromClerk
    ? {
        id: userFromClerk.id,
        firstName: userFromClerk.firstName,
        lastName: userFromClerk.lastName,
        // ... Add other necessary fields here
      }
    : null;

  return { props: { user, ...buildClerkProps(ctx.req) } };
};
