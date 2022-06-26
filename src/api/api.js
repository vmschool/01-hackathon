const randomImages = [
  {
    url: "https://images.unsplash.com/photo-1653482027872-5e4ef81384d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQwNTU&ixlib=rb-1.2.1&q=80&w=1080",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1654511523180-4e1c9a28dcea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQwOTI&ixlib=rb-1.2.1&q=80&w=1080",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1653764890257-cec16b47ec18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQxMDQ&ixlib=rb-1.2.1&q=80&w=1080",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1654524146202-54a12a8a6726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQxMTg&ixlib=rb-1.2.1&q=80&w=1080",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1653755049908-b1a96911bf2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQxMzQ&ixlib=rb-1.2.1&q=80&w=1080",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1654773243379-7124ff85064f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyNjQxNTg&ixlib=rb-1.2.1&q=80&w=1080",
    id: 6,
  },
];

export const promisesImages = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(randomImages);
    }, 2000);
  });
  return promise;
};
