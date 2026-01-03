import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import "./MyProfile.css";

export default function MyProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("/api/citizen/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => setProfile(res.data))
    .catch(err => console.error(err));
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-wrapper">
      <h2>My Profile</h2>

      <div className="profile-card">
        <ProfileRow label="Full Name" value={profile.name} />
        <ProfileRow label="Email" value={profile.email} />
        <ProfileRow label="Mobile" value={profile.phone} />
        <ProfileRow label="Address" value={profile.address} />
        <ProfileRow label="City" value={profile.city} />
        <ProfileRow label="State" value={profile.state} />
        <ProfileRow label="Role" value="Citizen" />
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="profile-row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
}
