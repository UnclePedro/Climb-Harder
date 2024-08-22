interface Props {
  userYes: () => void;
  userNo: () => void;
}

const UserConfirmation = ({ userYes, userNo }: Props) => {
  return (
    <div className="bg-amber-500 font-bold rounded-lg p-3 flex w-fit">
      <p>You sure about that champ?</p>
      <button
        className=""
        onClick={() => {
          userYes();
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          userNo();
        }}
      >
        No
      </button>
    </div>
  );
};

export default UserConfirmation;
