import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced || !user) {
        return;
      }

      try {
        // Only collect user data, no backend request
        const userData = {
          clerkId: user.id,
          email: user.primaryEmail?.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
        };

        console.log("User synced locally (no backend):", userData);

        setSynced(true);
        // Optionally update credits or UI state here
      } catch (error) {
        console.error("User sync error:", error);
        // No toast shown since no backend
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, user, synced]);

  return null;
};

export default UserSyncHandler;
