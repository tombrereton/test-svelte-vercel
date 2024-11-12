import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = { name: "John Doe", email: "hello@email.com" };
  // todo only return user, not token

  return {
    session,
  };
};
