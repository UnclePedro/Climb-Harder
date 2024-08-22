import { Fade } from "react-awesome-reveal";

interface Props {
  userYes: () => void;
  userNo: () => void;
}

const UserConfirmation = ({ userYes, userNo }: Props) => {
  return (
    <Fade duration={400}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div className="bg-[url('src/assets/SVG%20-%20Topographic%20Lines%2004.svg')] bg-cover font-bold rounded-lg p-5 flex flex-col items-center w-fit drop-shadow-lg">
          <p className="mb-4 text-center">You sure you wanna send it?</p>
          <div className="flex space-x-4">
            <button
              className="bg-amber-500 px-3 py-1 rounded"
              onClick={userYes}
            >
              Yes
            </button>
            <button
              className="bg-amber-500  px-3 py-1 rounded"
              onClick={userNo}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default UserConfirmation;
