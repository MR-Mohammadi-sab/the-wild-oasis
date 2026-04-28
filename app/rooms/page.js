export const metadata={
  title:"Rooms"
}
export default async function page() {
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const users=await res.json()
  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
