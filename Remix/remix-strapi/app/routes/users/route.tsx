
export default function User() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">List of Users</h1>
        <ul className="flex flex-col gap-2 mt-2">
          <li className="hover:underline">
            <a href="/users/1">User 1</a>
          </li>
          <li className="hover:underline">
            <a href="/users/2">User 2</a>
          </li>
          <li className="hover:underline">
            <a href="/users/3">User 3</a>
          </li>
        </ul>
      </div>
    </>
  );
}
