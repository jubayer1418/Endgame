import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Google = () => {
  const { handlegoogle, setLoading } = useContext(AuthContext);
  const navigete = useNavigate();
  const handlegooglelogin = () => {
    handlegoogle()
      .then((result) => {
        const name = result.user.displayName;
        console.log(name);
        const email = result.user.email;
        const role = "student";
        const img = result.user.photoURL;
        const saveUser = { name, email, role, img };
        fetch(`${import.meta.env.VITE_SERVER_LINK}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }).catch((err) => {
          setLoading(false);
          console.log(err.message);
        });

        navigete("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <span
      onClick={handlegooglelogin}
      className="bg-[#397dfd] hover:text-white hover:bg-[#3072ee] flex items-center justify-center cursor-pointer  text-[#110C04] font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
    >
      <FaGoogle></FaGoogle>
      <span className="ml-2">Sign in with Google</span>
    </span>
  );
};

export default Google;
