import { useState } from "react";
import { useCrud, createItem, deleteItem, updateItem } from "react-smart-crud";

export default function UserPage() {
  const { data: users, loading, error, refetch } = useCrud("users");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  // CREATE
  const handleCreate = async () => {
    if (!name || !email) return alert("Fill all fields!");

    try {
      await createItem("users", {
        name,
        email,
      });

      setName("");
      setEmail("");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteItem("users", id);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT (fill input)
  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      await updateItem("users", editId, {
        name,
        email,
      });

      setEditId(null);
      setName("");
      setEmail("");

      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>

      {/* INPUT */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {editId ? (
          <button onClick={handleUpdate}>✏️ Update User</button>
        ) : (
          <button onClick={handleCreate}>➕ Add User</button>
        )}
      </div>

      {/* LIST */}
      <ul>
        {users?.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => handleEdit(u)} style={{ marginLeft: 10 }}>
              ✏️
            </button>
            <button
              onClick={() => handleDelete(u.id)}
              style={{ marginLeft: 5 }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
