import { useDispatch } from "react-redux";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Drawer, Input, Button } from "@material-ui/core";
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
        <FontAwesomeIcon icon={faPlus} invert />
      </div>
      <Drawer
        open={showForm}
        onClose={handleCloseModal}
        anchor={`bottom`}
        className={`add-user-drawer`}
      >
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
      </Drawer>
    </div>
  );
};

export default AddUser;
