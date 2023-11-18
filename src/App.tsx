import { useState } from "react";

// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello there! <span>I am an alert!!</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        hello!
      </Button>
    </div>
  );

  // const items = [
  //   "New York",
  //   "Paris",
  //   "London",
  //   "Berlin",
  //   "Rome",
  //   "Madrid",
  //   "Barcelona",
  // ];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
}

export default App;
