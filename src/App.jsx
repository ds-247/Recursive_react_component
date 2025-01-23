import "./App.css";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useState } from "react";

function App() {
  let folder = [
    {
      name: "Home",
      folder: [
        {
          name: "Movies",
          folder: [
            { name: "Action" },
            {
              name: "Adventure",
              folder: [
                {
                  name: "2000s",
                  folder: [{ file: "Journey 2 Mysterious Island" }],
                },
                {
                  name: "2010s",
                  folder: [{ file: "Uncharted" }],
                },
                {
                  name: "1990s",
                  folder: [{ file: "Jumanji" }],
                },
              ],
            },
            { name: "Mystery" },
            { name: "Crime" },
          ],
        },
        { name: "Music" },
        {
          name: "Books",
          folder: [
            { name: "Novel" },
            { name: "Tales" },
            { name: "Poetic" },
            { name: "Crime" },
          ],
        },
        {
          name: "Apps",
          folder: [
            { name: "Twitter" },
            { name: "Trello" },
            { name: "Whatsapp" },
            { name: "Chess.com" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="app-container">
      <ul>
        {folder.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowStyle = {
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    transition: "transform 0.3s",
  };

  return (
    <li>
      <span onClick={() => setIsOpen((prev) => !prev)}>
        {folder.file ? (
          <>
            <InsertDriveFileIcon  />
            {folder.file}
          </>
        ) : (
          <>
            <ArrowForwardIosIcon style={arrowStyle} />
            <FolderIcon />
            {folder.name}
          </>
        )}
      </span>

      <ul>
        {isOpen &&
          folder.folder?.map((folder, index) => (
            <Folder folder={folder} key={folder.name + index} />
          ))}
      </ul>
    </li>
  );
}
