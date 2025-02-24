import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    // setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((items) => {
        itemsActions.addinitialItem(items);
        // console.log("items fetched", items);
      });

    return () => {
      // console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
      <div>
        fetchDone: {fetchStatus.fetchDone}
        current fetch: {fetchStatus.currentfetch}
      </div>
    </>
  );
};

export default Fetchitems;
