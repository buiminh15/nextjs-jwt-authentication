import { authService } from "@/services/authService";
import React, { useEffect } from "react";

function ProfilePage() {
  const fetchProfile = async () => {
    try {
      const profile = await authService.getProfile();
      console.log("📢 [profile.tsx:8]", profile);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return <div>ProfilePage</div>;
}

export default ProfilePage;
