interface Movie {
    id: number;
    title: string;
    poster: string;
}

export const movies : Movie[] =  [
    {
      id: 1,
      title: "Inception",
      poster: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      title: "Interstellar",
      poster: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 4,
      title: "Django Unchained",
      poster: "https://picsum.photos/200/300/?blur=2",
    },
    {
      id: 5,
      title: "The Matrix",
      poster: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    },
    {
      id: 6,
      title: "Avatar",
      poster: "https://picsum.photos/200/300?grayscale",
    },
  ]; 

