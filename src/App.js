import React, { useRef, useState } from "react";

// conponents
import Hello from "./chap1/Hello";
import InputSample from "./chap1/InputSample";
import Wrapper from "./chap1/wrapper";
import UserList from "./chap1/UserList";
import CreateUser from "./chap1/CreateUser";

function App() {
  // for create user
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(5);
  const onCreate = () => {
    // add user
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    // init input values
    setInputs({
      username: "",
      email: "",
    });

    // increase index
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // delete user
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    console.log("asdf");
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, active: !user.active }
          : user
      )
    );
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "zxcv",
      email: "zxcv@zxcv1.com",
      active: true,
    },
    {
      id: 2,
      username: "zxcv2",
      email: "zxcv@zxcv2.com",
      active: false,
    },
    {
      id: 3,
      username: "zxcv3",
      email: "zxcv@zxcv3.com",
      active: false,
    },
    {
      id: 4,
      username: "zxcv4",
      email: "zxcv@zxcv4.com",
      active: false,
    },
  ]);

  return (
    <>
      <Wrapper>
        <Hello name="react" />
        <Hello name="zzzzz" />
      </Wrapper>
      <InputSample />

      <hr></hr>

      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
