import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase/index";
import {
  // deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export default function Register() {
  let [file, setFile] = useState(null);
  let [name, setName] = useState("");
  let [photoURL, setPhotoURL] = useState(null);
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let navigate = useNavigate();
  let { user } = useContext(authContext);

  useEffect(() => {
    setName(user?.displayName);
    setPhotoURL(user?.photoURL);
    setEmail(user?.email);
  }, []);

  let handleProfileImageChange = (event) => {
    setFile(event.target.files[0]);
  };

  let previewImage = async (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let profileImage = document.getElementById("profileImage");
      profileImage.src = reader.result;
    };

    // Delete the file
    // if (user?.photoURL) {
    //   const desertRef = ref(storage, "profiles/" + user?.photoURL);
    //   await deleteObject(desertRef);
    // }

    // Upload new file
    // let path = "profiles/" + Date.now().toString() + "_" + file.name;
    let path = "profiles/" + user?.uid;
    let storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    let url = await getDownloadURL(storageRef);
    setPhotoURL(url);
  };
  useEffect(() => {
    if (file) {
      previewImage(file);
    }
  }, [file]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white dark:bg-darkCard p-8 mb-10"
    >
      <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 dark:text-white">
        Update your profile
      </h1>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Profile Image
        </label>
        <img
          className="w-24 h-24 my-2 rounded-full border border-black cursor-pointer"
          id="profileImage"
          src={
            photoURL
              ? photoURL
              : `https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg`
          }
        ></img>
        <input
          type="file"
          onChange={handleProfileImageChange}
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm leading-7 text-gray-600 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full rounded border border-gray-300 bg-white dark:bg-darkSecondary py-1 px-3 text-base leading-8 text-gray-700 dark:text-white outline-none"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {!loading && (
        <button
          type="submit"
          className="rounded border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none"
        >
          Update Profile
        </button>
      )}

      {!!loading && (
        <button className="rounded cursor-not-allowed border-0 bg-violet-600 py-2 px-6 text-lg text-white hover:bg-violet-700 focus:outline-none">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading ...
        </button>
      )}
    </form>
  );
}
