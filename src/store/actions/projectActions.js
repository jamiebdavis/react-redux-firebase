export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    //make async call to database
    const firestore = getFireStore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Joe",
        authorLastName: "Bloggs",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
