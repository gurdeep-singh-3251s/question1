import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const initialColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFD1', '#FFD133', '#7D33FF'];

const ColorPalette = () => {
  const [colors, setColors] = useState(initialColors);

  const handleReplaceColor = (index) => {
    const newColor = prompt("Enter a new color:");
    if (newColor) {
      const updatedColors = [...colors];
      updatedColors[index] = newColor;
      setColors(updatedColors);
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedColors = [...colors];
    const [reorderedColor] = updatedColors.splice(result.source.index, 1);
    updatedColors.splice(result.destination.index, 0, reorderedColor);

    setColors(updatedColors);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Color Palette
        </Typography>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="colors" direction="horizontal">
            {(provided) => (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
              >
                {colors.map((color, index) => (
                  <Draggable key={color} draggableId={color} index={index}>
                    {(provided) => (
                      <motion.div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        whileHover={{ scale: 1.05 }}
                        onDoubleClick={() => handleReplaceColor(index)}
                        style={{
                          backgroundColor: color,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 100,
                          height: 100,
                          cursor: 'pointer',
                          ...provided.draggableProps.style
                        }}
                      >
                        {color}
                      </motion.div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Paper>
    </Container>
  );
};

export default ColorPalette;
