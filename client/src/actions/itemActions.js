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

export function fetchItem(props) {
  return dispatch => {
    dispatch({ type: "LOADING_ITEM" });
    return fetch(`/api/items/${props.itemId}`)
      .then(resp => resp.json())
      .then(item =>
        dispatch({
          type: "FETCH_ITEM",
          payload: item
        })
      );
  };
}

//Cleans up fetch code
export function cleanupItem() {
  return dispatch => {
    const item = {};
    dispatch({
      type: "CLEANUP_ITEM",
      payload: item
    });
  };
}
