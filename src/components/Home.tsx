const Home = (props: { seasonNotesOpen: any }) => {
  const seasonNotesOpen = () => {
    props.seasonNotesOpen();
  };
  return (
    <>
      <p className="text-sm text-left w-72">
        “The man who has no imagination has no wings.” – Muhammad Ali
      </p>
      <h1 className="pt-6 text-lg text-left font-bold">Logbook</h1>
      <button onClick={seasonNotesOpen}>Goals & Achievements</button>
      <p></p>
    </>
  );
};

export default Home;
