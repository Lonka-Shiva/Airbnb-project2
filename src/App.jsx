import Navbar from "./Components/Navbar";
import Center from "./Components/Center";
import Card from "./Components/Card";
import Data from "./Components/Data";
export default function App() {
  const cardData = Data.map((item) => {
    // now cardData is equal to Card component ok dont confuseok -- read it so what u did is
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <Center />
      <section className="cards-list">{cardData}</section>
    </>
  );
}
