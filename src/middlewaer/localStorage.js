export const localSave = (store) => (next) => (action) => {
  if (action.type === "movie/setComments") {
    let comment = {
      filmId: store.getState().movie.currentMovie.id,
      comments: [action.payload],
    };
    const setComment = (item) => {
      let prev = JSON.parse(localStorage.getItem("comment"));
      if (prev != null) {
        return JSON.stringify([...prev, item]);
      }
      return JSON.stringify([item]);
    };
    localStorage.setItem("comment", setComment(comment));
  }

  return next(action);
};
