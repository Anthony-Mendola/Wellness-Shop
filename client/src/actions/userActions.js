
//this action will be called from a button in NewAccount
export function createUser() {
  return dispatch => {
    dispatch({ type: "SIGN_UP" });
    let userForm = new FormData(document.getElementById("user-form"));
    return fetch("/api/users", {
      method: "POST",
      body: userForm,
      credentials: "same-origin"
    }).then(resp => authenticate(resp, dispatch));
  };
}

export function updateUser(props) {
  return dispatch => {
    dispatch({ type: "UPDATE_USER" });
    let userForm = new FormData(document.getElementById("user-form"));
    return fetch(`/api/users/${props.user.id}`, {
      method: "POST",
      body: userForm,
      credentials: "same-origin"
    }).then(resp => authenticate(resp, dispatch));
  };
}

export function loginUser() {
  return dispatch => {
    dispatch({ type: "LOG_IN" });
    let loginForm = new FormData(document.getElementById("login-form"));
    return fetch("/api/sessions", {
      method: "POST",
      body: loginForm,
      credentials: "same-origin"
    }).then(resp => authenticate(resp, dispatch));
  };
}

function authenticate(resp, dispatch) {
  if (resp.status === 201) {
    resp
      .json()
      .then(user =>
        dispatch({
          type: "LOGIN_USER",
          payload: user
        })
      )
      .then((window.location = "/"));
  } else {
    alert("Invalid username or password");
  }
}

export function logoutUser() {
  return dispatch => {
    const user = {};
    dispatch({
      type: "LOGOUT_USER",
      payload: user
    }).then((window.location = "/"));
  };
}

export function addToCart() {
  return dispatch => {
    dispatch({ type: "ADDING_ITEM" });
    let cartAddForm = new FormData(document.getElementById("add-to-cart"));
    return fetch("/api/cart_items", {
      method: "POST",
      body: cartAddForm,
      credentials: "same-origin"
    })
      .then(resp => resp.json())
      .then(cart =>
        dispatch({
          type: "UPDATE_CART",
          payload: cart
        })
      );
  };
}

export function deleteFromCart(props) {
  return dispatch => {
    dispatch({ type: "DELETE_ITEM" });
    let cartDeleteForm = new FormData(
      document.getElementById(`delete-from-cart-${props.itemID}`)
    );
    return fetch(`/api/cart_items/${props.cartId}/${props.itemId}`, {
      method: "POST",
      body: cartDeleteForm,
      credentials: "same-origin"
    })
      .then(resp => resp.json())
      .then(cart =>
        dispatch({
          type: "UPDATE_CART",
          payload: cart
        })
      );
  };
}

export function checkoutCart(props) {
  return dispatch => {
    dispatch({ type: "CHECK_OUT" });
    let checkoutForm = new FormData(document.getElementById("checkout-cart"));
    return fetch(`/api/carts/${props.cartId}`, {
      method: "POST",
      body: checkoutForm,
      credentials: "same-origin"
    })
      .then(resp => resp.json())
      .then(cart =>
        dispatch({
          type: "UPDATE_CART",
          payload: cart
        })
      )
      .then(
        setTimeout(function () {
          window.location.href = "/confirmation"; //loads confirmation page after checkout
        }, 500)
      );
  };
}

//To send credentials if the request URL is on the same origin as the calling script, add credentials: 'same-origin'