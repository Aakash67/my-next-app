export default async function Users() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  const users = await response.json();

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "48px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#111827",
          marginBottom: "24px",
        }}
      >
        Users List (SSR)
      </h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "12px 16px",
              marginBottom: "8px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
              color: "#111827",
              fontSize: "15px",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}