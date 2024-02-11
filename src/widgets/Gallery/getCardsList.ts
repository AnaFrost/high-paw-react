import axios from "axios";

export const getCardsList = async (
  req: string,
): Promise<
  {
    items: {
      id: number;
      url: string;
      type: string;
      description: string;
    };
  }[]
> => {
  await axios
    .get(req)
    .then((res) => console.log(res.data))
    .then((data) => {
      return data;
    });
};

console.log(getCardsList("http://localhost:4000/cards"));
