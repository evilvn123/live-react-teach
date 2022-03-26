import { useState } from "react";

// const Home = ({ name, address }) => {
//   const [value, setValue] = useState("something crazy");

//   // value = 5; // wrong
//   // setValue("Another word");
//   const func = () => {
//     setValue("Another word");
//   };
//   return (
//     <div>
//       <p onClick={func}>Tôi tên là {name}</p>
//       <p>Nhà tôi ở {address}</p>

//       {value}
//     </div>
//   );
// };

const Home = ({ name, address }) => {
  return (
    <div>
      <p>Tôi tên là {name}</p>
      <p>Nhà tôi ở {address}</p>
    </div>
  );
};

export default Home;
