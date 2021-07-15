import { useDispatch } from "react-redux";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Input, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const AddUser = ({ handleClick }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  const handleAddUser = useCallback(
    (data) => {
      dispatch({ type: "ADD_USER", user: data.username });
      handleClick("game-difficulty");
    },
    [dispatch, handleClick]
  );

  const handleCloseModal = useCallback(() => {
    setShowForm(!showForm);
  }, [setShowForm, showForm]);

  return (
    <div className={`add-user`}>
      <div onClick={() => setShowForm(!showForm)} className={`add-new-user`}>
        <FontAwesomeIcon icon={faPlus} invert={"true"} />
      </div>
      <div
        className={`form-drawer-backdrop ${showForm && "active"}`}
        onClick={handleCloseModal}
      ></div>
      <div className={`form-drawer ${showForm && "active"}`}>
        <form
          id={`add-user-form`}
          onSubmit={handleSubmit(handleAddUser)}
          noValidate
        >
          <Input
            {...register("username", { required: true })}
            placeholder={`Username`}
          />
          <Button variant="contained" color="secondary" type={"submit"}>
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
