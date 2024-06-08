import './App.css';
import { Container, Paper, Typography, Box, Grid } from '@mui/material';
import Parent from './components/Parent';
import ColorPalette from './components/ColorPalette';
function App() {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Assignment Questions
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            Q1
          </Typography>
          <Typography variant="body1" paragraph>
            You have to create 3 components called parent, child1, and child2. Parent has a state named money of type
            number which child1 and child2 need to update. Child1 will increment it by 1000 and child2 will decrement it by
            500 on click of a button. Print the final value in the parent component.
          </Typography>
          <Parent />
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            Q2
          </Typography>
          <Typography variant="body1" paragraph>
            Create a color palette having 8 colors. User can replace any color with a new one. User can reorder this
            palette using drag and drop.
          </Typography>
          <ColorPalette />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
