import type { NextApiHandler } from "next";

interface Data {
  data: Record<string, never>;
}

const handler: NextApiHandler<Data> = (req, res) => {
  res.status(200).json({
    data: {},
  });
};

export default handler;
