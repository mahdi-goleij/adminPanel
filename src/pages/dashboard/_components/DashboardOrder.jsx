export const DashboardOrder = () => {
  return (
    <>
      <div className="dash-right-bottom-order">
        {fakeData.map((item,index) => 
        <div key={index} className="dash-right-bottom-order-item">
            <div className="dash-right-bottom-order-item-right">
                <img src={item.img} alt={item.name} />
                <div>
                    <p>{item.name}</p>
                    <span>16 فروردین</span>
                </div>
            </div>
            <div className="dash-right-bottom-order-item-left">{item.profit}</div>
        </div>
        )}
      </div>
    </>
  );
};

let fakeData = [
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-2.jpg",
    name: "مریم حیدری",
    profit: "23.65",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-3.jpg",
    name: "الناز حبیبی",
    profit: "45.76",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-4.jpg",
    name: "نازنین نادری",
    profit: "76.32",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-5.jpg",
    name: "مبینا قاسمی",
    profit: "87.90",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-6.jpg",
    name: "مهشید نادری",
    profit: "65.76",
  },
  {
    img: "https://fasto.dexignzone.com/php/demo/assets/images/kanban/Untitled-7.jpg",
    name: "خاور مشایخی",
    profit: "43.65",
  },
];
