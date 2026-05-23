import { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Note = { id: number; title: string; content: string };

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "Welcome", content: "This is your first note!" },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title.trim()) return;
    setNotes([...notes, { id: Date.now(), title, content }]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Notes</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={addNote}>
            Add Note
          </Button>
        </Paper>

        <List>
          {notes.map((note) => (
            <ListItem
              key={note.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => deleteNote(note.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={note.title}
                secondary={note.content}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}
