import { prisma } from "../../../utils/prisma";

const query = {
  getUser: () => {
    return {
      id: "cdcdc",
      name: "cdcdc",
      email: "cdcdc",
      password: "c5c5d",
      username: "cdc51c",
      phone: "cdcd2",
      // image:String
    };
  },
};

interface InputData {
  name: string;
  username: string;
  password: string;
  email: string;
}
const mutation = {
  createUser: async (
    _: any,
    { name, username, password, email }: InputData
  ) => {
    await prisma.user.create({
      data: { name, username, password, email },
    });
    return { success: true };
  },
};

export const resolver = {
  mutation,
  query,
};
