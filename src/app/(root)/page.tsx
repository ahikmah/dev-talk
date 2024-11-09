import { auth, signOut } from "auth";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { user } = (await auth()) || {};
  return (
    <div className="px-10 pt-[100px]">
      <h1 className="h1-bold">Hello, {user?.name}</h1>

      <form
        className="mt-5"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
}
