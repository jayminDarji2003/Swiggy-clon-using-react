import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  function handleBtn() {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <div className="border-2 border-black p-2 container mx-auto my-4 rounded-m">
      <h1 className="font-bold text-lg">{title}</h1>
      <button
        onClick={handleBtn}
        className="bg-orange-400 p-1 px-3 rounded-lg text-white font-bold"
      >
        {isVisible ? "HIDE" : "SHOW"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

function Instamart() {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <>
      <h1 className="text-2xl text-center py-3 font-bold">Instamart Page</h1>
      <Section
        title={"Instamart About"}
        description={
          "This is instamart About section : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit quis reiciendis itaque minus et sequi quasi quibusdam. Odio vel rem ratione dolorum dignissimos modi corrupti quam. Dignissimos tempora atque natus, tenetur quae ipsum? Rem at ad vel animi numquam aliquid repellendus aut perspiciatis, doloribus eligendi quod provident porro laborum? "
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Instamart Carees"}
        description={
          "This is instamart Team section :  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit quis reiciendis itaque minus et sequi quasi quibusdam. Odio vel rem ratione dolorum dignissimos modi corrupti quam. Dignissimos tempora atque natus, tenetur quae ipsum? Rem at ad vel animi numquam aliquid repellendus aut perspiciatis, doloribus eligendi quod provident porro laborum?"
        }
        isVisible={visibleSection === "carees"}
        setIsVisible={() => setVisibleSection("carees")}
      />
      <Section
        title={"Instamart Products"}
        description={
          "This is instamart About section : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit quis reiciendis itaque minus et sequi quasi quibusdam. Odio vel rem ratione dolorum dignissimos modi corrupti quam. Dignissimos tempora atque natus, tenetur quae ipsum? Rem at ad vel animi numquam aliquid repellendus aut perspiciatis, doloribus eligendi quod provident porro laborum? "
        }
        isVisible={visibleSection === "products"}
        setIsVisible={() => setVisibleSection("products")}
      />
      <Section
        title={"Instamart Team"}
        description={
          "This is instamart Team section :  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit quis reiciendis itaque minus et sequi quasi quibusdam. Odio vel rem ratione dolorum dignissimos modi corrupti quam. Dignissimos tempora atque natus, tenetur quae ipsum? Rem at ad vel animi numquam aliquid repellendus aut perspiciatis, doloribus eligendi quod provident porro laborum?"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
    </>
  );
}

export default Instamart;
