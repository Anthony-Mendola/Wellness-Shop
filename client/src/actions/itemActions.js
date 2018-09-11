export function fetchItems() {
  return dispatch => {
    dispatch({ type: "LOADING_ITEMS" });
    return fetch("/api/items")
      .then(resp => resp.json())
      .then(items =>
        dispatch({
          type: "FETCH_ITEMS",
          payload: items
        })
      );
  };
}
