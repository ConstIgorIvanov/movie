export const localSave = (store) => (next) => (action) => {
  if (action.type === "movie/setComments") {
    const id = store.getState().movie.currentMovie.id;
    let comment = {
      filmId: id,
      comments: {
        id: Math.random(),
        comment: [action.payload],
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    };
    const setComment = (item) => {
      if (item) {
        let prev = JSON.parse(localStorage.getItem("comment"));
        if (prev != null) {
          return JSON.stringify([...prev, item]);
        }
        return JSON.stringify([item]);
      }
    };
    localStorage.setItem("comment", setComment(comment));
  }

  return next(action);
};
