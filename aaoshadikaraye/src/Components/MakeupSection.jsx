import MakeupPost from "./MakeupPost";
const Makeup = ({ makeUpdata }) => {
  return (
    <div className="w3-container">
      <br></br>
      <br></br>
      <h2>Makeup</h2>

      <div className={StyleSheet.cardContainer}>
        {makeUpdata.map((data) => (
          <MakeupPost data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};
export default Makeup;
