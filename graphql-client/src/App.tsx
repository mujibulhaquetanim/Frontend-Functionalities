import "./App.css";
import { gql, useQuery } from "@apollo/client";

interface User {
  name: string;
  id: number;
  phone: string;
}

interface Todo {
  title: string;
  id: number;
  user: User;
}

const query = gql`
  query TodosUser {
    getTodos {
      title
      id
      user {
        name
        id
        phone
      }
    }
  }
`;
function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
