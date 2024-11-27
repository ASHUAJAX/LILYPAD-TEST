import Card from "./Card";

function CardMain() {
  const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

  ];
  return (
    <div className="mt-10 grid grid-cols-4 gap-5">
        {
            arr.map((elm,ix)=>(
                <Card key={ix} data={elm} />
            ))
        }
     
    </div>
  );
}

export default CardMain;
