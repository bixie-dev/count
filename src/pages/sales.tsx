/* eslint-disable */
import { SalesChoose, SalesTb } from "../components/Sales";
// import Logo from "../logo/logo";

const Sales = () => {
  return (
    <div className="p-4 mx-8">
      <div className="w-[60px]  xs:w-[60px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] mx-12 my-6">
        <img src={"/assets/images/logo.png"} alt="logo page" />
      </div>
      <div className="px-24 mb-12 flex grid-cols-2 gap-4 md:gap-16 justify-center">
        <SalesChoose children={{ sale_name: "Einnahme", price: 50000 }} />
        <SalesChoose children={{ sale_name: "Materialkosten", price: 50000 }} />
        <SalesChoose
          children={{ sale_name: "Mitarbeiterkosten", price: 50000 }}
        />
        <SalesChoose children={{ sale_name: "Gewinn", price: 50000 }} />
      </div>
      <div className="text-[14px] px-16">
        <table className="w-full text-[20px] text-left">
          <thead>
            <tr>
              <th>Bauvorhaben</th>
              <th>Einnahme[€]</th>
              <th>Materialkosten[€]</th>
              <th>Mitarbeiterkosten[€]</th>
              <th>Gewinn[€]</th>
            </tr>
          </thead>
          <tbody>
            <SalesTb
              tb={{
                construction: {
                  street: "Bruchhausenerstraße",
                  city: "ddd",
                  country: "sdd",
                },
                revenue: 50000,
                m_costs: 1000,
                e_costs: 5000,
                profit: 46400,
              }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
