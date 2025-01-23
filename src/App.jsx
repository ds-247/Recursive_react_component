import "./App.css";
import FolderIcon from "@mui/icons-material/Folder";

function App() {
  let folder = [
    {
      name: "Movies",
      folder: [
        { name: "Action" },
        {
          name: "Adventure",
          folder: [{ name: "2000s" }, { name: "2010s" }, { name: "1990s" }],
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
    { name: "Apps" },
  ];

  return (
    <div className="app-container">
      <ul>
        <li>
          <span>
            <FolderIcon />
            Home
          </span>
        </li>
      </ul>

      <Folder folder={folder} />
    </div>
  );
}

export default App;

function Folder({ folder }) {
  return (
    <div>
      <ul>
        {folder?.map((folder) => (
          <li key={folder.name}>
            <span>
              <FolderIcon />
              {folder.name}
            </span>

            <ul>
              <Folder folder={folder.folder} />
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
