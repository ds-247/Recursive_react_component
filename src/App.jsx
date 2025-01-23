import "./App.css";
import FolderIcon from "@mui/icons-material/Folder";

function App() {
  let folder = ["Movies", "Music", "Books", "Apps"];

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
          <li>
            <span>
              <FolderIcon />
              {folder}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
