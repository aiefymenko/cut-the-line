import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const historyData = [
  {
    title: "Waiting",
    icon: <FontAwesomeIcon icon="fa-solid fa-clock" />,
    class: "waiting",
    number: 0,
  },

  {
    title: "Admitted",
    icon: <FontAwesomeIcon icon="fa-solid fa-circle-check" />,
    class: "admit",
    number: 0,
  },

  {
    title: "No Show",
    icon: <FontAwesomeIcon icon="fa-solid fa-ghost" />,
    class: "noShow",
    number: 0,
  },

  {
    title: "User Cancelled",
    icon: <FontAwesomeIcon icon="fa-solid fa-trash" />,
    class: "cancelled",
    number: 0,
  },

  {
    title: "Admin Cancelled",
    icon: <FontAwesomeIcon icon="fa-solid fa-trash" />,
    class: "cancelled",
    number: 0,
  },
];

export default historyData;
