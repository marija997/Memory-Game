import Button from "components/button";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "../addUser";

const UserSelection = ({ handleClick }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleUserSelection = useCallback(
    (user) => {
      dispatch({ type: "SET_ACTIVE_USER", user });
      handleClick("game-difficulty");
    },
    [dispatch, handleClick]
  );

  return (
    <div className={`user-selection`}>
      <div className={`section-title`}>
        <h2>Please select user</h2>
        <AddUser handleClick={handleClick} />
      </div>
      <div className={`users`}>
        {users?.map((user) => {
          return (
            <Button
              key={`users-list-${user.id}`}
              to={""}
              text={user.username}
              handleClick={() => handleUserSelection(user)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default UserSelection;
