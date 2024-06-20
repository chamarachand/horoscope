import { AdminNavBar } from "./AdminNavbar";

export const AdminDashboard = () => {
  return (
    <>
      <AdminNavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>Welcome Admin</h1>
        <p>This page is under construction</p>
      </div>
    </>
  );
};
