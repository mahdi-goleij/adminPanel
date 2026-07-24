import { useEffect, useState } from "react";
import { SvgSearch } from "../../../../icons/SvgSearch";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePickerModule from "react-multi-date-picker";
import { useSearchParams } from "react-router-dom";

export const ProductFilter = () => {
  const DatePicker = DatePickerModule.default;
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    search: searchParams.get("search") || "",
    status: searchParams.get("status") || "all",
    start: searchParams.get("start") || "",
    end: searchParams.get("end") || "",
  });

  // برای بررسی معتبر بودن مقادیر برای اضافه شدن به دامین
  useEffect(() => {
    let validParams = {};
    for (let key in filter) {
      let value = filter[key];
      if (value) {
        validParams[key] = value;
      }
    }
    setSearchParams(validParams);
  }, [filter]);

  const handleStatus = (newStatus) => {
    setFilter((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setFilter((prev) => ({
      ...prev,
      search: newSearch,
    }));
  };

  const handleDate = (value) => {
    if (Array.isArray(value) && value?.[1]) {
      let start = value[0];
      let end = value[1];
      setFilter((prev) => ({
        ...prev,
        start: start?.format("YYYY/MM/DD"),
        end: end?.format("YYYY/MM/DD"),
      }));
    }
  };

  // useEffect(()=>{

  // },[value])

  return (
    <>
      <div className="product-filter">
        <div className="product-filter-search">
          <input
            value={filter?.search}
            onChange={handleSearch}
            type="text"
            placeholder="جست‌و‌جوی محصول..."
          />
          <div className="">
            <SvgSearch />
          </div>
        </div>
        <div className="product-filter-status">
          <button
            onClick={() => handleStatus("active")}
            className={`product-filter-status-btn ${
              filter?.status === "active" && "product-filter-status-btn-active"
            }`}
          >
            فعال
          </button>
          <button
            onClick={() => handleStatus("deactive")}
            className={`product-filter-status-btn ${
              filter?.status === "deactive" &&
              "product-filter-status-btn-active"
            }`}
          >
            غیر فعال
          </button>
          <button
            onClick={() => handleStatus("all")}
            className={`product-filter-status-btn ${
              filter?.status === "all" && "product-filter-status-btn-active"
            }`}
          >
            همه
          </button>
        </div>
        <div className="product-filter-date">
          <DatePicker
            placeholder="انتخاب بازه زمانی"
            range
            value={[filter?.start, filter?.end]}
            onChange={handleDate}
            calendar={persian}
            locale={persian_fa}
          />
        </div>
      </div>
    </>
  );
};
