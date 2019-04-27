const counterReducer = ({count}, action) => {
    switch (action.type) {
      case "increment":
        return { count: count + 1 };
      default:
        throw new Error();
    }
  };
  
  export default counterReducer;