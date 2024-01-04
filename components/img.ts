import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";

interface imgObject {
  imgLink: any;
  title: string;
  desc: string;
}

const imgArray: imgObject[] = [
  {
    imgLink: p8,
    title: "Item 1",
    desc: "Description for Item 1",
  },
  {
    imgLink: p2,
    title: "Item 2",
    desc: "Description for Item 2",
  },
  {
    imgLink: p3,
    title: "Item 3",
    desc: "Description for Item 3",
  },
  {
    imgLink: p4,
    title: "Item 4",
    desc: "Description for Item 4",
  },
  {
    imgLink: p7,
    title: "Item 5",
    desc: "Description for Item 5",
  },
  {
    imgLink: p6,
    title: "Item 6",
    desc: "Description for Item 6",
  },
  {
    imgLink: p7,
    title: "Item 7",
    desc: "Description for Item 7",
  },
  {
    imgLink: p8,
    title: "Item 8",
    desc: "Description for Item 8",
  },
];

export default imgArray;
