type Node = {
    name: string;
    nodes?: Node[];
  };
  
  const folders: Node[] = [
    {
      name: "Home",
      nodes: [
        {
          name: "Movies",
          nodes: [
            {
              name: "Action",
              nodes: [
                {
                  name: "2024",
                  nodes: [{ name: "Lapatta Ladies" }, { name: "Panchayet" }],
                },
              ],
            },
            { name: "Comedy", nodes: [{ name: "2000" }] },
          ],
        },
        {
          name: "TV Shows",
          nodes: [{ name: "2024", nodes: [{ name: "The kapil sharma show" }] }],
        },
      ],
    },
    {
      name: "Downloads",
      nodes: [{ name: "2024", nodes: [{ name: "The kapil sharma show" }] }],
    },
    { name: "Documents", nodes: [{ name: "X Files" }] },
  ];

  export default folders