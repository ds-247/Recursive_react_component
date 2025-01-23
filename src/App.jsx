import "./App.css";
import FolderIcon from "@mui/icons-material/Folder";

function App() {
  let folder = [
    {
      name: "Movies",
      folder: [
        { name: "Action" },
        { name: "Adventure" },
        { name: "Mystery" },
        { name: "Crime" },
      ],
    },
    { name: "Music" },
    { name: "Books" },
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
      <ul>
        {folder.map((folder) => (
          <li key={folder.name}>
            <span>
              <FolderIcon />
              {folder.name}
            </span>

            <ul>
              {folder.folder?.map((folder) => (
                <li key={folder.name}>
                  <span>
                    <FolderIcon />
                    {folder.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
