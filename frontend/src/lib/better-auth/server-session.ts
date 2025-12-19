import { cookies } from "next/headers";
import { UserWithSession } from "./auth-types";

const getServerSession = async (): Promise<UserWithSession | null> => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const backendUrl = process.env.INTERNAL_BACKEND_URL || "https://telemonetize.onrender.com";

    const response = await fetch(`${backendUrl}/api/v1/user/session`, {
      method: "GET",
      headers: {
        Cookie: cookieHeader,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error in getting session: ", err);
    return null;
  }
};

export default getServerSession;